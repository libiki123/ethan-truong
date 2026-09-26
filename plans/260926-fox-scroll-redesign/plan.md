# Fox scroll redesign: plan

Status: **draft, awaiting owner decisions (see bottom)**. No code written.
Art direction by a Fable agent; structure follows the scroll-craft skill.

## 1. Brief (owner's words, condensed)
- Vibe: cartoony, chibi, fantasy, Disney village. Reference: Genshin Impact homepage key art.
- Journey: **Home**, where the fox sleeps on a cliff above the village; then **Design**; then **Dev**. Experience moves to the Resume page.
- The fox follows you down the page. It wakes and walks off, then walks back in with a new idle.
- Scope: 1 to 3 scroll sections with one "wow" moment. Not many fancy sections.
- World: distinct scenes connected by the fox, not one continuous camera flight.

**Feeling curve**
| Act | Feeling | Caused by |
|---|---|---|
| Home | Calm, cosy wonder | Golden-hour cliff, fox asleep and breathing, village below |
| Home → exit (**peak**) | Delight ("it noticed me") | The fox wakes as you scroll, stretches, and trots off while the village lights come on window by window |
| Design | Warm curiosity | Lantern-lit porch; the fox sketching on a scroll |
| Dev | Focused, cool energy | Night workshop; the fox tinkering at a glowing rune terminal |
| Close | Settled, invited | The fox finishes and looks at you; contact links |

**Peak:** "you scroll and the fox wakes up, stretches, and runs off while the whole village lights up below."
**Tell-someone:** "it's the site where a little fox wakes up when you scroll and walks you through the guy's work."

## 2. Art direction (Fable)
- **Look:** painterly gouache storybook backgrounds with a clean cel-shaded chibi fox (tapered dark-umber line). This is the Genshin / Ni no Kuni split. It is a specific illustrated medium, not the clay-diorama AI look.
- **Light:** warm key from the upper left in every scene, plus a rim light on the fox's right edge.
- **Palette:**

  | Token | Hex |
  |---|---|
  | canvas | `#101820` (dusk blue) |
  | surface | `#1b2836` |
  | ink | `#f4ede1` |
  | ink-soft | `#a3b1bd` |
  | accent | `#ff8a2a` (fox orange) |
  | accent-ink | `#2a1503` |

- **Type:** Fraunces for display; keep Work Sans for body text.
- **Fox:** head-to-body ratio 1:1.5, big triangular ears, and a tail as long as the body that does most of the acting.
  - Markings: cream muzzle, chest and tail tip; chocolate socks and ear tips.
  - Accessory: a small leather satchel with a glowing cyan pixel-heart pin (the game-dev nod).
- **Scenes:**
  - Home, "The Overlook": golden hour, sleeping on the cliff lip.
  - Design, "The Studio Porch": dusk, amber lanterns, sketching.
  - Dev, "The Workshop": night, cyan glyph terminal, tinkering.
  - Time of day tells the sections apart, not the layout.
- **Signature move:** scroll-velocity ears. Fast scrolling swaps in two "windblown" frames (ears pinned, tail streaming). When you stop, the fox shakes it off and goes back to its idle.

## 3. Structure (scroll-craft)
**Grammar:** a new one, **"Guided stages"**: three pinned scenes, with the fox as the one persistent element that walks between them.
- Filmic one-shot and continuous world lost because the owner wants the fox to *leave and re-enter*. That is a cut between scenes, not one flight.
- The other grammars (editorial, poster, gallery, split, cutlist, live surface) don't fit a mascot-led story.
- **Nav:** a thin pawprint trail with 3 stops (Home, Design, Dev) that jumps to each scene. Resume and Contact go on the right.
- **Close:** the Dev scene holds. The fox finishes, turns to camera, and the contact links sit on the workbench plane.

**Score**
| Scene | Scroll length | Device | Motion |
|---|---|---|---|
| Home | ~2.5 vh (**largest, peak**) | `parallax`: 5 planes with alpha, pinned | 4-frame sleep loop → scroll-scrubbed 8-frame wake/stretch → walk off right. Lit-window layer steps in. Plane rates: sky 0.15, village 0.35, cliff+fox 0.7, grass 1.0 |
| Design | ~1.2 vh | `reveal` + `pin`, copy on the left | Walks in from the left behind a porch post, settles, then 6-frame sketch loop |
| Dev | ~1.2 vh | `pin` + pointer; glyphs pulse on hover | Walks in behind the workbench, then 6-frame tinker loop. Contact close |

- Total is about 5 vh, which is short on purpose (the owner asked for 1 to 3 scrolls).
- **Reduced motion:** a static awake pose per scene, lights already on, no pinning.
- **Phone:** own crop per scene, fox about 120px tall, text above the scene instead of behind it.

## 4. Content moves
- `index.html` becomes the 3 scenes.
- The **Dev** scene shows 3 or 4 featured project cards and links to a new `/projects/` index. That index reuses the existing `project-card` include and grid.
- `resume.html` gets the Experience section (moved from home, reusing `_data/experience.yml`) above the PDFs.
- **Design** section content: **undecided, see Q1.** No design work exists in `_projects/` today, and nothing will be invented.
- Project pages keep their current layout but take on the new tokens and fonts.

## 5. Tech (ponytail: reuse, don't add)
- Vanilla JS and CSS, no framework, no build step. GitHub Pages compatible.
- Reuse the scroll-craft engine (`scrollcraft.js`/`.css`, already in the repo) for pin, parallax and reveal, themed through tokens.
- About 80 lines of bespoke JS on top:
  - a sprite stepper (a CSS `steps()` loop for idles; scroll-progress → frame index for the wake-up)
  - the velocity-ears swap
- Sprites: one WebP sprite sheet with alpha per animation, at 1x and 2x.
- Remove particles.js and its vendor file (the hero no longer uses it).

## 6. Assets
**Frame budget**
| Animation | Frames | Kind |
|---|---|---|
| sleep | 4 | loop |
| wake-stretch | 8 | one-shot, scroll-scrubbed |
| walk | 8 | loop, mirrored for direction |
| design-idle | 6 | loop |
| dev-idle | 6 | loop |
| windblown | 2 | swap-in |
| settle | 6 | one-shot, shared |

That is 40 fox frames in total.

**Plates:** Home needs 5 layers (sky, far castle and mountains, village, cliff, grass) plus a lit-window overlay. Design and Dev need 3 layers each: back, mid, and a front occluder.

**Pipeline**
1. **Character sheet first.** One canonical three-quarter-view still becomes the reference for everything else.
2. **Composite test before anything else:** one fox frame over the Home plate, at desktop and 390px width. This decides the style in a single round.
3. **Plates:** GPT image, on a flat magenta background for the cutout layers; I key them out with ffmpeg.
4. **Animation, Fable's pick:** image-to-video from each pose still, then take 6 to 8 evenly spaced frames at 10 fps and key out the magenta. Video models hold the character on-model; per-frame image generation drifts (ears, satchel, tail tip). Stepping to 10 fps gives the stop-motion feel.
5. Check every frame against a model checklist (ears, satchel, cream tail tip, socks) and regenerate any that drift.

Prompts: see `prompts.md`.

## 7. Verify
- `jekyll serve` plus the scroll-craft `shoot.mjs` at desktop, 390px and reduced motion. Read the contact sheet.
- Feel check against the curve above.
- Real phone test for sprite and video playback.

## Risks
1. **Fox drifts off-model.** Mitigation: video-then-downsample, one reference image, the checklist.
2. **Halo edges on cutouts.** Mitigation: magenta keying, then inspect each cutout against both the dark canvas and the lit plate.
3. **Fox looks like a sticker on a painting.** Mitigation: the same light direction everywhere, a contact shadow, and the composite test at step 2.

## Open questions for owner
1. **Design section:** what goes in it (game or level design docs, UI mockups, art)? No design work exists in the repo.
2. **Image-to-video tool:** scroll-craft uses Kling through kie.ai, but `KIE_AI_API_KEY` isn't set. Options: set the key, use a video tool you already have (Sora, Kling, Runway, Veo), or fall back to per-frame GPT images (cheaper, more drift).
3. **"Stop-motion animation skill":** there's no such skill installed. The 10 fps stepped-sprite pipeline above is the plan unless you meant a specific tool.
