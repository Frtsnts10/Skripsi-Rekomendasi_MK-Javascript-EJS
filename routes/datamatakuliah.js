const router = require("express").Router();
const usercontroller = require("../controllers/usercontroller");
const middleware = require("../middleware");


router.get("/", middleware.isAdmin, usercontroller.viewmatakuliah);
router.post("/", middleware.isAdmin, usercontroller.addmatakuliah);
router.put("/", middleware.isAdmin, usercontroller.editmatakuliah);
router.delete("/:id", middleware.isAdmin, usercontroller.deletematakuliah);



module.exports = router;