# Algorithm drafts (not wired into the app)

These files were previously scattered across the repo root and `public/`
(where they were being served as public static assets, unintentionally).
None of them are called from any route — they're exploratory/incomplete
prototypes for the recommendation algorithm, kept together for reference:

- `C45.js`, `algo.js` — two separate, both-broken attempts at a C4.5
  (entropy/information gain) classifier. `algo.js` gets further than
  `C45.js` but has a real bug: it reads a `.hasil` field that doesn't
  exist on its own sample data (should read `.nilai`), so every record
  lands in the same bucket.
- `CF.js`, `SkripCF.js`, `pyth.py`, `skrip.php` — collaborative-filtering
  (similarity-based) attempts in three different languages. `pyth.py` has
  a real working `cosine_similarity`-based function, but it's never called.
  The rest are dummy/hand-calculated scratch work or unfinished snippets.
- `DataMhs.js`, `test.js` — hardcoded sample datasets used by the scratch
  scripts above.

Whichever method(s) the thesis methodology actually specifies should be
implemented fresh against the real `DataTest`/`DataHistori` Mongoose models
in `models/`, not by resurrecting these files as-is.
