import React from "react"
import Header from "../components/header"
import img2 from "../images/1674910661_top-fon-com-p-fon-dlya-prezentatsii-po-kinoiskusstvu-118.jpg"
import Footer from "../components/Footer"
import "../Style/NewComponentNaprovlenie.css"

export default function Cinematography() {
  return (
    <div>
      <Header />
      <div className="topNewAbout">
        <p className="newcolor newTextAbout newTextAlignAbout padding1">
          Кинематография
        </p>
      </div>
      <div className="newFlex-blok1" style={{ position: "relative" }}>
        <div>
          <h1 className="ChapterText padding5">Кинематография</h1>
          <h2 className="textDescription">
            Наша компания занимается съемкой фильмов, сериалов и клипов. Мы
            работаем с настоящими профессионалами своего дела с многолетним
            опытом видео съемки. Также мы всегда используем новейшие технологий
            последнего поколения для того чтобы создавать уникальные кинокартины
            высокого качества
          </h2>
          <h2 className="textDescription">
            Как студия по производству видео, мы располагаем обширной студией с
            полным набором световых, видео и монтажных возможностей, зелеными
            экранами и разнообразным реквизитом, который может воспроизводить
            различные обстановки — от розничных магазинов до офисных помещений.
          </h2>
          <a href="#">
            <button
              className="newpositionRel newButton"
            >
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
