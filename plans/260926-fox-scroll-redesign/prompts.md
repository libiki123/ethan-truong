# GPT image prompts (v2)

Replace `{STYLE}` with your own style line everywhere below. Keep it word-for-word identical in every prompt; that is what makes separate images look like one set.
A good style line names four things: medium, line, light, palette. Example: "flat cel-shaded chibi, thick rounded outlines, soft top light, pastel teal and orange".

Order of work:
1. Round A: layout mockups. We pick one.
2. Round B: the fox.
3. Round C: the scenes for the chosen layout.
4. Round D: the fox poses.

Save everything to `assets/art/src/`.

---

## Round A: layout exploration (mockups only, text allowed)
These are throwaway website concept boards used to choose a layout. Nothing from them ships.
Run each prompt at **16:9**, then run your favourite again at **9:16** to see the phone version.

**Base:**
> Website homepage concept mockup for a game developer's portfolio, {STYLE}. A chibi fox mascot is the guide character. Show the full page as one tall scrolling layout split into 3 panels stacked left to right as if the page were scrolled: panel 1 hero, panel 2 "Design" section, panel 3 "Dev" section. Minimal UI: small nav bar, one headline per section, a few project thumbnail cards in the Dev section. Clean, readable, lots of breathing room. Layout concept: **{LAYOUT}**

Swap `{LAYOUT}` for each of these:

| # | Layout | `{LAYOUT}` text |
|---|---|---|
| A1 | **Storybook pages** | Each section is an open storybook spread; the page turns between sections and the fox hops from one page to the next. Text sits on the left page, illustration on the right. |
| A2 | **Descending world** | One tall vertical illustration: sky and village at the top, a winding path down through a forest workshop to an underground glowing dev cave. The fox walks down the path as you scroll; sections are stops along the path. |
| A3 | **Diorama windows** | Cream page with rounded-corner "window" frames of different sizes, like a collage; each window is a little scene with the fox doing something. Text wraps around the windows asymmetrically. |
| A4 | **Sideways journey** | Scrolling down moves the scene sideways like a 2D platformer level: a grassy hill, then the village, then a workshop. The fox walks along the ground line; headlines float in the sky above each area. |
| A5 | **Fox's desk** | Top-down view of the fox's messy desk that fills the screen: sketchbook (Design), glowing laptop (Dev), sticky notes as nav. The fox naps on the desk in the hero and sits up at each item. |

Tell me which one (or a mix, e.g. "A2 path with A3 windows") and I'll rewrite the plan around it.

---

## Round B: the fox
**B1. Character sheet: `fox-sheet.png` (16:9)**
> Character reference sheet of one original chibi fox mascot, {STYLE}. Big head (about 40% of total height), large triangular ears, oversized fluffy tail with a cream tip, orange fur, cream muzzle and chest, dark brown paws and ear tips, small brown satchel with a glowing cyan pixel-heart pin. Show front, side, back and three-quarter views plus 4 facial expressions (sleepy, happy, curious, focused). Same character in every view, full body, transparent background, no text.

**B2. Canonical pose: `fox-ref.png` (1:1)**
> Use the attached sheet. The same fox, three-quarter view, standing, friendly, full body, centered, transparent background, no text.

From here on, attach `fox-ref.png` to every fox prompt and start the prompt with: **"The same fox as the reference image, identical design and colors."**

If a result comes back with a fake checkerboard instead of real transparency, re-run it with "solid flat magenta #ff00ff background" and I'll key the magenta out myself.

---

## Round C: scenes (after the layout pick)
I'll write these for the layout you choose. The rules they'll follow:
- **Layers, not flat pictures:** separate back, middle and front images at the same framing, so they can move at different speeds.
- **Named empty space** for the text in every scene ("empty sky upper right").
- **No text** in any image.
- **The same light direction** in every scene.

---

## Round D: fox poses (reference: `fox-ref.png`, transparent background, full body)
Each still is also the start frame for a short image-to-video clip (locked camera). I'll cut each clip down to 6–8 frames at 10 fps for the stop-motion feel.

| File | Still prompt | Video motion |
|---|---|---|
| `fox-sleep.png` | Curled up asleep, tail over nose, side view facing right | Slow breathing, one ear twitches |
| `fox-wake.png` | Sitting up mid-yawn, front paws stretched forward | Wakes, yawns, stretches, stands |
| `fox-walk.png` | Side view facing right, mid-stride | Walk cycle in place, tail swaying |
| `fox-design.png` | Sitting, holding a paintbrush, sketchbook open in front | Paints, tilts head to judge, paints again |
| `fox-dev.png` | Standing on hind legs typing on a tiny glowing laptop | Types, pauses, taps excitedly |
| `fox-wind.png` | Ears pinned back, tail streaming behind as if in strong wind | Braces, fur ripples |
| `fox-wave.png` | Sitting, looking at the viewer, one paw raised to wave | Waves twice, smiles |

Check every image against this list: both ears with dark tips, satchel with the cyan pin, cream tail tip, dark paws. Regenerate any image that fails.
