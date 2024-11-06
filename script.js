// Video 1
// Object Literal
// PROBLEM: tidak efektif untuk object yang banyak.
// let mahasiswa = {
//     nama: 'Rafif Nuha',
//     energy: 10,
//     makan: function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// Function Declaration

// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },

//     main: function(jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//     },

//     tidur: function(jam) {
//         this.energy += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };

// let rafif = Mahasiswa('Rafif Nuha', 10);
// let bagus = Mahasiswa('Arya Bagus', 10);

// function Mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energy += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energy -= porsi;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energy += porsi * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }


// let rafif = new Mahasiswa('Rafif Nuha', 10);

// versi class
// class Mahasiswa {
//     constructor(nama, energy) {
//         this.nama = nama;
//         this.energy = energy;
//     }

//     makan(porsi) {
//     this.energy += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
//     }

//     main(jam) {
//         this.energy -= porsi;
//         return `Halo ${this.nama}, selamat bermain!`;
//     }

//     tidur(jam) {
//         this.energy += porsi * 2;
//         return `Halo ${this.nama}, selamat tidur!`;
//     }
// }

// let rafif = new Mahasiswa ('Rafif Nuha', 10);
// let bagus = new Mahasiswa ('Arya Bagus', 15);

// Constuctor Function
// Keyword new
// function Mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;

//     this.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function(jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//     }
// }

// let rafif = new Mahasiswa('Rafif Nuha', 10);


// Video 2
// console.log(nama);
// var nama ='Rafif';

// creation phase pada Global Context
// nama var = undfined
// nama function = fn()
// hoisting
// windows = global object
// this = window

// execution phase

// console.log(sayHello());

// var nama = 'Rafif';
// var umur = 33;


// function sayHello() {
//     return (`Halo, nama saya ${nama}, saya ${umur} tahun`);
// }

// function membuat Local Execution Context
// terdapat creation dan execution
// window
// arguments
// hoisting

// var nama = 'Rafif';
// var username = '@zein_dakara';

// function cetakURL() {
//     // console.log(arguments);
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username))

// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();

// Closure

// function init() {
//     let nama = 'Rafif';
//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
// }
// init();


// function init() {
//     // let nama = 'Rafif';
//     return function (nama) {
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('Rafif');
// panggilNama('Nuha');

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// console.dir(selamatMalam);

// let add = (function() {
//     let counter = 0;
//     return function() {
//         return ++counter;
//     }
// })();

// console.log(add());
// console.log(add());
// console.log(add());

// Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama('Rafif'))

// Arrow Function
// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama('Rafif Nuha'))

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('Rafif Nuha', 'Pagi'))

// Implisit Return
// const tampilNama = nama => `Halo, ${nama}`;

// console.log(tampilNama('Rafif Nuha'))

// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

// let mahasiswa = ['Rafif', 'Nuha', 'Daniswara'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);
 
// let jumlahHuruf = mahasiswa.map( nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map ( nama =>({ nama: nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);