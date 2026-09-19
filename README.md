# What BDH Remembers

Presentation deck for DataForge 2026, Pathway Track.

Open the published page, then use the arrow keys. Press `R` to return to the
first slide. To export a PDF, print the page and save as PDF: each slide
becomes one page.

## Running it locally

```bash
python3 -m http.server 4319
```

Then open `http://localhost:4319/`.

## What is here

| File | Purpose |
|------|---------|
| `index.html` | Slide declarations and the speaker notes |
| `slides.jsx` | The eight slides, as React components |
| `deck-stage.js` | Sidebar, keyboard control, scaling, printing |
| `vendor/` | React and Babel, stored here rather than loaded from a CDN |

React and Babel are vendored on purpose. If a third-party origin is slow or
blocked during a talk, the deck renders blank.

## Credits

The Pathway wordmark comes from the Pathway media kit and marks work this deck
cites. Fonts are Funnel Display, Inter and Inconsolata, all under the SIL Open
Font License.

The artifact this deck presents is a separate repository.
