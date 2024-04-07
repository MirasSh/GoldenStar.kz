import React from "react"
import Header from "../components/header"
import img2 from "../images/1582053988_17-p-dizain-kabinetov-nachalnikh-klassov-53.jpg"
import Footer from "../components/Footer"
import "../Style/NewComponentNaprovlenie.css"

export default function Schoolequipment() {
  return (
    <div>
      <Header />
      <div className="topNewAbout">
        <p className="newcolor newTextAbout newTextAlignAbout padding1">
          Школьное оборудование и кабинеты
        </p>
      </div>
      <div className="newFlex-blok1" style={{ position: "relative" }}>
        <div>
          <h1 className="ChapterText padding5">
            Школьное оборудование и кабинеты{" "}
          </h1>
          <h2 className="textDescription">
            GSMektep — компания, специализирующаяся на поставке инновационных
            товаров для образовательных учреждений. Мы продолжаем активно
            вкладывать в развитие нашей страны, предлагая образовательным
            учреждениям высококачественные и передовые решения.
          </h2>
          <h2 className="textDescription">
            В рамках данного направления мы предлагаем обширный ассортимент
            товаров, включая современные интерактивные технологии,
            образовательное программное обеспечение, учебную мебель и другие
            инновационные продукты. Наша миссия заключается в обеспечении
            образовательных учреждений средствами, способствующими эффективному
            обучению и создающими благоприятные условия для развития студентов.
          </h2>
          <a href="https://gsmektep.kz/">
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
