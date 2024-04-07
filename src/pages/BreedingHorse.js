import React from "react"
import Header from "../components/header"
import img2 from "../images/Horses.jpg"
import Footer from "../components/Footer"
import "../Style/NewComponentNaprovlenie.css"

export default function Horsebreeding() {
  return (
    <div>
      <Header />
      <div className="topNewAbout">
        <p className="newcolor newTextAbout newTextAlignAbout padding1">
          Коневодство
        </p>
      </div>
      <div className="newFlex-blok1" style={{ position: "relative" }}>
        <div>
          <h1 className="ChapterText padding5">Конный завод «ALTYN JULDYZ»</h1>
          <h2 className="textDescription">
            Конный завод "ALTYN JULDYZ" — эксперт в разведении древней
            Ахалтекинской породы лошадей. Эта порода, созданная около 5 000 лет
            назад, является чистокровной верховой породой. Ахалтекинцы
            выделяются своим впечатляющим внешним видом и крупным ростом, а
            также прекрасно приспособлены к жизни и труду в условиях жаркого
            климата, быстро адаптируясь к различным погодным условиям.
          </h2>
          <h2 className="textDescription">
            Миссия нашего завода заключается в выращивании лошадей,
            соответствующих современным высоким стандартам. Мы стремимся
            создавать резвых и конкурентоспособных лошадей, сохраняя при этом
            выдающиеся качества, присущие Ахалтекинской породе. Наш упор
            делается на постоянное улучшение системы кормления и ухода за
            лошадьми, внедряя высокотехнологичные корма. Учитывая чистокровность
            породы, мы предоставляем оптимальные условия для выращивания лошадей
            высочайшего качества на казахстанском рынке.
          </h2>
          <a href="https://altyn-teke.kz/">
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
