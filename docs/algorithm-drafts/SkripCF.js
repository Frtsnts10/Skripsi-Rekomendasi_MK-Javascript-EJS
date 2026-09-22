 
//dummy awal

var nilaia1 = 5
var nilaib1 = 9
var nilaic1 = 4

var nilaia2 = 1
var nilaib2 = 2
var nilaic2 = 5

var nilaia3 = 9
var nilaib3 = 9
var nilaic3 = 1


//cari mean
var mean1 = ((nilaia1+nilaib1+nilaic1)/3)
var mean2 = ((nilaia2+nilaib2+nilaic2)/3)
var mean3 = ((nilaia3+nilaib3+nilaic3)/3)

console.log(mean1)
console.log(mean2)
console.log(mean3)


//nilai - mean 
var nba1 = (nilaia1- mean1)
var nbb1 = (nilaib1- mean1)
var nbc1 = (nilaic1- mean1)

console.log(nba1)
console.log(nbb1)
console.log(nbc1)

var nba2 = (nilaia2- mean2)
var nbb2 = (nilaib2- mean2)
var nbc2 = (nilaic2- mean2)

console.log(nba2)
console.log(nbb2)
console.log(nbc2)

var nba3 = (nilaia3- mean3)
var nbb3 = (nilaib3- mean3)
var nbc3 = (nilaic3- mean3)

console.log(nba3)
console.log(nbb3)
console.log(nbc3)


//nilai baru (nilai - mean) antara mhs 1 mk 1 dikalikan dgn mhs 1 mk 2
var nbaA12 = (nba1*nba2)  
var nbaB12 = (nbb1*nbb2) 
var nbaC12 = (nbc1*nbc2) 

var nbaA13 = (nba1*nba3) 
var nbaB13 = (nbb1*nbb3) 
var nbaC13 = (nbc1*nbc3) 

console.log(nbaA12)
console.log(nbaB12)
console.log(nbaC12)

console.log(nbaA13)
console.log(nbaB13)
console.log(nbaC13)

//nilai baru per mk dijumlah 
var sum1 = (nbaA12+nbaB12+nbaC12)
var sum2 = (nbaA13+nbaB13+nbaC13)

console.log(sum1)
console.log(sum2)


//cari a^2 dari nilai baru mk1 mhs a
var ax = (nba1*nba1) + (nbb1*nbb1) + (nbc1*nbc1)
var bx = (nba2*nba2) + (nbb2*nbb2) + (nbc2*nbc2)

console.log(ax)
console.log(bx)

//akar a dan b
var akara = Math.sqrt(Math.ceil(ax))
var akarb = Math.sqrt(Math.ceil(bx))

console.log(akara)
console.log(akarb)

//sim = nilai sum dibagi a x b
var sima = (sum1/(akara*akarb))

console.log(sima)

// var zx = (nba1*nba1) + (nba2*nba2) + (nba3*nba3)
// var yx = (nbb1*nbb1) + (nbb2*nbb2) + (nbb3*nbb3)