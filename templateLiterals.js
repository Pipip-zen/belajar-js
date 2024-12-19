// Template Literals / Template String
// const nama = 'Rafif';
// const umur = 19;

// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);
// console.log('Halo, nama saya ' + nama + ', dan saya ' + umur + ' tahun.'); 

// Embedded Expressions
// console.log(`${1 + 1}`);
// console.log(`${alert('Halo!')}`);

// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragments
const mhs = {
    nama: ' Rafif Nuha',
    umur: 19,
    nrp: '5324600006',
    email: 'rafif.nuha@gmail.com',
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);