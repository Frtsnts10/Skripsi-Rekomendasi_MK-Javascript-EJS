# Legacy / unused views

These `.ejs`/`.html` files are not referenced by any route in `routes/index.js` or
`routes/datamatakuliah.js` — Express only looks in `views/` for templates, and none
of these ever match a `res.render(...)` call. They were moved here (instead of
deleted outright) in case they contain markup or ideas worth reusing, since some
look like drafts of features that were never wired up (e.g. `Choose.ejs`,
`DKriteria.ejs`, `print.ejs`, `printadm.ejs`, `LogAdmin.ejs`, `RegAdmin.ejs`).

If you're sure none of these are needed, this whole folder can be deleted.
