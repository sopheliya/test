// alert("Diqqat");


// if (confirm("Saytimizga xush kelibsiz!")) {
//     document.write("Salom");
// }
// else {
//     document.write("Xayr")
// }


// var ism;

// if (confirm("Saytimizga xush kelibsiz!")) {
//     ism = prompt("Ismingizni yozing!");
//     alert("Salom " + ism);
// }
// else {
//     alert("Xayr");
// }

// console.log(typeof ism);




// let ism = prompt("ismingizni kiriting: ")


// let birinchiHarf = ism.charAt().toUpperCase()
// let qolganHarflar = ism.slice(1).toLowerCase() 

// let natija = birinchiHarf + qolganHarflar

// alert(`Salom ${natija}`)



// const natijalar = [12, 34, 56, 0, 100, 26, 74, 97]

// for (let i = 0; i < natijalar.length; i++) {
//     if (natijalar[i] === 0) {
//         continue
//     }

//     console.log(`Sizning natijangiz:${natijalar[i]}`)

//     if (natijalar[i] === 100) {
//         console.log("Siz eng yuqori natija to`pladingiz!")
//         break
//     }
// }



const baho = 'D'

switch (baho) {
    case 'A': 
        console.log(`Sizning bahoyingiz A`)
        break
    case 'B':
        console.log(`Sizning bahoyingiz B`)
        break     
    case 'C':
        console.log(`Sizning bahoyingiz C`)
        break     
    case 'D':
        console.log(`Sizning bahoyingiz D`)
        break     
    default:
        console.log(`Sizning bahoyingiz mavjud emas!`)
}




