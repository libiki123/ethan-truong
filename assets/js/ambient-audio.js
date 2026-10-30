// Seaside ambience, on by default; bird calls follow the visible flock's actual CSS clock.
// At night (html[data-mode="night"]) the birds are hidden, so the gulls fall quiet, and crickets fade in over the waves.
// Browsers only allow sound after the visitor interacts, so it starts on their first click, tap or key press.
// Muting is remembered; a muted visitor stays muted on their next visit.
(() => {
  const button = document.getElementById("ambientToggle");
  const birds = document.getElementById("heroBirds");
  const flock = birds.querySelector(".hero__flock");
  const dialog = document.getElementById("projDialog");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  let context, master, waves, gull, crickets, buffers, loading;
  const night = () => document.documentElement.dataset.mode === "night";
  let enabled = true, version = 0, poll = 0, suspendTimer = 0, lastIteration = -1;
  try { enabled = localStorage.getItem("sound") !== "off"; } catch (_) { /* storage blocked: keep the default */ }
  const label = (error = false) => {
    const text = enabled ? "Mute sound" : "Enable sound";
    button.setAttribute("aria-pressed", String(enabled));
    button.setAttribute("aria-label", text);
    button.title = error ? "Ambience unavailable — click to retry" : text;
  };
  const blocked = () => dialog.open || [...document.querySelectorAll("video")]
    .some((video) => !video.paused && !video.ended && !video.muted && video.volume > 0);
  const clock = () => {
    const animation = flock.getAnimations()[0];
    if (!animation || animation.currentTime == null) return null;
    const { delay, duration } = animation.effect.getTiming();
    const time = Number(animation.currentTime) - delay;
    return time < 0 ? null : { iteration: Math.floor(time / duration), phase: (time % duration) / duration };
  };
  const stopGull = () => {
    if (!gull) return;
    const active = gull;
    gull = null;
    active.gain.gain.cancelScheduledValues(context.currentTime);
    active.gain.gain.setTargetAtTime(0, context.currentTime, .025);
    try { active.source.stop(context.currentTime + (document.hidden ? 0 : .12)); } catch (_) { /* already ended */ }
  };
  const cue = () => {
    const time = clock();
    if (!time || time.iteration === lastIteration || time.phase < .035 || time.phase > .18 ||
        context.state !== "running" || Number(getComputedStyle(flock).opacity) <= 0) return;
    lastIteration = time.iteration;
    stopGull();
    const source = context.createBufferSource(), gain = context.createGain();
    source.buffer = buffers.gull;
    gain.gain.value = .11;
    source.connect(gain).connect(master);
    source.onended = () => { source.disconnect(); gain.disconnect(); if (gull && gull.source === source) gull = null; };
    gull = { source, gain };
    source.start();
  };
  const sync = () => {
    clearTimeout(suspendTimer);
    const quiet = !enabled || document.hidden || blocked();
    if (master) {
      master.gain.cancelScheduledValues(context.currentTime);
      master.gain.setTargetAtTime(quiet ? 0 : 1, context.currentTime, .055);
      if (document.hidden) context.suspend().catch(() => {});
      else if (enabled) context.resume().catch(() => { enabled = false; label(true); sync(); });
      else suspendTimer = setTimeout(() => context.suspend().catch(() => {}), 220);
    }
    const watch = !quiet && !reduced.matches && !birds.classList.contains("is-paused") && buffers;
    if (watch && !poll) poll = setInterval(cue, 160);
    if (!watch) {
      clearInterval(poll); poll = 0;
      const time = clock();
      if (time) lastIteration = time.iteration; // Never replay a missed cue after a pause.
    }
    if (quiet || !watch) stopGull();
  };
  const load = () => {
    if (buffers) return Promise.resolve(buffers);
    if (!loading) loading = Promise.all([button.dataset.wavesUrl, button.dataset.gullUrl, button.dataset.cricketsUrl].map(async (url) => {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Audio unavailable");
      return context.decodeAudioData(await response.arrayBuffer());
    })).then(([waveBuffer, gullBuffer, cricketBuffer]) => (buffers = { waves: waveBuffer, gull: gullBuffer, crickets: cricketBuffer }))
      .catch((error) => { loading = null; throw error; });
    return loading;
  };
  const start = async () => {
    const attempt = ++version;
    try {
      if (!context) {
        context = new (window.AudioContext || window.webkitAudioContext)();
        master = context.createGain(); master.gain.value = 0; master.connect(context.destination);
      }
      clearTimeout(suspendTimer);
      // Resume inside the gesture handler, before fetching, to satisfy browser activation rules.
      await Promise.all([context.resume(), load()]);
      if (attempt !== version || !enabled) return;
      if (!waves) {
        waves = context.createBufferSource();
        const gain = context.createGain();
        waves.buffer = buffers.waves; waves.loop = true; gain.gain.value = .075;
        waves.connect(gain).connect(master); waves.start();
      }
      if (!crickets) {
        const source = context.createBufferSource(), gain = context.createGain();
        source.buffer = buffers.crickets; source.loop = true; gain.gain.value = night() ? .05 : 0;
        source.connect(gain).connect(master); source.start();
        crickets = gain;
      }
      sync();
    } catch (_) {
      if (attempt === version) { enabled = false; label(true); sync(); }
    }
  };
  button.addEventListener("click", () => {
    enabled = !enabled;
    try { localStorage.setItem("sound", enabled ? "on" : "off"); } catch (_) { /* not remembered */ }
    label();
    if (enabled) start(); else { version++; sync(); }
  });
  // First interaction anywhere else starts the default-on sound. A press on the button itself is left to its click handler (it means "mute").
  const unlock = (event) => {
    if (button.contains(event.target)) return;
    for (const type of unlockEvents) document.removeEventListener(type, unlock, true);
    if (enabled && !master) start();
  };
  const unlockEvents = ["pointerup", "keydown", "touchend"]; // the events browsers accept as a gesture that unlocks sound
  for (const type of unlockEvents) document.addEventListener(type, unlock, true);
  label();
  new MutationObserver(sync).observe(birds, { attributes: true, attributeFilter: ["class"] });
  new MutationObserver(sync).observe(dialog, { attributes: true, attributeFilter: ["open"] });
  // Crickets follow the morning / night switch with a slow fade, like the page.
  new MutationObserver(() => {
    if (!crickets) return;
    crickets.gain.cancelScheduledValues(context.currentTime);
    crickets.gain.setTargetAtTime(night() ? .05 : 0, context.currentTime, .45);
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-mode"] });
  document.addEventListener("visibilitychange", sync);
  for (const event of ["play", "pause", "ended", "volumechange"]) document.addEventListener(event, sync, true);
  reduced.addEventListener("change", sync);
})();
