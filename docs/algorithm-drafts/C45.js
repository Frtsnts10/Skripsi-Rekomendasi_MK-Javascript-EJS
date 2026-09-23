var mahasiswa = [
    {
        Nama: "Filbert",
        NIM: 1,
        Matkul: [
            {
            Semester: "Satu",
            MK: [
                {
                Nama_MK: "Algoritma",
                Nilai: 65
                },
                {
                Nama_MK: "C++",
                Nilai: 41
                },
                {
                Nama_MK: "MatDis",
                Nilai: 0
            }
            ]
            },
            {
            Semester: "Dua",
            MK: [
                {
                Nama_MK: "Aljabar",
                Nilai: 95
                },
                {
                Nama_MK: "PBO I",
                Nilai: 49
                },
                {
                Nama_MK: "Kalkulus I",
                Nilai: 75
                }
            ]
            }
        ],
        Hasil : true
    },
    {
        Nama: "Syahrul",
        NIM: 2,
        Matkul: [
            {
            Semester: "Satu",
            MK: [
                    {
                    Nama_MK: "Algoritma",
                    Nilai: 80
                    },
                    {
                    Nama_MK: "C++",
                    Nilai: 0
                    },
                    {
                    Nama_MK: "MatDis",
                    Nilai: 45
                    }
                ]
            },
            {
            Semester: "Dua",
            MK: [
                    {
                    Nama_MK: "Aljabar",
                    Nilai: 0
                    },
                    {
                    Nama_MK: "PBO I",
                    Nilai: 59
                    },
                    {
                    Nama_MK: "Kalkulus I",
                    Nilai: 55
                    }
                ]
            }
        ],
        Hasil : false
    },
    {
        Nama: "Rayvaldi",
        NIM: 4,
        Matkul: [
            {
            Semester: "Satu",
            MK: [
                    {
                    Nama_MK: "Algoritma",
                    Nilai: 60
                    },
                    {
                    Nama_MK: "C++",
                    Nilai: 65
                    },
                    {
                    Nama_MK: "MatDis",
                    Nilai: 42
                    }
                ]
            },
            {
            Semester: "Dua",
            MK: [
                    {
                    Nama_MK: "Aljabar",
                    Nilai: 75
                    },
                    {
                    Nama_MK: "PBO I",
                    Nilai: 75
                    },
                    {
                    Nama_MK: "Kalkulus I",
                    Nilai: 85
                    }
                ]
            }
        ],
        Hasil : true
    }
]

var total=mahasiswa.length;
var TotalRekomendasi=0;
var TotalMK=0;
for (var a=0;a<total;a++){
  if (mahasiswa[a].Hasil===true){
      TotalRekomendasi=TotalRekomendasi+1;
  }
  else {
      TotalMK=TotalMK+1;
  }
}

var EntropyTotal=((-TotalMK/total)*Math.log2(TotalMK/total))+((-TotalRekomendasi/total)*Math.log2(TotalRekomendasi/total));

var Algoritma = [
    {
        total: 0,
        Rekomendasi:0,
        MK:0,
        entropy:0
      },
      {
        total: 0,
        Rekomendasi:0,
        MK:0,
        entropy:0
      },
      {
        total: 0,
        Rekomendasi:0,
        MK:0,
        entropy:0
    },
  ];
  for (var b=0;b<total;b++){
    if (mahasiswa[b].Algoritma=="C"){
      var c=0;
    }
    else if (mahasiswa[b].Algoritma=="B"){
      var c=1;
    }
    else if (mahasiswa[b].Algoritma=="A"){
      var c=2;
    }
    Algoritma[c].total=Algoritma[c].total+1;
    if (mahasiswa[b].Hasil==true){
    Algoritma[c].Rekomendasi=Algoritma[c].Rekomendasi+1;
    }
    else if (mahasiswa[b].Hasil==false){
        Algoritma[c].MK=Algoritma[c].MK+1;
    }
   B
  }
  for(var d=0;d<3;d++){
    Algoritma[d].entropy=((-Algoritma[d].MK/Algoritma[d].total)*Math.log2(Algoritma[d].MK/Algoritma[d].total))+((-Algoritma[d].Rekomendasi/Algoritma[d].total)*Math.log2(Algoritma[d].Rekomendasi/Algoritma[d].total));
    Algoritma[d].entropy = isNaN(Algoritma[d].entropy) ? 0 : Algoritma[d].entropy
  }
  
  //hitung entropy MatDis
  var MatDis = [
    {
        total: 0,
        Rekomendasi:0,
        MK:0,
        entropy:0
      },
      {
        total: 0,
        Rekomendasi:0,
        MK:0,
        entropy:0
      },
      {
        total: 0,
        Rekomendasi:0,
        MK:0,
        entropy:0
    },
  ];
  for (var b=0;b<total;b++){
    if (mahasiswa[b].MatDis=="C"){
      var c=0;
    }
    else if (mahasiswa[b].MatDis=="B"){
      var c=1;
    }
    else if (mahasiswa[b].MatDis=="A"){
      var c=2;
    }
    MatDis[c].total=MatDis[c].total+1;
    if (mahasiswa[b].Hasil==true){
      MatDis[c].Rekomendasi=MatDis[c].Rekomendasi+1;
    }
    else if (mahasiswa[b].Hasil==false){
      MatDis[c].MK=MatDis[c].MK+1;
    }
   
  }
  for(var d=0;d<3;d++){
    MatDis[d].entropy=((-MatDis[d].MK/MatDis[d].total)*Math.log2(MatDis[d].MK/MatDis[d].total))+((-MatDis[d].Rekomendasi/MatDis[d].total)*Math.log2(MatDis[d].Rekomendasi/MatDis[d].total));
    MatDis[d].entropy = isNaN(MatDis[d].entropy) ? 0 : MatDis[d].entropy;
  }
  //hitung entropy PIB
  var PIB = [
    {
        total: 0,
        Rekomendasi:0,
        MK:0,
        entropy:0
      },
      {
        total: 0,
        Rekomendasi:0,
        MK:0,
        entropy:0
      },
      {
        total: 0,
        Rekomendasi:0,
        MK:0,
        entropy:0
    },
  ];
  for (var b=0;b<total;b++){
    if (mahasiswa[b].PIB=="C"){
      var c=0;
    }
    else if (mahasiswa[b].PIB=="B"){
      var c=1;
    }
    else if (mahasiswa[b].PIB=="A"){
      var c=2;
    }
    PIB[c].total=PIB[c].total+1;
    if (mahasiswa[b].Hasil==true){
      PIB[c].Rekomendasi=PIB[c].Rekomendasi+1;
    }
    else if (mahasiswa[b].Hasil==false){
      PIB[c].MK=PIB[c].MK+1;
    }
   
  }
  for(var d=0;d<3;d++){
    PIB[d].entropy=((-PIB[d].MK/PIB[d].total)*Math.log2(PIB[d].MK/PIB[d].total))+((-PIB[d].Rekomendasi/PIB[d].total)*Math.log2(PIB[d].Rekomendasi/PIB[d].total));
    PIB[d].entropy = isNaN(PIB[d].entropy) ? 0 : PIB[d].entropy;
  }
  var Gain = [0,0,0];
  Gain[0]=(EntropyTotal-(((Algoritma[0].total/total)*Algoritma[0].entropy)+((Algoritma[1].total/total)*Algoritma[1].entropy)+((Algoritma[2].total/total)*Algoritma[2].entropy)));
  Gain[1]=(EntropyTotal-(((MatDis[0].total/total)*MatDis[0].entropy)+((MatDis[1].total/total)*MatDis[1].entropy)+((MatDis[2].total/total)*MatDis[2].entropy)));
  Gain[2]=(EntropyTotal-(((PIB[0].total/total)*PIB[0].entropy)+((PIB[1].total/total)*PIB[1].entropy)+((PIB[2].total/total)*PIB[2].entropy)));