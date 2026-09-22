// var total = 0;
// var total1 = 0;

// for (let index = 0; index < mahasiswa.length; index++) {
//     total += mahasiswa[index].AlgoritmaI; 
//     total1 += mahasiswa[index].PBO; 
// }

// var mean = total/mahasiswa.length;
// console.log(mean)

// var mean1 = total1/mahasiswa.length;
// console.log(mean1)

// // )*Math.sqrt(NA1MK2*2+NA3MK2*2+NA3MK2*2));
// // console.log(mahasiswa.length);
// var meanMK = 0;

// for (let index = 0; index < mahasiswa.length; index++) {
//     meanMK = mahasiswa[index].AlgoritmaI + mahasiswa[index].PBO / mahasiswa.length
//     console.log(meanMK)
// }

// var nilaibaru = 0;

// for (let index = 0; index < mahasiswa.length; index++) {
//     nilaibaru = meanMK - mahasiswa[index].Algoritma1
// }


// ====================================================================================== 

var a = [
    {
        Nama: ['ALGORITMA', 'PBO', 'K1', 'CITRA', 'STATISTIK', 'DATA M.', 'GD', 'ML', 'MD', 'ALJABR L.'],
        Nilai: [65, 80, 60, 65, 100, 75, 62, 42, 100, 87]
    }, 
    {
        Nama: ['ALGORITMA', 'PBO', 'K1', 'CITRA', 'STATISTIK', 'DATA M.', 'GD', 'ML', 'MD', 'ALJABR L.'],
        Nilai: [41, 45, 65, 42, 45, 41, 52, 33, 35, 37]
    },
    {
        Nama: ['ALGORITMA', 'PBO', 'K1', 'CITRA', 'STATISTIK', 'DATA M.', 'GD', 'ML', 'MD', 'ALJABR L.'],
        Nilai: [95, 99, 42, 86, 62, 85, 43, 85, 95, 82]
    },
    {
        Nama: ['ALGORITMA', 'PBO', 'K1', 'CITRA', 'STATISTIK', 'DATA M.', 'GD', 'ML', 'MD', 'ALJABR L.'],
        Nilai: [49, 55, 75, 0, 82, 65, 79, 46, 41, 55]
    },
    {
        Nama: ['ALGORITMA', 'PBO', 'K1', 'CITRA', 'STATISTIK', 'DATA M.', 'GD', 'ML', 'MD', 'ALJABR L.'],
        Nilai: [63, 52, 57, 85, 54, 77, 64, 60, 56, 52]
    },
    {
        Nama: ['ALGORITMA', 'PBO', 'K1', 'CITRA', 'STATISTIK', 'DATA M.', 'GD', 'ML', 'MD', 'ALJABR L.'],
        Nilai: [45, 48, 60, 48, 43, 43, 85, 99, 37, 34]
    },
    {
        Nama: ['ALGORITMA', 'PBO', 'K1', 'CITRA', 'STATISTIK', 'DATA M.', 'GD', 'ML', 'MD', 'ALJABR L.'],
        Nilai: [88, 65, 25, 75, 41, 65, 21, 88, 84, 45]
    },
    {
        Nama: ['ALGORITMA', 'PBO', 'K1', 'CITRA', 'STATISTIK', 'DATA M.', 'GD', 'ML', 'MD', 'ALJABR L.'],
        Nilai: [84, 81, 62, 81, 79, 87, 56, 76, 36, 39]
    },
    {
        Nama: ['ALGORITMA', 'PBO', 'K1', 'CITRA', 'STATISTIK', 'DATA M.', 'GD', 'ML', 'MD', 'ALJABR L.'],
        Nilai: [42, 48, 81, 40, 55, 20, 81, 42, 40, 47]
    },
    {
        Nama: ['ALGORITMA', 'PBO', 'K1', 'CITRA', 'STATISTIK', 'DATA M.', 'GD', 'ML', 'MD', 'ALJABR L.'],
        Nilai: [45, 84, 70, 15, 88, 55, 80, 15, 67, 100]
    },
]

var t = [
    {
        Nilai: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Nilai: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Nilai: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Nilai: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Nilai: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Nilai: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Nilai: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Nilai: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Nilai: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        Nilai: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
]

var meanMK1         = [0,0,0,0,0,0,0,0,0,0];
var total           = [0,0,0,0,0,0,0,0,0,0];
var hasil           = [0,0,0,0,0,0,0,0,0,0];
var hasilx          = [0,0,0,0,0,0,0,0,0,0];
var hasil1          = [0,0,0,0,0,0,0,0,0,0];
var hasil2          = [0,0,0,0,0,0,0,0,0,0];
var sim             = [0,0,0,0,0,0,0,0,0,0];


for (var c = 0; c < a.length; c++){
    for (var b = 0; b < a[c].Nilai.length; b++){
      total[c] +=  a[c].Nilai[b]
    }
}

// console.log(total)

for(var x = 0; x < total.length; x++ ){
    for( var z = 0; z < a[x].Nilai.length; z++){
        meanMK1[x] = Math.ceil(total[x] / a[x].Nilai.length)
    }
}


// console.log(meanMK1)

for(var x = 0; x < total.length; x++ ){
    for( var z = 0; z < a[x].Nilai.length; z++){
        t[x].Nilai[z] = Math.ceil(a[x].Nilai[z] - meanMK1[x])
    }
}

// console.log(t)


for(var j = 0; j < a[0].Nilai.length; j++){
    for(var x = 0; x < a[0].Nilai.length; x++){
        hasilx[j] = Math.ceil((t[0].Nilai[j] * t[1].Nilai[j]))
    
        // hasil1[j] = (Math.sqrt(t[0].Nilai[j]*2))
        // hasil2[j] = (Math.sqrt(t[1].Nilai[j]*2))
    }
}


// console.log(hasilx)
// console.log(hasil1)
// console.log(hasil2)



for(var o = 0; o < total.length; o++ ){
    for( var h = 0; h < a[0].Nilai.length; h++){
        sim[h] = Math.ceil((hasil1[o].Nilai/ hasil2[o].Nilai))
    }
}

// console.log(sim)

String.fromCharCode(num + 64);

var nilaimhs = 90
var nilaiabjad = ""

if(nilaimhs == 90 && nilaimhs == 100){
    nilaiabjad = "A"
}

if(nilaimhs == 50 && nilaimhs == 70){
    nilaiabjad = "C"
}

console.log(nilaimhs)
console.log(nilaiabjad)