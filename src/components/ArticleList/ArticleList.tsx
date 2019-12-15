import "./ArticleList.scss";

import React from "react";

import {ArticleItem} from "../ArticleItem/ArticleItem";

interface ArticleListProps {
  articles?: {
    title: string;
  }[];
}

export function ArticleList({articles: _}: ArticleListProps) {
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
