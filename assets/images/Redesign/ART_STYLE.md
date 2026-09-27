# Art Style Guide

## Shared style line

Use this line word for word in every image prompt:

> painted storybook digital gouache, textured dark-brown outlines, warm soft morning light, orange, cream, and forest-brown palette

## Overall look

- Hand-painted storybook illustration with clear, friendly silhouettes.
- Use textured dark-brown outlines and broad painted color shapes. Keep edges soft and organic, not vector-clean or photorealistic.
- Light scenes with warm, diffuse morning light and gentle shadows.
- Build the main palette from warm cream, copper-orange, and forest-brown; use forest greens in environments. Small cyan accents may appear in scene props, but not on the fox's satchel.
- Keep website mockups airy and readable: cream paper, restrained UI, generous negative space, and only a few short labels.

## Mascot

- Chibi orange fox with a large rounded head, oversized triangular ears with dark-brown tips and cream interiors, two small pale forehead marks, a cream muzzle and chest, dark-brown paws, and a fluffy orange tail with a cream tip.
- Lock the face, eyes, ear shape, markings, body proportions, and satchel across views and animation frames. Keep the fur a balanced warm fox orange: neither reddish nor yellow-gold.
- Paint fur with broad gouache shapes, subtle brush texture, and a few readable tufts. Use fine, textured dark-brown contour lines rather than heavy black outlines; avoid flat vector fills, dense hair strokes, scratchy etching, and noisy microdetail.
- The fox wears one small brown crossbody satchel low at the visible side hip, with a neat blank flap and a subtle brass buckle. Its single continuous brown strap attaches to the pouch, crosses the visible chest diagonally, and disappears naturally over the opposite shoulder. Show the connection clearly in seated poses; never let the bag float or duplicate the strap.
- Keep the satchel flap blank: no heart, pin, icon, logo, screen, cyan mark, or glow. This replaces the earlier heart-pin direction.
- In seated poses, the tail is a compact, low, softly curved shape beside the haunch; its base remains attached to the rump. Keep its orange and cream proportions consistent as it moves from lying down to sitting. Do not let it become tall, straight, or suddenly larger between frames.

## Character animation and sprite sheets

- Animate at 24 fps by default, choosing the number of drawings and duration that make each action natural; do not force a fixed frame count on every clip.
- Keep the fox at one consistent scale and registration across frames. Anchor its paws to a common ground line without adding a drawn ground or shadow, and leave enough transparent space that ears and tails do not touch neighboring cells.
- For the current wake-up action: curled asleep, eyes open, head lifts, front paws push the chest up while the hips stay low, then the fox settles into a comfortable seated pose. Keep this action short, with smooth distinct in-betweens. No stretch, yawn, turn, walking, or standing finish in this clip.
- The current wake-up sheet has 12 poses in two rows of six. Its final seated pose should match the entry pose of the seated idle clips so clips can swap without a visible jump. Other actions may use different frame counts as needed.
- Planned seated idle actions: sit → restrained yawn → same sit; sit → rise on four paws → gentle stretch → same sit; sit → become sleepy → small head shake → same sit. The sleep interaction is sleep → briefly annoyed → same sleeping pose. Give loops matching first and last poses. These are separate clips, not additions to the wake-up action.
- When editing an approved sheet, retain its frame order, pose silhouettes, placement, tail scale, colors, and texture except for the explicitly requested change. Treat markup as placement guidance and remove it from the final art.

## Scenes and game thumbnails

- Preserve the storybook page / open-book framing used in the current portfolio concept.
- Make thumbnail artwork read clearly at small size while matching the same painted palette and lighting.
- Current concepts: a royal forest match-3 scene, a side-view forest platformer, and a turn-based fantasy tactics scene. Keep these as fictional game concepts with no logos or in-image copy.
- Keep page headings and UI labels sparse and legible. Do not add decorative text to scene or game art.

## Valley hero illustration

- Keep the approved 1672 × 941, 16:9 framing, camera, scale, and composition for edits to the established illustration. Preserve the castle and sky unless a request explicitly changes them.
- The large foreground tree and grassy hill form the focal point. The harbor, river, coastal town, valley village, forest, and castle should support it with moderate detail: midway between the earlier busy version and the overly simplified version. Give the hill only slightly more definition than its surroundings, with a few legible flowers, rocks, and grass shapes.
- Keep the fox's flat resting spot on the hill intact. Render the tree, lantern, wooden fences, flowers, rocks, and bushes as clean, readable painted forms. Simplify small marks and avoid spiky extensions, busy clusters, blur, and smudged fills.
- The road should meet the market naturally; the market has enough room to read clearly. The main harbor is substantial, with a small town following the coastline. Leave a clear waterway.
- Use a warm orange, cream, and forest-brown torn-page edge. Make the tear feel integrated with the illustration, with low paper noise that fades gradually toward a more solid color at the bottom.
- For local edits, change only the requested region. Follow markup as placement guidance and remove all annotation marks from the finished art.

## Layered hero assets

- Keep all layers at the original 1672 × 941 canvas size and registration so they align over one another and reproduce the approved illustration when composited.
- L1 is the painted background: sky, castle, forest, valley village, and any area revealed by removing the foreground. Paint revealed areas naturally without blur or white gaps.
- L2 contains the large tree, lantern, and grassy hillside with its resting spot and fences. Keep everything else transparent; finish grass and a few flowers near fence ends without stretching the hill farther than the approved outline.
- L3 contains only the bottom torn-page edge and front rock and bush clusters. Keep everything else transparent.
- Use real alpha for cutouts. If real transparency is unavailable, use a uniform flat `#ff00ff` key background with clean edges and no magenta fringe. Preserve the approved artwork's position and painted contours during extraction.

## Character-sheet backgrounds

- Request real transparency for standalone character art when available.
- If transparency is unreliable, use a solid flat magenta `#ff00ff` key background. Never use a fake checkerboard, and do not carry magenta into the portfolio scenes.

## Avoid

- Photorealism, glossy 3D rendering, noisy fur detail, thin black outlines, harsh lighting, or a palette that drifts from warm cream, orange, and forest-brown.
- Changing the fox's defining colors, proportions, satchel placement, or blank satchel design between assets.
