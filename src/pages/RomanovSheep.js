import React from "react"
import Header from "../components/header"
import img2 from "../images/Mal2.jpg"
import Footer from "../components/Footer"
import "../Style/NewComponentNaprovlenie.css"

export default function RomanovSheep() {
  return (
    <div>
      <Header />
      <div className="topNewAbout">
        <p className="newcolor newTextAbout newTextAlignAbout padding1">
          Романовские Овцы
        </p>
      </div>
      <div className="newFlex-blok1" style={{ position: "relative" }}>
        <div>
          <h1 className="ChapterText padding5">
            Разведение МРС «Романовские Овцы»
          </h1>
          <h2 className="textDescription">
            Наша ферма, специализирующаяся на разведении "Романовских овец",
            была построена в соответствии со всеми мировыми стандартами для
            обеспечения комфорта, тепла и уюта нашим овцам. Овцы породы
            "Романовская" у нас содержатся в современных и комфортабельных
            павильонах, с обустроенным просторным манежем для их прогулок.
            Фазенда находится всего в 100 км от города Алматы и располагает
            тремя глубоководными источниками на своей территории.
          </h2>
          <h2 className="textDescription">
            Наше хозяйство по разведению "Романовских овец" является одним из
            крупнейших в Казахстане. В настоящее время у нас более 3000 овец
            этой породы, которые соответствуют самым высоким мировым стандартам.
            Мы также гордимся тем, что являемся одним из основателей
            международной ассоциации по разведению "Романовских овец". Наша
            ферма стремится поддерживать выдающийся стандарт качества и заботы о
            животных в отрасли разведения овец.
          </h2>
          <a href="https://premiumlamb.kz/">
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
