import "./ArticleList.scss";

import React from "react";

import {ArticleItem} from "../ArticleItem/ArticleItem";

/* interface ArticleListProps {
} */

export function ArticleList() {
  // TODO: make author an array.
  const articles = [
    {
      title: "SüngerBob Sürekli Çalışarak Stagflasyonu Engelliyor mu?",
      popularity: "27.8b",
      teaser:
        "SüngerBob KareŞort/KarePantolon çizgi filmindeki SüngerBob adlı arkadaşımızın o evrendeki ekonomiyle olan ilişkisine dair hak...",
      thumbnail:
        "https://seyler.ekstat.com/img/230/3/3PXSvneAFAmoEkSc-637068162441049078.jpg",
      link:
        "http://seyler.eksisozluk.com/sungerbob-surekli-calisarak-stagflasyonu-engelliyor-mu",
      author: "jamesharden, nbafan",
      source: "eksiseyler.com",
      topics: [
        "eğlence",
        "komik",
        "türkçe"
      ],
      date: "16 Ekim 2019",
    },
    {
      title: "Evrim, Seri Katil ve Tecavüzcüleri Zaman İçinde Neden Elemedi?",
      popularity: "14.8b",
      teaser:
        "Popülasyonlar ve insan ahlakı üzerine, çetrefilli bir cevabı olmasa da düşündüren bir soru.",
      thumbnail:
        "https://seyler.ekstat.com/img/480/s/sQMuhlXvAVgftXwd-637105390284558176.jpg",
      link:
        "https://seyler.eksisozluk.com/evrim-seri-katil-ve-tecavuzculeri-zaman-icinde-neden-elemedi",
      author: "shelly",
      source: "eksiseyler.com",
      topics: [
        "bilim",
        "türkçe"
      ],
      date: "28 Kasım 2019",
    },
    {
      title:
        "Dünya İnternet Trafiğinin %99'unu Taşıyan Su Altı Kabloları Hakkında Merak Edilenler",
      popularity: "21.9b",
      teaser:
        "1777'den beri kullanılan su altı kablo sistemleri, günümüzde internet trafiğinin %99'unu taşır vaziyette. Bu sistem nedir...",
      thumbnail:
        "https://seyler.ekstat.com/img/230/w/wZBKhQvTCzafIxX8-637104558046358040.jpg",
      link:
        "https://seyler.eksisozluk.com/dunya-internet-trafiginin-99unu-tasiyan-su-alti-kablolari-hakkinda-merak-edilenler",
      author: "jamesharden, nbafan",
      source: "eksiseyler.com",
      topics: [
        "bilim",
        "internet",
        "türkçe"
      ],
      date: "27 Kasım 2019",
    },
    {
      title:
        "Acayip Bilgiler Kuşağı: Girilen Her Ortamda Muhabbet Açma İmkanı Sunan 15 İlginç Bilgi",
      popularity: "25b",
      teaser: 'Gelin haftalık olarak garip bilgiler paylaştığımız "Ac...',
      thumbnail:
        "https://img-s1.onedio.com/id-5df8facdaee2dc66169a3f40/rev-0/w-333/h-195/f-jpg/s-7f090cb4b0d795dc1622339d2c4f5eea5a927845.jpg",
      link:
        "https://onedio.com/haber/acayip-bilgiler-kusagi-girilen-her-ortamda-muhabbet-acma-imkani-sunan-15-ilginc-bilgi-892103",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "17 Aralık 2019",
    },
    {
      title:
        "2019 Yılında Sinema Yazarlarının En Çok Önerdiği Mutlaka İzlemeniz Gereken 10 Yerli ve Yabancı Film",
      popularity: "21b",
      teaser: "Bu filmleri izlemeden 2020'ye girmeyin......",
      thumbnail:
        "https://img-s2.onedio.com/id-5df761d9b110e8631b1fc9b1/rev-0/w-333/h-195/f-jpg/s-3d902be89982ef6c30f17325bca9895f1ba7132c.jpg",
      link:
        "https://onedio.com/haber/2019-yilinda-10-sinema-yazarinin-en-cok-onerdigi-mutlaka-izlemeniz-gereken-10-yerli-ve-yabanci-film-892044",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "17 Aralık 2019",
    },
    {
      title:
        "Kopmayan Kıyamet, Atomun Patlatılması, Matematik Katliam Günü... Tarihte 16-22 Aralık Haftası ve Yaşanan Önemli Olaylar",
      popularity: "14b",
      teaser: null,
      thumbnail:
        "https://img-s2.onedio.com/id-5df809edcdff9414205dfa67/rev-0/w-333/h-195/f-jpg/s-efc66da3bfdd98906e7cea1614b88672ea519bda.jpg",
      link:
        "https://onedio.com/haber/kopmayan-kiyamet-atomun-patlatilmasi-matematik-katliam-gunu-tarihte-16-22-aralik-haftasi-ve-yasanan-onemli-olaylar-892065",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "16 Aralık 2019",
    },
    {
      title:
        "Sizi Hem Kendi Çocukluğunuza Hem de Geçmişe Götürecek Türkiye'deki Oyuncak Müzeleri",
      popularity: "208",
      teaser: null,
      thumbnail:
        "https://img-s2.onedio.com/id-5dc965759bca7e7a1053e8fd/rev-1/w-333/h-195/o-46x65/f-jpg/s-4c272c863dfedff48ff0deb32c10ade5d4f0dae9.jpg",
      link:
        "https://onedio.com/haber/sizi-hem-kendi-cocuklugunuza-hem-de-gecmise-goturecek-turkiye-deki-oyuncak-muzeleri-889302",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "16 Aralık 2019",
    },
    {
      title:
        "Dissler, Çalıntı Şarkılar, Yeni İsimler, Kazançlar... 2019 Yılında Rap Dünyasında 'Neler Olmuş Neler' Diyeceğiniz Olayları Derledik!",
      popularity: "42b",
      teaser: null,
      thumbnail:
        "https://img-s2.onedio.com/id-5df3a5255ff64822125ff8b3/rev-0/w-333/h-195/f-jpg/s-e2c6a12cdd1d39d07a6dca2cd8ce0c8e190dcfb1.jpg",
      link:
        "https://onedio.com/haber/dissler-calinti-sarkilar-yeni-isimler-kazanclar-2019-yilinda-rap-dunyasinda-neler-olmus-neler-diyeceginiz-olaylari-derledik-891901",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "14 Aralık 2019",
    },
    {
      title:
        "4 Maddede Dünyanın En Mutlu İnsanları Neden İskandinav Ülkelerinde Yaşayanlar Oluyor?",
      popularity: "1.4b",
      teaser: null,
      thumbnail:
        "https://img-s1.onedio.com/id-5defb6083d2817220f28e430/rev-0/w-333/h-195/f-jpg/s-61c2c7b4b92e5abe1c7e63a9362ed895bdfde1d0.jpg",
      link:
        "https://onedio.com/haber/4-maddede-dunyanin-en-mutlu-insanlari-neden-iskandinav-ulkelerinde-yasayanlar-oluyor-891656",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "13 Aralık 2019",
    },
    {
      title:
        "Gereksiz Bilgilerin Fink Attığı İnternet Aleminde Kalitesiyle Farkını Koyacak 15 Soru ve 15 Cevap",
      popularity: "65b",
      teaser: "Kaliteli bilgi açlığı çekenler ve Oyna Kaza...",
      thumbnail:
        "https://img-s2.onedio.com/id-5df389ee32b0f5637a99cbe5/rev-0/w-333/h-195/f-jpg/s-f8f0e7310d6de460417a7295034a0fa52e1bcc25.jpg",
      link:
        "https://onedio.com/haber/gereksiz-bilgilerin-fink-attigi-internet-aleminde-kalitesiyle-farkini-koyacak-15-soru-ve-15-cevap-891693",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "13 Aralık 2019",
    },
    {
      title:
        "Türkiye'de En Çok Hangi Kategori İzlendi? Pornhub 2019'un Porno İstatistiklerini Açıkladı",
      popularity: "322b",
      teaser: "Pornhub her yıl olduğu gibi bu yıl da topladığı ist...",
      thumbnail:
        "https://img-s2.onedio.com/id-5df26b289c2d344c65cc6173/rev-0/w-333/h-195/f-jpg/s-85e8e94b91cfcac756eb4025482d5880622daba4.jpg",
      link:
        "https://onedio.com/haber/turkiye-de-en-cok-hangi-kategori-izlendi-pornhub-2019-un-porno-istatistiklerini-acikladi-891824",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "12 Aralık 2019",
    },
    {
      title:
        "Gelin Olmuş Gidiyor! Porno Yıldızı Mia Khalifa'dan Gelinlikli Paylaşım",
      popularity: "251b",
      teaser:
        "Emekli pornstar Mia Khalifa Instagram hesabından gelinlik provası esna...",
      thumbnail:
        "https://img-s1.onedio.com/id-5df24d6587bf5bf94a5def6a/rev-0/w-333/h-195/f-jpg/s-f5f86bb8277dc55f7cdd5c8ed37356ccf16b5566.jpg",
      link:
        "https://onedio.com/haber/gelin-olmus-gidiyor-porno-yildizi-mia-khalifa-dan-gelinlikli-paylasim-891815",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "12 Aralık 2019",
    },
    {
      title:
        "Her Bir Detayı Buram Buram Hüzün Kokan, Açlık ve Sefaletin Adeta Canlanıp Dile Geldiği Tablo: Küçük Dilenci",
      popularity: "63b",
      teaser: null,
      thumbnail:
        "https://img-s1.onedio.com/id-5df177ab649af9a4269c25aa/rev-0/w-333/h-195/f-jpg/s-fb778de7f4f7c8de2262c46aa403a6061365437c.jpg",
      link:
        "https://onedio.com/haber/her-bir-detayi-buram-buram-huzun-kokan-aclik-ve-sefaletin-adeta-canlanip-dile-geldigi-tablo-kucuk-dilenci-891692",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "12 Aralık 2019",
    },
    {
      title:
        "Pek Yakında Herkesin Konuşacağı Film ve Dizilerden İlk Sizi Haberdar Edecek 15 Duyuru",
      popularity: "50b",
      teaser: "Bakalım bir hafta boyunca sinema ve dizi dünyasında ne ...",
      thumbnail:
        "https://img-s1.onedio.com/id-5df27663a9f038a9528ab3aa/rev-0/w-333/h-195/f-jpg/s-aad5f75fbfd21a443c8cab36025ac35ab784fc3b.jpg",
      link:
        "https://onedio.com/haber/pek-yakinda-herkesin-konusacagi-film-ve-dizilerden-ilk-sizi-haberdar-edecek-15-duyuru-891687",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "11 Aralık 2019",
    },
    {
      title:
        "Ferhan Şensoy'un Muhteşem Sistem Eleştirisi Yaptığı 'Pardon' Filmiyle İlgili Bilmediğiniz Detaylar Filmi Başka Gözle İzlemenizi Sağlayacak",
      popularity: "68b",
      teaser: null,
      thumbnail:
        "https://img-s2.onedio.com/id-5df368ed0f148aa8725cfb23/rev-0/w-333/h-195/f-jpg/s-47faa3029c3fedd7d9a8d1bbb1f04a616f05d02b.jpg",
      link:
        "https://onedio.com/haber/ferhan-sensoy-un-muhtesem-sistem-elestirisi-yaptigi-pardon-filmiyle-ilgili-bilmediginiz-detaylar-filmi-baska-gozle-izlemenizi-saglayacak-891679",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "11 Aralık 2019",
    },
    {
      title:
        "İlber Ortaylı'nın Cumhuriyet'in Türkiye'ye Neler Kazandırdığını ve Eksiklerimizi Anlattığı 13 Düşüncesi",
      popularity: "19b",
      teaser: null,
      thumbnail:
        "https://img-s1.onedio.com/id-5def8729d58b73411dd0426a/rev-0/w-333/h-195/f-jpg/s-f8590ad387f8146201e798197e10f99651aa33e0.jpg",
      link:
        "https://onedio.com/haber/ilber-ortayli-nin-cumhuriyet-in-turkiye-ye-neler-kazandirdigini-ve-eksiklerimizi-anlattigi-13-dusuncesi-891617",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "11 Aralık 2019",
    },
    {
      title:
        "Görür Görmez Kasisli Bir Yoldaymışsınız Gibi İçinizi Hop Hop Edecek, Tarihin Tozlu Sayfalarından Kopup Gelen Kareler",
      popularity: "26b",
      teaser: null,
      thumbnail:
        "https://img-s1.onedio.com/id-5df0bfb538db91d51577fa6c/rev-0/w-333/h-195/f-jpg/s-39df3323ed5ae0f0a27c7454afe6250ec3ba5b14.jpg",
      link:
        "https://onedio.com/haber/gorur-gormez-kasisli-bir-yoldaymissiniz-gibi-icinizi-hop-hop-edecek-tarihin-tozlu-sayfalarindan-kopup-gelen-kareler-891488",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "11 Aralık 2019",
    },
    {
      title:
        "Bilimle Sanat El Ele: Beethoven'ın Yarım Kalan Eseri 10. Senfoni, Yapay Zeka Tarafından Tamamlanacak",
      popularity: "11b",
      teaser: null,
      thumbnail:
        "https://img-s1.onedio.com/id-5df1c92f56f1b19f2e2a34f6/rev-0/w-333/h-195/f-jpg/s-7fab63363887a04925e75208637660271fdb666d.jpg",
      link:
        "https://onedio.com/haber/bilimle-sanat-el-ele-beethoven-in-yarim-kalan-eseri-10-senfoni-yapay-zeka-tarafindan-tamamlanacak-891487",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "11 Aralık 2019",
    },
    {
      title:
        "Doğa İçin Çal Projesinin 11. Videosunda Sesiyle Ruhumuza Dokunan O İsimleri Yakından Tanıyoruz!",
      popularity: "30b",
      teaser: "Keşfetmemiz gereken o kadar güzel sesler varm...",
      thumbnail:
        "https://img-s1.onedio.com/id-5defbb886d4dc964103d6ff2/rev-0/w-333/h-195/f-jpg/s-d409c3b56ff55be2afaf25006ef2c58cd5663cfc.jpg",
      link:
        "https://onedio.com/haber/doga-icin-cal-projesinin-11-videosunda-sesiyle-ruhumuza-dokunan-o-isimleri-yakindan-taniyoruz-891598",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "10 Aralık 2019",
    },
    {
      title: "Ruhunun Hangi Taşın Enerjisine İhtiyacı Var?",
      popularity: "110b",
      teaser:
        "Zaman zaman hepimiz kendimizi tükenmiş hissediyor ve içimizde devam edecek gücü bulamayabiliyoru...",
      thumbnail:
        "https://img-s1.onedio.com/id-5deee76e1ee3186a22d95d86/rev-0/w-333/h-195/f-jpg/s-0ccbcc2d94a9f72b51dae1308fec42e5ab1c50a3.jpg",
      link:
        "https://onedio.com/haber/ruhunun-hangi-tasin-enerjisine-ihtiyaci-var-891068",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "10 Aralık 2019",
    },
    {
      title:
        "MasterChef Yasin Kendi İsteğiyle mi Elendi? Twitter Fenomeninden Son Eleme Gecesine Dair Şok İddialar",
      popularity: "114b",
      teaser: null,
      thumbnail:
        "https://img-s2.onedio.com/id-5dee63e669e70e5a125b285f/rev-0/w-333/h-195/f-jpg/s-3315b4be5bb2a75cda2ee6ccdfc993a862ee0079.jpg",
      link:
        "https://onedio.com/haber/masterchef-yasin-kendi-istegiyle-mi-elendi-twitter-fenomeninden-son-eleme-gecesine-dair-sok-iddialar-891547",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "09 Aralık 2019",
    },
    {
      title:
        "120 Bin Dolarlık Sanat Eseri Duvara Bantlanmış Muzu Bir Başka Sanatçı Duvardan Alıp Yedi!",
      popularity: "153b",
      teaser: "Öyle bir sanat eserine de böyle garip bir son yaraş...",
      thumbnail:
        "https://img-s2.onedio.com/id-5dee03fa452fa89a7c8e5327/rev-0/w-333/h-195/f-jpg/s-9726578433f22f8f746a5d3997a56625e615e9b9.jpg",
      link:
        "https://onedio.com/haber/120-bin-dolarlik-sanat-eseri-duvara-bantlanmis-muzu-bir-baska-sanatci-duvardan-alip-yedi-891426",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "08 Aralık 2019",
    },
    {
      title:
        "Ünlüleri Masalsı Bir Anlatımla Birleştiren Çizimleriyle Büyüleyen Türk Tasarımcının Çalışmaları",
      popularity: "6.3b",
      teaser: "1994 Doğumlu Türk tasarımcı Yaşar Vurdem, Erc...",
      thumbnail:
        "https://img-s2.onedio.com/id-5dece348f8c08c9b58ec0419/rev-0/w-333/h-195/f-jpg/s-afeca18ad00442d9848268f5d3ace6e2d1ddac67.jpg",
      link:
        "https://onedio.com/haber/unluleri-masalsi-bir-anlatimla-birlestiren-cizimleriyle-buyuleyen-turk-tasarimcinin-22-eseri-891429",
      author: "",
      source: "onedio.com",
      topics: ["cool"],
      date: "08 Aralık 2019",
    },
    {
      title:
        "Kendisi Ortadan Kaybolduğu An Hunharca Ağlayan Oğlu İçin Dahiyane Bir Çözüm Bulan Anne",
      popularity: "214",
      teaser: "Analık işte kafa hep zehir gibi 😂",
      thumbnail:
        "https://img-s2.onedio.com/id-5df8a39623b4110f2dd17d0f/rev-0/w-333/h-195/f-jpg/s-8414fff36ac7a2760e65d9e3a797fe3c22d8af23.jpg",
      link:
        "https://onedio.com/haber/kendisi-ortadan-kayboldugu-an-hunharca-aglayan-oglu-icin-dahiyane-bir-cozum-bulan-anne-892118",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "18 Aralık, 08:15",
    },
    {
      title:
        "Yılbaşında Davet Sofralarınızı Süsleyecek Yapımı Kolay 11 Atıştırmalık Tarif",
      popularity: "526",
      teaser:
        "Siz de yılbaşını evde geçirenlerdenseniz sofralarınızı süsleyip ...",
      thumbnail:
        "https://img-s2.onedio.com/id-5df8a7fcfee201f12d8cfc21/rev-0/w-333/h-195/f-jpg/s-4a82259abfd444885426e73a5ee9779d5c395336.jpg",
      link:
        "https://onedio.com/haber/yilbasinda-davet-sofralarinizi-susleyecek-yapimi-kolay-11-atistirmalik-tarif-892022",
      author: "",
      source: "onedio.com",
      topics: ["yemek"],
      date: "18 Aralık, 08:00",
    },
    {
      title:
        "Farklı Ülkelerde Verilen, Her Çocuğun Almak İsteyeceği Birbirinden Faydalı ve Eğlenceli 13 Ders",
      popularity: "1.3b",
      teaser: "Dünyanın farklı yerlerindeki okullarda, çocuk...",
      thumbnail:
        "https://img-s2.onedio.com/id-5df8b24204e64f2d0fda0efd/rev-0/w-333/h-195/f-jpg/s-6580d23f9447dcf8ae16ab301781b76ab76cc05f.jpg",
      link:
        "https://onedio.com/haber/farkli-ulkelerde-verilen-her-cocugun-almak-isteyecegi-birbirinden-faydali-ve-eglenceli-13-ders-892142",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "18 Aralık, 07:45",
    },
    {
      title:
        "Çok Güzel Olmuş, Bir Daha Olmasın: Biz Neler Giymişiz Böyle Dedirten, 2010'ların En Göz Kanatan Moda Akımları",
      popularity: "2.6b",
      teaser: null,
      thumbnail:
        "https://img-s2.onedio.com/id-5de0b2a2635d16643753360d/rev-0/w-333/h-195/f-jpg/s-de5f371430f2640cfc1cea45c058c73070e6fe57.jpg",
      link:
        "https://onedio.com/haber/cok-guzel-olmus-bir-daha-olmasin-biz-neler-giymisiz-boyle-dedirten-2010-larin-en-goz-kanatan-moda-akimlari-890756",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "18 Aralık, 07:30",
    },
    {
      title:
        "İlişkinin Başında Görmezden Geldiğimiz ve Sonrasında Acı Bir Şekilde Pişman Olduğumuz Gerçekler",
      popularity: "2.4b",
      teaser: "Aşkın gözü gerçekten de kör mü?",
      thumbnail:
        "https://img-s1.onedio.com/id-5df88a7c898c319e38eaa842/rev-0/w-333/h-195/f-jpg/s-8f52eff54135512e3fe93ea0a5fea57f1e6161c7.jpg",
      link:
        "https://onedio.com/haber/iliskinin-basinda-gormezden-geldigimiz-ve-sonrasinda-aci-bir-sekilde-pisman-oldugumuz-9-gercek-892115",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "18 Aralık, 07:00",
    },
    {
      title:
        "Bir Stilistin Kaleminden Harika Görünmenizi Sağlayacak 10 Tavsiye",
      popularity: "2.5b",
      teaser:
        "Instagram'da 50.000'den fazla takipçisi olan moda tasarımcısı Alexandra Gaz...",
      thumbnail:
        "https://img-s2.onedio.com/id-5df883e4315c8fb8254b0205/rev-0/w-333/h-195/f-jpg/s-34c433c0af3da63e38ba41f4809a90fe23bbf91c.jpg",
      link:
        "https://onedio.com/haber/bir-stilistin-kaleminden-harika-gorunmenizi-saglayacak-10-tavsiye-892113",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "18 Aralık, 06:45",
    },
    {
      title: "İç Çamaşırı Zevkine Göre Kişilik Analizi Yapıyoruz!",
      popularity: "54b",
      teaser:
        "Seçtiğin iç çamaşırlara göre nasıl bir kişiliğe sahip olduğunu merak ediyorsan; Haydi tes...",
      thumbnail:
        "https://img-s1.onedio.com/id-5df75c8249dfeb5919031240/rev-0/w-333/h-195/f-jpg/s-8d9717d2e65d6cb3ce680bca15515fde304099f7.jpg",
      link:
        "https://onedio.com/haber/ic-camasiri-zevkine-gore-kisilik-analizi-yapiyoruz-892049",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "17 Aralık, 21:00",
    },
    {
      title:
        "Günlük Burç Yorumuna Göre 18 Aralık Çarşamba Günün Nasıl Geçecek?",
      popularity: "87b",
      teaser: "Burcunu seç, gününün nasıl geçeceğini söyleyelim. 😌",
      thumbnail:
        "https://img-s1.onedio.com/id-5df8a8d1fbc734313389d32e/rev-0/w-333/h-195/f-jpg/s-bc8aed69e3eb53eb140880fc243c2014057c2330.jpg",
      link:
        "https://onedio.com/haber/gunluk-burc-yorumuna-gore-18-aralik-carsamba-gunun-nasil-gececek-892194",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "17 Aralık, 18:45",
    },
    {
      title:
        "Onedio Okurlarına Göre 2019 Yılında En Çok Güvenilen 16 Ünlü İsim",
      popularity: "29b",
      teaser:
        "En güvenilir ünlüler kimler? 127 bine yakın oyun kullanıldığı anketimiz son...",
      thumbnail:
        "https://img-s1.onedio.com/id-5df8aa86c4b5d72a342c3b98/rev-0/w-333/h-195/f-jpg/s-e1806a60d648f1cd5b888c120f574302dd76e905.jpg",
      link:
        "https://onedio.com/haber/onedio-okurlarina-gore-2019-yilinda-en-cok-guvenilen-16-unlu-isim-892140",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "17 Aralık, 17:36",
    },
    {
      title:
        "9 Yaşındaki Miniğin Satılan Arabalarının Aynasına Bıraktığı Not ve Sonrasında Yaşananlar İçinizi Isıtacak!",
      popularity: "79b",
      teaser: null,
      thumbnail:
        "https://img-s1.onedio.com/id-5df8e01feef4e7930e9e5004/rev-0/w-333/h-195/f-jpg/s-3b08179ff8f0c3babb96848e8cf7e538de17a406.jpg",
      link:
        "https://onedio.com/haber/9-yasindaki-minigin-satilan-arabalarinin-aynasina-biraktigi-not-ve-sonrasinda-yasananlar-icinizi-isitacak-892176",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "17 Aralık, 17:15",
    },
    {
      title:
        "Ellerden Düşmeyen Elektronik Cihazlarda Geçtiğimiz 10 Yıl İçinde İndirilen En İyi Uygulamaları Açıklıyoruz!",
      popularity: "29b",
      teaser: null,
      thumbnail:
        "https://img-s1.onedio.com/id-5df8c39923a099271598d3fa/rev-0/w-333/h-195/f-jpg/s-8722c9c9fcb51d075a91b83a2aaefee852403361.jpg",
      link:
        "https://onedio.com/haber/ellerden-dusmeyen-elektronik-cihazlarda-gectigimiz-10-yil-icinde-indirilen-en-iyi-uygulamalari-acikliyoruz-892141",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "17 Aralık, 15:27",
    },
    {
      title:
        "MasterChef'in En Çok Konuşulan İsmi Güzide Mertcan'ın Mutlu Aile Tablosu ve Hayatına Dair Merak Edilen Detaylar",
      popularity: "51b",
      teaser: null,
      thumbnail:
        "https://img-s2.onedio.com/id-5df8c288e8879a211389786b/rev-0/w-333/h-195/f-jpg/s-64e720c7cb427e35ae8f1d83ea94d42ac7948a18.jpg",
      link:
        "https://onedio.com/haber/masterchef-in-en-cok-konusulan-ismi-guzide-mertcan-in-mutlu-aile-tablosu-ve-hayatina-dair-merak-edilen-detaylar-892147",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "17 Aralık, 15:00",
    },
    {
      title:
        "Oyunculuğuyla Büyüleyen Neslihan Atagül'ün Türkiye'nin En Güzel Kadınlarından Biri Olduğunun Kanıtı 19 Instagram Paylaşımı",
      popularity: "49b",
      teaser: null,
      thumbnail:
        "https://img-s1.onedio.com/id-5df8af37ad2cf43d35d7fee4/rev-1/w-333/h-195/o-50x4/f-jpg/s-36f369ceafbc44a93a2b36f18dc24ea0fffe63ad.jpg",
      link:
        "https://onedio.com/haber/oyunculuguyla-buyuleyen-neslihan-atagul-un-turkiye-nin-en-guzel-kadinlarindan-biri-oldugunun-kaniti-19-instagram-paylasimi-892138",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "17 Aralık, 14:35",
    },
    {
      title:
        "Sizi Hayattan Bezdirmek İçin Anne Karnındayken Yeminler Eden İkizler Burcu Erkeğiyle Evlenmemeniz İçin Bazı Nedenler",
      popularity: "29b",
      teaser: null,
      thumbnail:
        "https://img-s2.onedio.com/id-5df89bb2df53381931819643/rev-0/w-333/h-195/f-jpg/s-6e97f7aaa57633f4b4a59dbf43b0a5e08f36d69a.jpg",
      link:
        "https://onedio.com/haber/sizi-hayattan-bezdirmek-icin-anne-karnindayken-yeminler-eden-ikizler-burcu-erkegiyle-evlenmemeniz-icin-bazi-nedenler-892143",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "17 Aralık, 14:33",
    },
    {
      title:
        "Sadece Kendi Çocuklarını Değil, Diğer Tüm Çocukları Adeta Ateşe Atan Aşı Karşıtı Gerici Zihniyet Neden Durmuyor?",
      popularity: "19b",
      teaser: null,
      thumbnail:
        "https://img-s2.onedio.com/id-5df8b4ca132d59340f1100c9/rev-0/w-333/h-195/f-jpg/s-26a73feb1a0e733590f791b762e00f4377e3e791.jpg",
      link:
        "https://onedio.com/haber/sadece-kendi-cocuklarini-degil-diger-tum-cocuklari-adeta-atese-atan-asi-karsiti-gerici-zihniyet-neden-durmuyor-892146",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "17 Aralık, 14:28",
    },
    {
      title: "Sizlerin Oylarıyla 2019'un En İyi Yabancı Dizisini Seçiyoruz!",
      popularity: "93b",
      teaser:
        "2019 yılında çıkmış birbirinden güzel diziler arasında en iyisini sizlerin oyla...",
      thumbnail:
        "https://img-s1.onedio.com/id-5df2358541bb591643fed372/rev-0/w-333/h-195/f-jpg/s-90b2b706ddaea655727c7363f84ba9359c67b93c.jpg",
      link:
        "https://onedio.com/haber/sizlerin-oylariyla-2019-un-en-iyi-yabanci-dizisini-seciyoruz-891804",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "17 Aralık, 13:18",
    },
    {
      title:
        "Yıllar İçinde Yaşadığı Değişimle Küçük Dilimizi Yutmamıza Neden Olan Bez Bebek Dizisinin Yağmur'u Asena Keskinci",
      popularity: "169b",
      teaser: null,
      thumbnail:
        "https://img-s2.onedio.com/id-5df8921b27816a5129e0a167/rev-0/w-333/h-195/f-jpg/s-b7f56644bf090521ea37f14f3672da9bb920eb2e.jpg",
      link:
        "https://onedio.com/haber/yillar-icinde-yasadigi-degisimle-kucuk-dilimizi-yutmamiza-neden-olan-bez-bebek-dizisinin-yagmur-u-asena-keskinci-892122",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "17 Aralık, 12:12",
    },
    {
      title:
        "Sivri Diliyle Ünlü Fenomen Pink Freud'un Dillere Destan Değişimi Herkesi Şaşırttı",
      popularity: "49b",
      teaser: "Para lazım arkadaşlar, acil! 😂",
      thumbnail:
        "https://img-s1.onedio.com/id-5df79a19e1f7e7a910dda9d4/rev-0/w-333/h-195/f-jpg/s-73514b8e837bee674ab6469b1735476e319a603e.jpg",
      link:
        "https://onedio.com/haber/sivri-diliyle-herkesi-gulduren-unlu-fenomen-pink-freud-un-dillere-destan-degisimi-herkesi-sasirtti-892062",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "17 Aralık, 12:06",
    },
    {
      title:
        '"Hayatımdakinin Ne Ayak Olduğunu Anlamadım" Diyenlere Özel 9 Hitap Sözcüğüyle Karakter Analizi',
      popularity: "119b",
      teaser: "Bir ilişkide sevgilinizin size nasıl hitap ett...",
      thumbnail:
        "https://img-s1.onedio.com/id-5df88963b8659e202e80ed66/rev-0/w-333/h-195/f-jpg/s-ae7dc9dedc93d463d3413b481dc9b9ae15b62181.jpg",
      link:
        "https://onedio.com/haber/-hayatimdakinin-ne-ayak-oldugunu-anlamadim-diyenlere-ozel-9-hitap-sozcuguyle-karakter-analizi-892100",
      author: "",
      source: "onedio.com",
      topics: [],
      date: "17 Aralık, 10:36",
    },
  ];

  return (
    <ul className={"article-list"}>
      {articles.map((article, index) => (
        <ArticleItem
          key={`${index}-${article.title.slice(0, 9)}`}
          {...article}
        />
      ))}
    </ul>
  );
}
