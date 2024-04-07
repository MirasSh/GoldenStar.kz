import React from "react"
import Header from "../components/header"
import img2 from "../images/2.jpg"
import Footer from "../components/Footer"

export default function AdministrativeBuilding() {
  return (
    <div>
      <Header />
      <div className="topNewAbout">
        <p className="newcolor newTextAbout newTextAlignAbout padding1">
          Строительство Административных Зданий
        </p>
      </div>
      <div className="newFlex-blok1" style={{ position: "relative" }}>
        <div>
          <h1 className="ChapterText padding5">
            Строительство Административных Зданий
          </h1>
          <h2 className="textDescription">
            "GSTOWER" — инновационный проект компании GS Building, которая
            является частью группы компаний "ALTYN JULDYZ". Наш проект
            представляет собой передовое, активно развивающееся предприятие,
            специализирующееся в различных аспектах проектирования и
            строительства высокотехнологичных башен. Наша первостепенная задача
            в "GSTOWER" — создание современных, функциональных и технологически
            продвинутых сооружений.
          </h2>
          <h2 className="textDescription">
            Мы стремимся к постоянному совершенствованию, осуществляя
            непрерывное обучение нашего персонала и поддерживая высокий стандарт
            качества в каждом этапе наших проектов. "GSTOWER" активно развивает
            свою материально-техническую базу, создавая благоприятные условия
            для труда наших сотрудников. Мы тесно сотрудничаем с ведущими
            отечественными и зарубежными производителями, стремясь использовать
            передовые технологии и материалы.
          </h2>
          <a href="https://gsbuilding.kz/">
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
