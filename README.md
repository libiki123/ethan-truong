# Ethan Truong — Portfolio

Game developer portfolio (Unity & Unreal): https://libiki123.github.io/ethan-truong/

Built with Jekyll and deployed by GitHub Pages on every push to `master`.

Local preview needs Ruby (Windows: `winget install RubyInstallerTeam.RubyWithDevKit.3.3`, then reopen the terminal):

```sh
bundle install              # once
bundle exec jekyll serve    # http://localhost:4000/ethan-truong/
```

To add a project, add `_projects/<name>.md` plus `assets/media/<slug>.mp4` and `<slug>-preview.mp4`. See `AGENTS.md` for details.
