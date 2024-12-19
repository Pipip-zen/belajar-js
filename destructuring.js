// Destructuring

// function kalkukasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2,3);

// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi] = kalkukasi(2,3);

// console.log(bagi);

// function kalkukasi(a , b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkukasi(2,3);

// console.log(kurang);

// Destructuring Function Arguments

const mhs1 = {
    nama: 'John',
    umur: 20,
    email: 'john@gmail.com',
    nilai: {
        tugas: 80,
        uts: 90,
        uas: 85
    }
}

// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({nama, umur , nilai: {tugas, uts, uas}}) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1));