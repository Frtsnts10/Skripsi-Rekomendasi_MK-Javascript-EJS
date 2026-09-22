var mongoose = require("mongoose");
var schemaHistori = new mongoose.Schema({
  Nama: String,
  NIM: String,
  Rek: Boolean,

  Kelompok: [
    {
      nama_Kel: String,
      MK: [
        {
          Kode_MK: String,
          nama_MK: String,
          Nilai: String,
          hasil: String,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("datahistori", schemaHistori);
