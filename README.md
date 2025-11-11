# Inspiring Quotes (Vue + BEM)

1) Open `index.html` or, preferably, serve the folder (Live Server / `python -m http.server` / `npx serve`) so `js/quotes.json` loads.  
2) Edit quotes in `js/quotes.json` (`author`, `quote`, `permalink`) to change the pool.  
3) Images live in `img/coding/`; update the `IMAGES` array in `js/script.js` if you rename or add files.  
4) Styles use BEM: blocks (`quote-app`, `quote-card`), elements (`__image`, `__content`), modifiers (`btn--primary`).  
5) Social sharing supports X/Twitter, Facebook, LinkedIn, plus Web Share API and copy-to-clipboard.  
6) If icons fail due to SRI, remove the `integrity` attribute on the Font Awesome link or replace it with the correct hash.  
7) Deploy on GitHub Pages by enabling Pages for the repo root; all paths are relative.  
8) No build step required—Vue 3 is loaded via CDN in `index.html`.  
9) If `quotes.json` fetch fails, a minimal fallback quote is shown automatically.
