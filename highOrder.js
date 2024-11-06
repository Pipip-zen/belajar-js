const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// const newAngka = [];

// for( let i =0; i < angka.length; i++) {
//     if(angka[i] >=3) {
//         newAngka.push(angka[i]);
//     }
// };
// console.log(newAngka); 

// Filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// Map
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// Reduce
// const newAngka = angka.reduce((accumulator, currentValue) =>
// accumulator + currentValue, 0);
// console.log(newAngka);

// Method Chaining
// Cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5) 
    .map(a => a * 3)
    .reduce((acc, cur) => acc + cur); 
console.log(hasil);