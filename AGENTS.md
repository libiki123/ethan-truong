# AGENTS.md — ethan-truong portfolio

Shared instructions for Claude Code and Codex. `CLAUDE.md` just imports this file.

## What this is
Personal game-dev portfolio for Ethan Truong, a **Jekyll** site built natively by GitHub Pages:
https://libiki123.github.io/ethan-truong/ (repo `libiki123/ethan-truong`, branch `master`, `baseurl: /ethan-truong`).
Pushing to `master` deploys it. There is no custom Action, no npm, and no test suite.

## Layout
| Path | What |
|---|---|
| `_config.yml` | Site title, email, social links, `projects` collection, `jekyll-redirect-from` |
| `index.html` | Home: hero (particles), experience, project grids (Unity / Unreal), contact |
| `resume.html` | Resume + transcript PDFs |
| `_data/experience.yml` | Job entries (company, url, logo, role, period, type, highlights) |
| `_projects/<name>.md` | One file per project → `/projects/<name>/`. Front matter drives the card and page |
| `_layouts/default.html` | `<head>`, nav, footer, scripts (particles only when `particles: true`) |
| `_layouts/project.html` | Project page: video, tags, stats, Markdown body, links/store badges |
| `_includes/` | `nav`, `footer`, `social`, `tags`, `project-card` |
| `assets/css/main.css` | The only stylesheet. Colour tokens live in `:root`, tag colours in `.tag[data-tag=…]` |
| `assets/js/main.js` | Vanilla JS: nav border on scroll, `.reveal` fade-in, play card previews only while visible |
| `assets/js/particles-config.js` + `vendor/particles.min.js` | Hero particles (skipped under reduced motion) |
| `assets/media/` | `<slug>.mp4` (detail video, ≤1280px) + `<slug>-preview.mp4` (muted card loop, 640px) |
| `assets/images/`, `assets/docs/` | Logos, engine icons, store badges, favicon; resume/transcript PDFs |

## Adding a project
1. Encode the media into `assets/media/`:
   - `ffmpeg -i in.mp4 -vf "scale='min(1280,iw)':-2" -c:v libx264 -crf 27 -preset slow -c:a aac -b:a 64k -movflags +faststart <slug>.mp4`
   - `ffmpeg -i in.mp4 -vf "scale=640:-2,fps=24" -c:v libx264 -crf 30 -an -movflags +faststart <slug>-preview.mp4`
2. Copy an existing `_projects/*.md` and edit its front matter. Required keys: `title`, `engine` (`unity`|`unreal`), `order`, `media`, `tags`, `highlights`, `status`, `type` and `duration`. Optional keys: `duration_label`, `private`, `links`, `stores`.
3. A tag with no colour rule in `main.css` falls back to grey. Add a rule if needed; the slug comes from `slugify`, so `C#` becomes `c`.

## Gotchas
- Always build URLs with `| relative_url`. The site lives under `/ethan-truong`, so bare `/assets/...` paths break.
- Old URLs (`unity-pp.html`, etc.) redirect through `redirect_from` in each project's front matter. Keep them.
- Only plugins on the GitHub Pages whitelist work (no custom plugins without switching to an Action build).
- Icons come from Font Awesome 6 (cdnjs). The font is Work Sans (Google Fonts).

## Working here
- Local preview needs Ruby (Windows: `winget install RubyInstallerTeam.RubyWithDevKit.3.3`, then reopen the terminal). Run `bundle install` once, then `bundle exec jekyll serve` → http://localhost:4000/ethan-truong/. PowerShell 5.1 has no `&&`, so run the commands separately. If Ruby is missing, say so rather than claiming the change was verified.
- Check changes at desktop and phone widths before calling a UI change done.
- Keep the personal content accurate: don't invent projects, dates, employers or stats.
- Commit only when asked. Use conventional commits with no AI references. Don't commit `_site/`.
