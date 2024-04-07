import React from "react"
import Header from "../components/header"
import img2 from "../images/19741925018_97cb154c0d_b.jpg"
import Footer from "../components/Footer"
import "../Style/NewComponentNaprovlenie.css"

export default function Farmingfish() {
  return (
    <div>
    <Header />
    <div className="topNewAbout">
      <p className="newcolor newTextAbout newTextAlignAbout padding1">
      Форелевое Хозяйство «Fresh Fish»
      </p>
    </div>
    <div className="newFlex-blok1" style={{ position: "relative" }}>
      <div>
        <h1 className="ChapterText padding5">Рыбоводство</h1>
        <h2 className="textDescription">
        "Fresh Fish" — это инновационный проект по разведению форели, входящий в состав группы компаний "ALTYN JULDYZ". Производственная мощность наших хозяйств достигает 3000 тонн форели в год. Посетив наши хозяйства, вы сможете погрузиться в атмосферу форелевого разведения, насладиться свежим воздухом и красивыми горными пейзажами.
        </h2>
        <h2 className="textDescription">
        "Fresh Fish" предоставляет уникальную возможность не только ознакомиться с процессом разведения форели, но и насладиться красотой природы в окружении горных пейзажей. Наш проект обеспечивает свежую и качественную форель, продукция которой соответствует высоким стандартам группы компании "ALTYN JULDYZ".
        </h2>
        <a href="https://freshfish.kz/">
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
