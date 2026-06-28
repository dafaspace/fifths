# Another Circle of Fifths

Interactive circle of fifths — keys, modes, diatonic chords, relations
(neighbours, mediants, tritone, dim7, Neapolitan, Neo-Riemannian P/R/L),
Camelot & solfège notation, transpose, share links, ear-training quiz.
Single-file, zero-build, vanilla JS PWA.

## Files
- `index.html` — the whole app
- `manifest.json`, `sw.js`, `icon.png` — PWA install + offline cache

## Release ritual (do this on every version bump)
1. Copy the current `index.html` to `../Archive/circle-of-fifths-vX.Y.Z.html`
   (keep the OLD version number — snapshot before changing anything).
2. Make the changes in `index.html`.
3. Bump the version in three places: the `<h1>` label, `sw.js` `CACHE`,
   and this README.
4. Commit, tag `vX.Y.Z`, then push.

## Versioning
SemVer. Baseline of this repo = **v2.6.0** (consolidated from the
feature-complete `circle-of-fifths-en-v2.5 (8)` prototype: Tonal/Modal,
transpose, share, solfège, corrected Neo-Riemannian, PWA wiring).

## Changelog
- **v2.6.1** — fixed Camelot numbering to the standard wheel (C=8B, was 1B);
  removed dead code (`NOTES`, `MAJ_IDX`, `MIN_IDX`, `isMinorRing`); share link
  now also encodes app mode (Tonal/Modal), Camelot/solfège, and light theme.
- **v2.6.0** — consolidated baseline + PWA wiring.
