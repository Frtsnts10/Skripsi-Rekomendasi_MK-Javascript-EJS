const Matakuliah = require("../models/DataTest");

const MATKUL_COUNT = 9;

function buildMatkul(body) {
  const matkul = [];
  for (let i = 0; i < MATKUL_COUNT; i++) {
    matkul.push({
      nama_MK: body[`nama_MK${i}`],
      nilai: body[`nilai${i}`],
      hasil: body[`hasil${i}`],
    });
  }
  return matkul;
}

module.exports = {
  viewmatakuliah: async (req, res) => {
    try {
    
      const matakuliahd = await Matakuliah.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
     
      res.render("index", {
        matakuliahd,
        alert,
        title: "Admin", 
      });
    } catch (error) {
      res.redirect("/datamatakuliah");
    }
  },

  addmatakuliah: async (req, res) => {
    try {
      const { Nama, NIM } = req.body;
      await Matakuliah.create({ Nama, NIM, matkul: buildMatkul(req.body) });

      req.flash("alertMessage", "Success add data Mahasiswa");
      req.flash("alertStatus", "success");
      res.redirect("/datamatakuliah");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/datamatakuliah");
    }
  },

  editmatakuliah: async (req, res) => {
    try {
      const { id, Nama, NIM } = req.body;

      const matakuliahd = await Matakuliah.findOne({ _id: id });
      matakuliahd.Nama = Nama;
      matakuliahd.NIM = NIM;
      matakuliahd.matkul = buildMatkul(req.body);

      await matakuliahd.save();

      req.flash("alertMessage", "Success edit data mahasiswa");
      req.flash("alertStatus", "success");
      res.redirect("/datamatakuliah");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/datamatakuliah");
    }
  },

  deletematakuliah: async (req, res) => {
    try {
      const { id } = req.params;
      await Matakuliah.findByIdAndDelete(id);
      req.flash("alertMessage", "Success delete data mahasiswa");
      req.flash("alertStatus", "warning");
      res.redirect("/datamatakuliah");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/datamatakuliah");
    }
  },
};