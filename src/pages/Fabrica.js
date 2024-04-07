import React from "react"
import Header from "../components/header"
import img2 from "../images/Svea.png"
import Footer from "../components/Footer"
import "../Style/NewComponentNaprovlenie.css"

export default function Fabrica() {
  return (
    <div>
      <Header />
      <div className="topNewAbout">
        <p className="newcolor newTextAbout newTextAlignAbout padding1">
          Швейно-обувная фабрика
        </p>
      </div>
      <div className="newFlex-blok1" style={{ position: "relative" }}>
        <div>
          <h1 className="ChapterText padding5">
            Крупнейший производитель спецодежды и спецобуви
          </h1>
          <h2 className="textDescription">
            Мы разрабатываем собственные уникальные модели, инновационные ткани,
            пропитки, красители, технологии производства. Наша продукция служит
            дольше и повышает производительность труда. Производственная
            мощность насчитывает до 300 тысяч комплектов спецодежды в год. А
            также производственная мощность спецобуви составляет 150 тысяч пар в
            ежегодно. Вместе с тем, с каждым годом расширяется ассортимент и
            улучшение качества нашей продукции.
          </h2>
          <h2 className="textDescription">
            Также, мы предоставляем свои услуги на рынке уже на протяжении
            многих лет. На сегодняшний день фабрика компании «ALTYN JULDYZ»
            выпустило большое количество спец одежды и обуви для представителей
            разных отраслей и профессий. Фабрика использует материал высшего
            качества для изготовления одежды. Производство завезло станки и
            машинки по пошиву последнего поколения.
          </h2>
          <a href="https://aforma.kz/">
            <button className="newpositionRel newButton">
              Перейти на сайт
            </button>
          </a>
        </div>
        <div className="image-overlay"></div>
        <div className="gradientOverlay"></div>
        <img
          className="minHeight"
          src={img2}
          alt={
            "Мы разрабатываем собственные уникальные модели, инновационные ткани, пропитки, красители, технологии производства."
          }
        />
      </div>
      <div className="topNewAbout">
        <Footer />
      </div>
    </div>
  )
}
