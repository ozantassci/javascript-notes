// const ulke = "Almanya"
// let kita = "Avrupa"
// let nufus = 13
// let baskent = "Berlin"
// console.log(ulke)
// console.log(kita)
// console.log(nufus)

// let adaMı = true
// let dil
// dil = "Almanca"

// console.log(typeof ulke);
// console.log(typeof kita);
// console.log(typeof nufus);
// console.log(typeof adaMı);
// console.log(typeof dil);

// const sabit değişken olduğundan dolayı source da hata verecektir.
// ulke = "Italy"

// ================ OPERATORLER =================

// console.log(nufus / 2);
// nufus ++
// console.log(nufus + 1);
// console.log(nufus > 6);
// console.log(nufus < 33);

// console.log(ulke + " " + kita + "'da" + " " + "ve" + " " + nufus +
//  " " + "milyon insan" + " " + dil + " " + "konuşuyor" )

//  const açıklama = `${ulke} ${kita}'da ve ${nufus} milyon insan ${dil} konuşuyor. `
// console.log(açıklama);

// =================================== CHALLANGE =======================================

// let muratKilo = 110
// let muratBoy = 1.87
// let enginKilo = 92
// let enginBoy = 1.95

// console.log(muratKilo, muratBoy, enginKilo, enginBoy);

// const muratBMI = muratKilo / muratBoy ** 2
// const enginBMI = enginKilo / enginBoy ** 2

// console.log(muratBMI, enginBMI);

// console.log(muratBMI > enginBMI);

// console.log(typeof muratBMI);
// console.log(typeof enginBMI);

// muratKilo = 95

// let ozanKilo = "Kilosu : 85kg"
// let ozanBoy = "Boyu : 179cm"

// console.log(ozanKilo);
// console.log(ozanBoy);

// console.log(typeof ozanKilo);

// let namıkKilo = 100
// let namıkBoy = 200

// console.log(muratKilo < namıkKilo);
// console.log(enginKilo > namıkKilo);

// ======================================= CHALLANGE =============================//

// let ortalamaNufus = 33

// if (nufus < ortalamaNufus) {console.log(`${ulke}'nin nüfusu ortalamanın üzerinde`);

// } else { console.log(`Aksi takdirde ${ulke}'nin nüfusu ortalamanın
// ${ortalamaNufus - ulke} milyon üzerinde`);

// }

// ============================= CHALLANGE 2 ======================//

// if (muratBMI > enginBMI) { console.log(`Murat'ın BMS'si (${muratBMI})
// Engin'inkinden (${enginBMI}) daha yüksek`);
// }
// else { console.log(`Engin'in BMS'si (${enginBMI})
// Murat'ınkinden (${muratBMI}) daha yüksek`);
// }

// ========================== CHALLANGE 2 ====================

//  ==================== Eşitlik Operatörleri ======================

// let komşuSayı = prompt('Ülkenizin kaç komşusu var')

// if (komşuSayı == 1) {
//     console.log('Sadece 1 komşu!')
// } else if (komşuSayı > 1) {
//     console.log(`1'den fazla komşu`);
// } else {
//     console.log('Komuşu yok!');
// }

//  ==================== Eşitlik Operatörleri ======================

//  ==================== Boolean Logic ======================

// if (dil === "İngilizce" && nufus < 50 && !adaMı ) {
//     console.log(`${ulke}'de yaşamalısınız`)
// } else {
//     console.log(`${ulke} kriterlerinizi karşılamıyor :( `);
// }

// if (language == 'İngilizce'  && population < 50 && adaMı == false) {
//     console.log(`${country}'da yaşamalısınız :) `);
// } else {
//     console.log(`${country} kriterlerinize göre değil :(`);
// }

// if (language == 'İngilizce'  || population < 50 || adaMı == false) {
//     console.log(`${country}'da yaşamalısınız :) `);
// } else {
//     console.log(`${country} kriterlerinize göre değil :(`);
// }

// if (language !== 'İngilizce' && population < 50 && adaMı === false) {
//     console.log(`${country} sizin için en iyisi`);
// } else {
//     console.log('Çık git buradan');
// }

//  ==================== Boolean Logic ======================

//  ==================== CHALLANGE 3 ======================

// let kaplanSkor1 = 97
// let kaplanSkor2 = 112
// let kaplanSkor3 = 101

// let kobraSkor1 = 109
// let kobraSkor2 = 95
// let kobraSkor3 = 123

// const ortKaplan = (kaplanSkor1 + kaplanSkor2 + kaplanSkor3) / 3
// console.log(ortKaplan);

// const ortKobra = (kobraSkor1 + kobraSkor2 + kobraSkor3) / 3
// console.log(ortKobra);

// if (ortKaplan > ortKobra) {
//     console.log("Kaplan kazandı")
//     } else if (ortKaplan >= ortKobra) {
//         console.log("Berabere kaldı")
//     } else {
//         console.log("Kobra kazandı");
//     }

// if (ortKaplan >= 100 && ortKobra >= 100 && ortKobra < ortKaplan) {
//     console.log("Kobra kazandı.");
// }  else {
//     console.log("Kaplan kazandı.");
// }

//  ==================== CHALLANGE 3 ======================

//==================== Switch Case ======================

// const dil = 'Çince'

// switch (dil) {
//     case 'Çince':
//     case 'Mandarin':
//         console.log("Çok fazla konuşuluyor!")
//         break;
//     case 'İspanyolca':
//         console.log("Anadili olarak 2. sırada");
//         break;
//     case 'İngilizce':
//         console.log("3. sıra");
//         break;
//     case 'Hintçe':
//         console.log("4. sıra");
//         break;
//     case 'Arapça':
//         console.log("5. sıra");
//         break;
//     default:
//         console.log("Harika bir dil");
//         break;
// }

//==================== Switch Case ======================

//  ==================== Ternary Operator ======================

// nufus > 33 ?
//     console.log(`${ulke}'nın nüfusu ortalamanın üzerinde`) :
//     console.log(`${ulke}'nın nüfusu ortalamanın altında`)

// //    ya da

// console.log(`${ulke}'nın nüfusu ortalamanın
// ${nufus > 33 ? 'üstünde' : 'altında'}`);

//  ==================== Ternary Operator ======================

//  ================ Ternary Operator Challange ======================

// let hesap = 100
// let bahşiş
// console.log(${hesap > 50 && hesap < 300} ? `${hesap * 0.15}`
//  : `${hesap * 0.2}`);

// console.log(`Engin'in vereceği bahşiş : ${50 < hesap < 300
// ? '%15' : '%20'}`)

//çözüm
// const fatura = 275
// const bahşiş = fatura <= 300 && fatura >= 50 ?
// fatura * 0.15 : fatura * 0.2
// console.log(bahşiş);

// console.log(`Fatura ${fatura}, Bahşiş ${bahşiş} ve toplam
// değer ${fatura + bahşiş}`);

//  ================ Ternary Operator Challange ======================

// ========================== FUNCTIONS =============================

// function ülkeniTanımla(ulke, nufus, baskent){
// const ülkeniAnlat = `${ulke}'da ${nufus} milyon insan var
// ve başkenti ${baskent}`
// return ülkeniAnlat

// };

// console.log(ülkeniTanımla (ulke, nufus, baskent));

// console.log(ülkeniTanımla('Portekiz', '12', 'Lizbon'));
// console.log(ülkeniTanımla('İtalya', 15, 'Roma'));

// ========================== FUNCTIONS =============================

// ===================== Fonksiyon bildirimi  ====================

// function dünyanınYüzdesi1(popülasyon) {
//     return (popülasyon / 7900) * 100
// }

// const dünyanınYüzdesi2 = function (popülasyon) {
//     return (popülasyon / 7900 ) * 100
// }

// console.log(dünyanınYüzdesi1(60), dünyanınYüzdesi2(60));

// const italyaYüzdesi = dünyanınYüzdesi1(50)
// console.log(italyaYüzdesi);

// const dünyanınYüzdesi3 = popülasyon =>  (popülasyon / 7900) * 100

// console.log(dünyanınYüzdesi3 (20));

// ===================== Fonksiyon bildirimi  ====================

// ===================== CHALLANGE (İç içe fonksiyon) ===============

// function dünyanınYüzdesi1(popülasyon) {
//     return (popülasyon / 7900) * 100
// }

// function nüfusuTanımla(ülke, nüfus) {
//     const  country = ülke
//     const  population = dünyanınYüzdesi1(nüfus)
//     return `${ülke}'de ${nüfus} milyon insan var, bu da dünyanın yaklaşık
//     ${dünyanınYüzdesi1(nüfus)} `
// }

// console.log(nüfusuTanımla('Çin', 1441));

// const nüfusuTanımla = function (ülke, nüfus){
//     const yüzde = dünyanınYüzdesi1 (nüfus)
//     const tanım = `${ülke}'de ${nüfus} milyon insan var,
//     bu da dünyanın yaklaşık %${yüzde}'sidir`
//     console.log(tanım);
// }
// nüfusuTanımla('USA' , 350)

// ===================== CHALLANGE (İç içe fonksiyon) ===============

// ======================== HARD CHALLANGE ========================

// const ortHesap = (a, b, c) => (a + b + c) / 3

// console.log(ortHesap(3, 4, 5));

// const kaplanSkor = ortHesap(44,23,71)
// const kobraSkor = ortHesap(65,54,49)
// console.log(kaplanSkor,kobraSkor);

// const kazananKim = function (ortKaplanlar,ortKobralar)
// {
//     if(ortKaplanlar >= 2 * ortKobralar)
// { console.log('Kaplanlar kazandı(${ortKaplanlar} vs )');

// }

// }

// ======================== HARD CHALLANGE =======================

//================= ARRAY ==================================

// function dünyanınYüzdesi1(popülasyon) {
//     return (popülasyon / 7900) * 100

// }

// const ülkeler = ['Fransa', 'Almanya', 'Norveç', 'İsviçre' ]
// console.log(ülkeler);
// console.log(typeof ülkeler);

// const yüzdeler = [10, 20, 30, 40]

// console.log((ülkeler[0]), dünyanınYüzdesi1(yüzdeler[0]));
// console.log((ülkeler[1]), dünyanınYüzdesi1(yüzdeler[1]));
// console.log((ülkeler[2]), dünyanınYüzdesi1(yüzdeler[2]));
// console.log((ülkeler[3]), dünyanınYüzdesi1(yüzdeler[3]));

// YENİDEN YAP

// function dünyanınYüzdesi1(popülasyon) {
//     return (popülasyon / 7900) * 100

// }

// const popülasyonlar = [10, 20, 30, 40]
// console.log(popülasyonlar.length === 4);
// const  yüzdeler = [
//     dünyanınYüzdesi1(popülasyonlar[0]),
//     dünyanınYüzdesi1(popülasyonlar[1]),
//     dünyanınYüzdesi1(popülasyonlar[2]),
//     dünyanınYüzdesi1(popülasyonlar[3])
// ]
// console.log(yüzdeler);

//================= ARRAY ==================================

// ============================== CHALLANGE =======================

// const komşular = ['Avusturya' , 'İsviçre', 'Almanya' ]
// console.log(komşular);

// komşular.push('Ütopya')
// console.log(komşular);

// komşular.pop()
// console.log(komşular);

// if (komşular.includes('Almanya')) {
//     console.log('Almanya bir Avrupa ülkesidir.');
// }

// komşular.indexOf('İsviçre');
// komşular[0] = 'İsveç Cumhuriyeti'
// console.log(komşular[0]);

// ============================== CHALLANGE =======================

// ======================== CHALLANGE 30 ==============================

// PROBLEMİ KENDİN ÇÖZZZZZZZ!!!!!!!!!!!!!!!!!!!!!!

// =================== Çözüm =============================

// const bahşişHesap = function (fatura) {
//     return fatura >= 50 && fatura <= 300 ? fatura * 0.15 : fatura * 0.2
// }

// const fatura = [125, 555, 44]
// const bahşişler = [
//     bahşişHesap(fatura[0]),
//     bahşişHesap(fatura[1]),
//     bahşişHesap(fatura[2])

// ]
// console.log(fatura, bahşişler);

// const toplamlar = [
//     fatura[0] + bahşişler[0],
//     fatura[1] + bahşişler[1],
//     fatura[2] + bahşişler[2]
// ]
// console.log(toplamlar);

// ======================== CHALLANGE 30 ==============================

// ==================== Nesnelere Giriş =====================

// const ülkem = {
//     ülke : 'Türkiye',
//     başkent : 'Ankara',
//     dil : 'Türkçe',
//     nüfus : 85,
//     komşular : ['Gürcistan','Azerbeycan', 'Irak']

// }
//  console.log(ülkem);

//  console.log(`${ülkem.ülke}'de ${ülkem.nüfus} milyon ${ülkem.dil}
//  konuşan insan, ${ülkem.komşular.length} komşu ülkesi ve ${ülkem.başkent} adında
//  başkenti var.`);

//  console.log(`${ülkem.ülke}'de ${(ülkem.nüfus) + 2} milyon ${ülkem.dil}
//  konuşan insan, ${(ülkem.komşular.length) - 2} komşu ülkesi ve ${ülkem.başkent} adında
//  başkenti var.`);

// ==================== Nesnelere Giriş =====================

//========================== Nesne This Yöntemi Challange ============================

// const ülkem1 = {
//   ülke: "Türkiye",
//   başkent: "Ankara",
//   dil: "Türkçe",
//   nüfus: 85,
//   komşular: ["Gürcistan", "Azerbeycan", "Irak"],
//   adaMı: false,
//   açıklama: function () {
//     return `${this.ülke}'de ${this.nüfus} milyon ${this.dil} konuşan insan,
//         ${this.komşular.length} komşu ülkesi ve ${this.başkent} adında başkenti var.
//         Ayrıca ${this.ülke} bir ada ${
//       this.adaMı === true ? "ülkesidir." : "ülkesi değildir."
//     }`;
//   },
  
// };

// console.log(ülkem1.açıklama());

//========================== Nesne This Yöntemi Challange ============================








// =========================== CHALLANGE 31 ========================================

// const murat = {
//     ad: 'Murat',
//     soyad: 'Akdağ',
//     kilo: 78,
//     boy : 1.69,
//     BMIHesap : function(){
//         this.bmı = this.kilo / this.boy **2
//         return this.bmı
//     },

// }
// console.log(murat.BMIHesap());

// const engin = {
//     ad: 'Engin',
//     soyad: 'Derin',
//     kilo: 92,
//     boy : 1.95,
//     BMIHesap : function(){
//         this.bmı = this.kilo / this.boy **2
//         return this.bmı
//     },
// }
// console.log(engin.BMIHesap());

// if ((murat.bmı) > (engin.bmı)){
//     console.log(`${murat.ad} ${murat.soyad}'ın BMI'sı (${murat.bmı})
//     ${engin.ad} ${engin.soyad}'inkinden (${engin.BMIHesap()}) daha yüksek.`);
// } else if ((engin.BMIHesap()) > (murat.bmı)){
//     console.log(`${engin.ad} ${engin.soyad}'ın BMI'sı (${engin.BMIHesap()})
//     ${murat.ad} ${murat.soyad}'inkinden (${murat.bmı}) daha yüksek.`);
// } else {`İkisinin de BMI'sı eşittir.`}


// =========================== CHALLANGE 31 ========================================











// ======================================== While Loop  ====================================

// const popülasyon = [10, 1441, 330, 90]
// const yüzdeler3 = []

// function dünyanınYüzdesi1(hesap){
//     return (hesap / 7900) * 100
// }

// let i = 0
// while (i < popülasyon.length){
//     yüzdeler3.push(dünyanınYüzdesi1(popülasyon[i]));
//     i++;
// }
// console.log(yüzdeler3);


// ======================================== While Loop  ====================================











// ============================== CHALLANGE 32 ==================================

// fatura adlı dizi oluştur.
// toplamlar ve bahşişler için boş dizi oluştur
// bahşişHesap fonksiyonunu kullan
// bahşiş hesap kullanarak for loopta kullan
// ortalama hesap fonksiyonu oluştur diziden alınan sayıların ortalamalarını alacaksın



// const fatura = [22,295,176,440,37,105,10,1100,86,52]
// const toplamlar = []
// const bahşişler = []

// const bahşişHesap = function (fatura) {
//     return fatura >= 50 && fatura <= 300 ? fatura * 0.15 : fatura * 0.2
// }

// for (let i = 0; i < fatura.length; i++){
//     const bahşiş = bahşişHesap(fatura[i])
//     bahşişler.push(bahşiş)
//     toplamlar.push(bahşiş + fatura[i])  
// }
// console.log(fatura, bahşişler, toplamlar);


// const ortHesap = function (arr){
//     let toplam = 0
//     for(let i = 0; i < arr.length; i++){
//         toplam += arr[i]
//         // console.log(toplam); 
//     } 
//     return toplam / arr.length
// }
// console.log(ortHesap([2,3,4]));

// console.log(ortHesap(toplamlar));
// console.log(ortHesap(bahşişler));

// const ortHesap2 = function(arr){
//     let toplam = 0
//     let sayaç = 0
//     for (let i = 0; i < arr.length ; i++){
//         if(typeof arr[i] !== 'number')
//         continue
//         toplam += arr[i]
//         sayaç++

//     }
//     toplam === 0 ? console.log(`Dizide sayı yoktur.`) : console.log(`Ortalama sayı ${toplam / sayaç}`)
// }
// console.log(ortHesap2([40,30,'hello', true, 50]));








// ============================== CHALLANGE 32 ==================================



