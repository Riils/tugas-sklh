// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log("Genap: " + i);
//     } else {
//          console.log("Ganjil: " + i);
//      }
//  }

// a = 100;
// while(a >= 1){
//     if (a % 2 == 1) {
//         console.log("Genap: " + a);
//      }
      
    
//     document.write("<span>angka:</span>" + a +'<br>')
//     a--;   }


// // Fungsi untuk menghitung faktorial
// function hitungFaktorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * hitungFaktorial(n - 1);
//     }
//   }
  
//   // Menghitung faktorial dari angka 5
//   let angka = 5;
//   let faktorial = hitungFaktorial(angka);
  
//   // Menampilkan hasil
//   console.log("Faktorial dari " + angka + " adalah: " + faktorial);


// // Fungsi untuk menghitung faktorial dengan menggunakan perulangan for
// function hitungFaktorial(n) {
//     let hasil = 1;
  
//     for (let i = 1; i <= n; i++) {
//       hasil *= i;
//     }
  
//     return hasil;
//   }
  
//   // Menghitung faktorial dari angka 5
//   let angka = 5;
//   let faktorial = hitungFaktorial(angka);
  
//   // Menampilkan hasil
//   console.log("Faktorial dari " + angka + " adalah: " + faktorial);

// Menghitung faktorial dari angka 5 menggunakan for
// let angka = 5;
// let faktorial = 1;

// for (let i = 1; i <= angka; i++) {
//   faktorial *= i;
// }

// // Menampilkan hasil
// console.log("Faktorial dari " + angka + " adalah: " + faktorial);

// menghitung tahun
// Fungsi untuk menentukan apakah suatu tahun adalah tahun kabisat
// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Looping untuk menghitung tahun kabisat dari tahun 1600 hingga 2024
// for (let year = 1600; year <= 2024; year++) {
//   if (isLeapYear(year)) {
//     console.log(year + ' adalah tahun kabisat.');
//   } else {
//     console.log(year + ' bukan tahun kabisat.');
//   }
// }

// for (let year = 1600; year <= 2024; year++) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 100 === 0) {
//     console.log(year + ' adalah tahun kabisat.');
//    } else {
//   //   console.log(year + ' bukan tahun kabisat.');
//    }
// }

// for (let year = 1600; year <= 2024; year++) {
//   if (year % 400 === 0) {
//     console.log(year + ' adalah tahun kabisat.');
//   } else if (year % 100 === 0) {
//     console.log(year + ' bukan tahun kabisat.');
//   } else if (year % 4 === 0) {
//     console.log(year + ' adalah tahun kabisat.');
//   } else {
//     console.log(year + ' bukan tahun kabisat.');
//   }
// }

// for (let year = 1600; year <= 2024; year += 4) {
//     if (year % 400 === 0) {
//       console.log(year + ' adalah tahun kabisat.');
//     } else if (year % 100 === 0) {
//       console.log(year + ' bukan tahun kabisat.');
//     } else if (year % 4 === 0) {
//       console.log(year + ' adalah tahun kabisat.');
//     } else {
//       console.log(year + ' bukan tahun kabisat.');
//     }
//   }

// // Menghitung faktorial dari angka 5 menggunakan while
// let angka = 5;
// let faktorial = 1;
// let i = 1;

// while (i <= angka) {
//   faktorial *= i;
//   i++;
// }

// // Menampilkan hasil
// console.log("Faktorial dari " + angka + " adalah: " + faktorial);



 let angka = 5;
 let faktorial = 1;
 let i = 1;

 do {
    faktorial *= i;
    i++
 } while (i <= angka);

 console.log ("Faktorial dari " + angka + " adalah: " + faktorial);
