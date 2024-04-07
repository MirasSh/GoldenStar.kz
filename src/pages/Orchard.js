import React from "react"
import Header from "../components/header"
import img2 from "../images/256.jpg"
import Footer from "../components/Footer"

export default function AppleOrchard() {
  return (
    <div>
      <Header />
      <div className="topNewAbout">
        <p className="newcolor newTextAbout newTextAlignAbout padding1">
          Интенсивные яблоневые сады «AtekAgro»
        </p>
      </div>
      <div className="newFlex-blok1" style={{ position: "relative" }}>
        <div>
          <h1 className="ChapterText padding5">
            Интенсивные яблоневые сады «AtekAgro»
          </h1>
          <h2 className="textDescription">
            Интенсивные яблоневые сады "AtekAgro" — воплощение передовых
            технологий в сельском хозяйстве. Наша компания стремится к
            постоянному совершенствованию и достижению выдающихся результатов в
            выращивании яблок. Применение интенсивных методов обеспечивает
            максимальную продуктивность на ограниченной территории.
          </h2>
          <h2 className="textDescription">
            Наша ферма также внедряет современные технологии для обеспечения
            эффективного водоснабжения и удобрения через систему капельного
            орошения. Мы гордимся нашим профессиональным агрономическим
            сопровождением, обеспечивающим оптимальные условия для роста и
            развития яблоковых деревьев. Интенсивные яблоневые сады "AtekAgro" —
            это не просто ферма, это современный подход к выращиванию
            высококачественных яблок для наших клиентов.
          </h2>
          <a href="https://atekagro.kz/">
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
