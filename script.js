// Object Literal
// let mahasiswa = {
//     nama: 'Rafif Nuha',
//     energy: 10,
//     makan: function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// Function Declaration
// function Mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     mahasiswa.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     mahasiswa.main = function(jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//     }
//     return mahasiswa;
// }

// let rafif = Mahasiswa('Rafif Nuha', 10);
// let bagus = Mahasiswa('Arya Bagus', 10);

// Constuctor Function
// Keyword new
function Mahasiswa(nama, energy) {
    this.nama = nama;
    this.energy = energy;

    this.makan = function(porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    this.main = function(jam) {
        this.energy -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`)
    }
}

let rafif = new Mahasiswa('Rafif Nuha', 10);

//  Object.create