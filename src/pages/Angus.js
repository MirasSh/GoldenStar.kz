import React from "react"
import Header from "../components/header"
import img2 from "../images/angus.jpg"
import Footer from "../components/Footer"

export default function Angus() {
  return (
    <div>
      <Header />
      <div className="topNewAbout">
        <p className="newcolor newTextAbout newTextAlignAbout padding1">
          Разведение КРС "Абердин Ангус" (племенной)
        </p>
      </div>
      <div className="newFlex-blok1" style={{ position: "relative" }}>
        <div>
          <h1 className="ChapterText padding5">КРС «Абердин Ангус»</h1>
          <h2 className="textDescription">
            На ферме "LAKE FARM" реализуется ключевая часть межрегионального
            проекта компании, посвященного выращиванию крупного рогатого скота
            специализированной породы Абердин-ангус. Наша постоянная работа над
            улучшением условий содержания, ветеринарный контроль на всех этапах
            развития животных и стратегическое планирование прироста поголовья
            направлены на снижение производственных издержек и оптимизацию
            себестоимости конечного продукта – мраморной говядины.
          </h2>
          <h2 className="textDescription">
            Наша компания предлагает клиентам не только выдающихся быков, но и
            превосходный генетический материал. Black Angus представляет собой
            специально выведенную мясную породу Абердин-ангус черной масти и
            считается наилучшей в своем классе. Особенности бычков Black Angus
            включают комолость и черную масть. Эти характеристики передаются
            потомкам при скрещивании с представителями других пород. Мясо,
            предоставляемое в наши магазины, выращено на нашей ферме в строгом
            соответствии с особыми стандартами для данной породы. Абердин-ангус
            — это не просто мясо, это мясной бренд № 1 в мире с
            тонковолокнистой, мраморной структурой, придавая вашему столу
            исключительное качество и вкус.
          </h2>
          <a href="https://lakefarm.kz/">
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
