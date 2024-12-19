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

// 1. HTML Fragments
// const mhs = {
//     nama: ' Rafif Nuha',
//     umur: 19,
//     nrp: '5324600006',
//     email: 'rafif.nuha@gmail.com',
// };
 
// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// console.log(el);

// 2. Looping
// const mhs = [
//     {
//         nama: 'Rafif Nuha',
//         email: 'rafif.nuha@gmail.com',
//     },
//     {
//         nama: 'Doddy',
//         email: 'doddy@gmail.com',
//     },
//     {
//         nama: 'Erik',
//         email: 'erik@gmail.com',
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//         </ul>`).join('')}
// </div>`

//3. Conditionals
// ternary
// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat . ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`

// 4. Nested
// HTML Fragments bersarang

// const mhs = {
//     nama: 'Rafif Nuha',
//     semester: 5,
//     matakuliah: [
//         'Rekayasa Web', 
//         'Analisis Sistem Informasi',
//         'Pemrograman Sistem Interaktif',
//         'Perancangan Sistem Berorientasi Object'
//     ]
// };

// function cetakMataKuliah(matakuliah) {
//     return `
//     <ol>
//         ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>
//     `;
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="semester">Semester:${mhs.semester}</span>
//     <h4>Mata Kuliah :</h4>
//     ${cetakMataKuliah(mhs.matakuliah)}
// </div>`
 
// document.body.innerHTML = el;

// Taggged Templates

// const nama = 'Rafif Nuha';
// const umur = 19;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}
//     `, '')
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Highlight
const nama = 'Rafif Nuha';
const umur = 19;
const email = 'rafif.nuha@gmail.com'

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>
    `, '')
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun,
dan email saya adalah: ${email}`;

document.body.innerHTML = str;