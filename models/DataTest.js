var mongoose = require("mongoose");
var schemaTest = new mongoose.Schema({
  Nama: String,
  NIM: String,

  matkul: [
    {
      Kode_MK: String,
      nama_MK: String,
      nilai: String,
      hasil: String,
    },
  ],
});

module.exports = mongoose.model("datauser", schemaTest);
