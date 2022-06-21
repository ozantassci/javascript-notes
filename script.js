// let js = 'harika'
// if (js === 'harika') alert('Javascript süper')
// 40 + 23 + 56 - 23
// console.log(40 + 23 + 56 - 23)
// console.log('Murat')
// console.log(23)

// let firstName = 'Namık'
// console.log(firstName)
// console.log(firstName)
// console.log(firstName)
// first_name

// let firstName = "Ozan"
// let age = 28.0
// let ready = false

// let country

// console.log(true);
// console.log(firstName);

// let ready = false
// console.log(ready)

// console.log(typeof true)
// console.log(typeof ready)
// console.log(typeof age)
// console.log(typeof firstName)

// ready = "evet"

// ======== OPERATORLER ==============

// const şimdi = 2040

// const yaşOzan = şimdi - 1994

// const yaşNamık = şimdi - 2000
// console.log(yaşNamık, yaşOzan);
// console.log(yaşOzan * 2, yaşOzan /10 , 2**3);

// const ad = "Ozan"
// const soyad = "Taşcı"

// console.log(ad + " " + soyad);






// ======= Strings & Template Literals ========================================================= //

// const ad = "Murat"
// const iş = "öğretmen"
// const doğumYılı = "1986"
// const yıl = 2040



// // const murat = "I'm " + ad + ', a' + (yıl - doğumYılı) + 'years old '

// const yeniMurat = `I'm ${ad}, ${yıl - doğumYılı} years old ${iş}    `
// console.log(yeniMurat);

// ======= Strings & Template Literals ===================================================== // 






// ================================ IF ELSE STATEMENT ====================================== //

// const yaş = 18
// const yaşUygunMu = yaş >= 18

// if (yaşUygunMu) {
// console.log("Murat ehliyet alabilir");
// }

// if (yaş >=18) {
//     console.log("Murat ehliyet alabilir");
//     } else {
//         const kaçYılKaldı = 18 - yaş
//         console.log(`Murat çok genç. ${kaçYılKaldı} yıl kadar beklemesi gerekiyor`)
//     }

//     const doğumYılı = 2012
//     let yüzyıl
//     if (doğumYılı <= 2000) {
//       yüzyıl = 20   
//     } else {
//          yüzyıl = 21
//     }
//     console.log(yüzyıl);

// ========================= IF ELSE STATEMENT ================================= //







// ======================= TYPE CONVERTION ========================= //

// const girişYılı = '1986'
// console.log(Number(girişYılı), girişYılı);

// console.log(Number(girişYılı) + 18);
// console.log(+girişYılı + 18);

// console.log(Number('Murat'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// ======================= TYPE COERCION ========================= //

// console.log("Ben " + 36 + " yaşındayım");
// console.log("Ben " + '36' + " yaşındayım");


// console.log('36' - '10' - 3); //eksi ifade türü metinden çıkarıp NUMBER a çeviriyor.
// console.log('36' + '10' + 3); //artı ifade türü değiştirmedi, metin olarak birleştirdi.
// console.log('36' * 2);

// ======================= TYPE COERCION ========================= //









// ======================= TRUTHY & FALSY VALUES ========================= //
// 5 falsy (sözde yanlış) değerler: 0, "", undifined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(''));


// const money = 0; // 0

// if (money) {
//     console.log("Sakın harcama");
// } else {
//     console.log("Çok çalışmalısın")
// }



// let yükseklik; //undifined

// if (yükseklik) {
// console.log("Yükseklik tanımlanmamış");    
// } else {
//    console.log("Yükseklik yok"); 
// }


// ======================= TRUTHY & FALSY VALUES ==================== //





//  ==================== Eşitlik Operatörleri ====================== 

// const yaş = '18'

// if (yaş === 18) console.log('Yeni yetişkin oldum (katı)');
// if (yaş == 18) console.log('Yeni yetişkin oldum(gevşek)');

// const favori = Number(prompt('En sevdiğim numara'))
// console.log(typeof favori)

// if (favori == 23) { // "23" == 23
//     console.log('23 bir sayıdır');
// }

// if (favori === 23) { 
//     // "23" === 23
//     console.log('23 bir sayıdır');
// } else if (favori === 7){
//     console.log("7 şanslı numaram");
// }else if(favori ===9) {
//     console.log('9 fena değil');
// }
// else {
//     console.log("Sayı 23 ve 7 değil");
// }

// if (favori !== 23) {
//     console.log('Neden 23 değil')
// } else if(favori === 9){
//     console.log('9 fena değil');
// }   


//  ==================== Boolean Logic ====================== 

// const ehliyetiVarMı = true //A

// const görüşüVarMı = false // B

// console.log(ehliyetiVarMı && görüşüVarMı);

// console.log(ehliyetiVarMı || görüşüVarMı);

// console.log(!ehliyetiVarMı);

// const kullanabilirMi = ehliyetiVarMı && görüşüVarMı

// if (ehliyetiVarMı && görüşüVarMı) {
//     console.log('Murat araç kullanabilir');
// } else{
//     console.log('Murat araç kullanamaz');
// }

// const yorgunMu = false // C

// // console.log(ehliyetiVarMı || görüşüVarMı || yorgunMu);
// console.log(ehliyetiVarMı && görüşüVarMı && yorgunMu);

// if (ehliyetiVarMı && görüşüVarMı && !yorgunMu) {
//     console.log('Murat araç kullanabilir');
// } else{
//     console.log('Murat araç kullanamaz');
// }



//  ==================== Boolean Logic ====================== 










//  ==================== Switch Case ====================== 

// const gün = "cuma"

// switch (gün) {
//     case "pazartesi": /// gün === "pazartesi"
//         console.log("Kurs planlaması")
//         console.log("Sabah toplantısı")
//         break
//     case "salı":
//         console.log("Spora git")
//         break
//     case "çarşamba":
//     case "perşembe":
//         console.log("Yemek yap")
//         break
//     case "cuma":
//         console.log("Dinlen")
//         break
//     case "cumartesi":
//     case "pazar":
//         console.log("Haftasonunun tadını çıkar")
//     default:
//         console.log("Geçerli bir gün değil")
// }



// if (gün === 'pazartesi') {
//     console.log("Kurs planlaması")
//     console.log("Sabah toplantısı")
// } else if (gün === 'salı') {
//     console.log("Spora git")
// } else if (gün === 'çarşamba' || gün === 'perşembe') {
//     console.log("Yemek yap")
// } else if (gün === 'cuma') {
//     console.log("Dinlen")
// } else if (gün === 'cumartesi' || gün === 'pazar') {
//     console.log("Haftasonunun tadını çıkar")
// }

//  ==================== Switch Case ====================== 






//  ==================== Statement & Expression ====================== 

// if (23 > 10) {
//     const str = "23 büyük"
// }

// const ben = 'Murat'
// console.log(`Ben ${2040 - 1986} yaşındayım ${ben}`);

//  ==================== Statement & Expression ====================== 

//Expression değer üreten bölüm







//  ==================== Ternary Operator ====================== 

// const yaş = 25

// yaş >= 18 ?
//     console.log("Araba kullanabilirim") :
//     console.log('Yan koltuk benim');







//  ==================== Ternary Operator ======================

