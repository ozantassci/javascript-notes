//=================== Use Strict  ============================

"use strict";

// let ehliyetiVarMı = false
// const testiGeçtiMi = true
// if (testiGeçtiMi) ehliyetiVarMı = true

// if (ehliyetiVarMı){
//     console.log('Araba kullanabiliyor');
// }

// // const interface = 'ses'
// // const private = 123
// // const if = 456

//=================== Use Strict  =========================

// ========================== FUNCTIONS =============================

// function logger(){
//     console.log("Benim adım Murat");
// }
// logger() //calling/running/invoking a function
// logger()
// logger()
// logger()

// function meyveİşleme(elmalar, portakallar){
//     // console.log(elmalar,portakallar);
//     const meyveSuyu = `${elmalar} elma ve ${portakallar} portakal`
//     return meyveSuyu
// }

// const elmaSuyu = meyveİşleme(5, 0)
// console.log(elmaSuyu);

// const elmaPortakalSuyu = meyveİşleme (2, 4)
// console.log(elmaPortakalSuyu);

// ========================== FUNCTIONS =============================

// ================== FUNCTION DECLARATIONS =============================

// const yaş1  = yaşHesap1(1986)
//

//function yaşHesap1(doğumYılı){
//     return 2040 - doğumYılı
// }

// console.log(yaş1);

// ================== FUNCTION DECLARATIONS =============================

// ========================== FUNCTION EXPRESSIONS (ifade) ======================

// const yaşHesap2 = function(doğumYılı){
//     return 2040 - doğumYılı
// }

// const yaş2 = yaşHesap2(1986)
// console.log(yaş1, yaş2);

// ========================== FUNCTION EXPRESSIONS ======================

// ========================== ARROW FUNCTIONS ============================

// const yaşHesap2 = function (doğumYılı){
//     return 2040 - doğumYılı
// }

// const yaşHesap3 = (doğumYılı) => 2040 - doğumYılı

// const yaş3 = yaşHesap3(1986)
// console.log(yaş3);

// const emekliliğeKalanSüre = (doğumYılı , ad) => {
//     const yaş = 2040 - doğumYılı
//     const emeklilik = 65 - yaş
//     // return emeklilik
//     return `${ad} ${emeklilik} yıl içinde emekli oluyor`
// }

// console.log(emekliliğeKalanSüre(1986, "Ozan"))
// console.log(emekliliğeKalanSüre(1980 , "Hasan"));

// ========================== ARROW FUNCTIONS ============================

// ======== İÇ İÇE FONKSİYON (Function Calling Other Functions) ==========

// function meyveleriParçala(meyve){
//     return meyve * 4
// }

// function meyveİşleme(elmalar, portakallar){
//     const elmaParçaları = meyveleriParçala(elmalar)
//     const portakalParçaları = meyveleriParçala (portakallar)
//     // console.log(elmalar,portakallar);
//     const meyveSuyu = `${elmaParçaları} elma parçası ve ${portakalParçaları} portakal parçası`
//     return meyveSuyu
// }
// console.log(meyveİşleme(2, 3));

// ======== İÇ İÇE FONKSİYON (Function Calling Other Functions) ==========

//======================================================
//======================================================
//======================================================
//======================================================

// ==================== ARRAY =========================

// const yaşHesap = function (doğumYılı)
// {
//     return 2040 - doğumYılı
// }

// const yıllar = [1986, 1967, 2002, 2010, 2018]

// const yaş1 = yaşHesap(yıllar[0])
// console.log(yaş1);
// const yaş2 = yaşHesap(yıllar[2])

// ==================== ARRAY =========================

// Array Element Ekleme

// const arkadaş = ['Namık', 'Engin', 'Ayşe']

// const yeniUzunluk = arkadaş.push("Ela")  // Array'in sonuna element ekler.
// console.log(arkadaş);

// console.log(yeniUzunluk);

// arkadaş.unshift('Yavuz') //Array'in başına element ekler.
// console.log(arkadaş);

// //Array element kaldırma

// arkadaş.pop() // Array'in sonundan element kaldırır.
// console.log(arkadaş);

// const kaldırılan = arkadaş.pop()
// console.log(kaldırılan);
// console.log(arkadaş);

// arkadaş.shift()
// console.log(arkadaş);

// console.log(arkadaş.indexOf("Engin "));  // Array'de elementin numarasını bildirir.
// console.log(arkadaş.indexOf("Fatma "));
// console.log(arkadaş.includes("Engin ")); // includes koşulları kontrol için kullanılır.

// ================== İntro to Object(Nesneler) ==================

// const muratDizisi = [
//     'Murat',
//     'Akdağ',
//     2040 - 1986,
//     'öğretmen',
//     ['Kerem', 'Tuğçe', 'Bora']
// ]

// const murat = {
//     isim : 'Murat',
//     soyad : 'Akdağ',
//     yaş : 2040 - 1986,
//     iş : 'öğretmen',
//     arkadaş : ['Kerem', 'Tuğçe', 'Bora']
// }
//  console.log(murat);

//-------------------------------------
// const murat = {
//   isim: "Murat",
//   soyad: "Akdağ",
//   doğumYılı: 1986,
//   iş: "öğretmen",
//   arkadaşlar: ["Kerem", "Tuğçe", "Bora"],
//   ehliyetiVarMı: false,

//   yaşHesap: function () {
//     this.yaş = 2040 - this.doğumYılı;
//     return this.yaş;
//   },
// };

// function özet() {
//   return `${murat.isim} ${murat.yaşHesap()} yaşında ${murat.iş}dir
//        ve  ${murat.ehliyetiVarMı === true ? "ehliyeti var" : "ehliyeti yok"}`;
// }
// console.log(özet());

//      console.log(murat);
//      console.log(murat.soyad);
//      console.log(murat['soyad']);

// Mini Challange

// console.log(`${murat.isim}'ın ${murat.arkadaşlar.length} arkadaşı var ve
// en iyi arkadaşı ${murat.arkadaşlar[0]}'dir`);

// Mini Challange

// const murat = {
//             isim : 'Murat',
//             soyad : 'Akdağ',
//             doğumYılı : 1986,
//             iş : 'öğretmen',
//             arkadaşlar : ['Kerem', 'Tuğçe', 'Bora'],
//             ehliyetiVarMı : true,
//             // yaşHesap : function (doğumYılı){
//             //     return 2040 - doğumYılı
//             // }
//             yaşHesap : function (){
//                 return 2040 - this.doğumYılı
//             }
//         }

//         console.log(murat.yaşHesap());
// console.log(murat["yaşHesap"](1986));

// ================== İntro to Object(Nesneler) ==================

//========================================================================

// ======================== loop (Yenilemeler)===============================

// console.log('ağırlık kaldırmak 1. tekrar');

//Koşul doğru olduğu sürece döngü çalışacaktır.
// for (let tekrar = 1; tekrar <= 10; tekrar++ ){
//         console.log(`ağırlık kaldırmak için ${tekrar}. tekrar `);

// }

//  Example

// for (let sçmn = 1; sçmn <= 50; sçmn++){
//         console.log(`${sçmn} numaralı seçmen şu anda oy kullanıyor.`);
// }

// for (let mult = 1; mult <= 100; mult++){
//         let mult1 = 2;
//         mult1 *= 2

// }

// for ( let i = 1; i <= 5; i = i + 3 ){
//         console.log(`${i + 1}'i kontrol et`);
// }

// ======================== loop (Yenilemeler)===============================

// ===================== Array içinde for =================================

// const muratDizisi = [
//     'Murat',
//     'Akdağ',
//     2040 - 1986,
//     'öğretmen',
//     ['Kerem', 'Tuğçe', 'Bora']
// ]

// const türler = []

// ilk for sonra () içinde değişken atayıp değer veriyoruz sonrasında koşul ifadesi
// sonra da nasıl değiştirilmesini istediğimiz
//ardından süslü parantez içerisine console.log içerisine "i" ifadesini kullanarak
// for döngümüzü oluşturabiliriz.
// for (let i = 0; i < muratDizisi.length ; i++ ){
//         console.log(muratDizisi[i]);
//         türler [i] = typeof muratDizisi[i]
//   türler.push(typeof muratDizisi[i])
// }
//  console.log(türler);

// const yıllar = [1974, 1980, 1986, 2002]
// const yaşlar = []
// for (let i = 0; i < yıllar.length ; i++ ){
//         yaşlar.push(2040 - yıllar [i])

// }
// console.log(yaşlar);

//continue

// for (let i = 0; i < muratDizisi.length ; i++ ){
//        if(typeof muratDizisi[i] !== "string")
//        continue
//        console.log(muratDizisi[i], typeof muratDizisi[i]);
// }

// break

// const muratDizisi = [
//         'Murat',
//         'Akdağ',
//         2040 - 1986,
//         'öğretmen',
//         ['Kerem', 'Tuğçe', 'Bora']
//     ]

// for (let i = 0; i < muratDizisi.length ; i++ ){
//        if(typeof muratDizisi[i] === "number")
//        break
//        console.log(muratDizisi[i], typeof muratDizisi[i]);
// }

// ===================== Array içinde for =================================

// ============================ CHALLANGE (For & Array) =======================================

// function dünyanınYüzdesi1(hesap){
//     return (hesap / 7900) * 100
// }

// const popülasyon = [10,1441,330,90]
// const yüzdeler2 = []

// for (let i = 0; i < popülasyon.length ; i++){
//     yüzdeler2.push(dünyanınYüzdesi1(popülasyon[i]));
// }
//  console.log(yüzdeler2);

// ============================ CHALLANGE (For & Array) =======================================

// =============================== For içinde for   ==============================================

// const muratDizisi = [
//         'Murat',
//         'Akdağ',
//         2040 - 1986,
//         'öğretmen',
//         ['Kerem', 'Tuğçe', 'Bora'],
//         true
//     ]

//     //0,1,2,3,4
//     //4,3,2,1,0

// for( let i = muratDizisi.length - 1 ; i >= 0; i-- ){
//     console.log(i, muratDizisi[i]);
// }

////////////

// for (let egzersiz = 1; egzersiz < 4; egzersiz++) {
//   console.log(`${egzersiz} numaralı egzersiz`);
//   for (let tekrar = 1; tekrar <= 5; tekrar++) {
//     console.log(`${egzersiz}-Egzersiz, ${tekrar} Ağırlık kaldırma  `);
//   }
// }


/// ================= for düngüsünde array içinde array ======================


// const komşularımListesi = [
//   ["Kanada", "Meksika"],
//   ["İspanya"],
//   ["Norveç", "İsveç", "Rusya"],
// ];

// for (let i = 0  ; i < komşularımListesi.length; i++){
//     for (let i1 = 0 ; i1 <komşularımListesi[i].length ; i1++){
//         console.log(`Komşu : ${komşularımListesi[i][i1]}`); // iç içe array kullanımı
        
//     }
// }

/// ================= for düngüsünde array içinde array ======================

// =============================== For içinde for   ==============================================












// ====================================== WHILE LOOP ==================================

// let tekrar = 1
// while (tekrar <= 10){
//     console.log(`Ağırlık kaldırmak için ${tekrar}. tekrar`);
//     tekrar++
// }

// let zar = Math.trunc(Math.random() * 6) + 1
// // console.log(zar);

// while(zar !== 6){
//     console.log(`${zar} rakamını attın`);
//     zar = Math.trunc(Math.random() * 6) + 1
// }










// ====================================== WHILE LOOP ==================================

