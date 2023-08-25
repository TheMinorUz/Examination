// -------------------1--------------
// Scope turlari 3ga bo'linadi
// Ular: "globalThis","fenetion","block"

// -------------------2---------------
// function dividIntager(number) {         //Bu funksiya kiritilgan son (number)ni barcha bo'luvchilarini topib beradi
//                                         // Masalan: 7
//                                         // Result: 1, 7
// for(let i=1;i<=number;i++){
//     if (number%i==0) {
//         console.log(i);
//     }
// }
// }
// dividIntager(7)

// -------------------3---------------

// function grades(grade) {                //Bu funksiya o'quvchilarni bahosiga qarab darajasini aniqlab beradi
//                                         //Masalan: 5
//                                         //Result: A'lo
//     switch (grade) {
//         case 1:
//             return `Yomon`
//             break;
//         case 2:
//             return `Qoniqarsiz`
//             break;
//         case 3:
//             return `Qoniqarli`
//             break;
//         case 4:
//             return `Yahshi`
//             break;
//         case 5:
//             return `A'lo`
//             break;
//         default:
//             return `Xatolik`
//             break;
//     }
// }
// console.log(grades(5));


// ---------------------4----------------

// function timeCalculator(seconds){                       //Ushbu funksiya kun boshidan beri o'tgan soniyalarni soatlar va sekundlarda taqsimlab beradi
//                                                         //Masalan: 3659
//                                                         //Result: 1 soat, 59 sekund
//     hours=parseInt(seconds/3600)
//     console.log(`${hours} hour, ${seconds-(hours*3600)} seconds`);
// }
// timeCalculator(3659)

// ---------------------5----------------

// 'JS' 1995-yilda yaratilgan ,1995-yilning o'zida 'Browser'da ishlay boshlagan, va 2009-yildan boshlab 'Backend' da ishlay boshlagan