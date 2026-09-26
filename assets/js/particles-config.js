if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 700 } },
      color: { value: '#FF7F00' },
      shape: { type: 'circle' },
      opacity: { value: 0.8 },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: '#FF9700', opacity: 0.4, width: 1 },
      move: { enable: true, speed: 6, out_mode: 'out' },
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
      modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } },
    },
    retina_detect: true,
  });
}
