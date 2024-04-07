import React from "react"
import Header from "../components/header"
import img2 from "../images/15.png"
import Footer from "../components/Footer"

export default function Construction() {
  return (
    <div>
      <Header />
      <div className="topNewAbout">
        <p className="newcolor newTextAbout newTextAlignAbout padding1">
          Жилищное Строительство
        </p>
      </div>
      <div className="newFlex-blok1" style={{ position: "relative" }}>
        <div>
          <h1 className="ChapterText padding5">Жилищное Строительство</h1>
          <h2 className="textDescription">
            "GS BUILDING" — компания, являющаяся частью группы компаний "ALTYN
            JULDYZ", представляет собой молодое, динамично развивающееся
            предприятие, специализирующееся в широком спектре строительных
            работ. Одной из ключевых задач "GS BUILDING" является строительство
            высококачественных и надежных помещений. Наша стратегия включает в
            себя постоянное повышение квалификации персонала и обеспечение
            высокого стандарта качества во всех выполняемых работах.
          </h2>
          <h2 className="textDescription">
            Мы осуществляем создание и развитие материально-технической базы,
            обеспечиваем благоприятные условия труда для наших сотрудников, и
            активно сотрудничаем с отечественными и зарубежными производителями.
            В наших отношениях с деловыми партнерами мы придерживаемся принципов
            взаимовыгодного и плодотворного сотрудничества. Учитывая ваши
            потребности и наш профессионализм, мы готовы превратить ваши идеи в
            реальность. Наша компания стремится к постоянному совершенствованию,
            гарантируя высший уровень удовлетворенности клиентов.
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
