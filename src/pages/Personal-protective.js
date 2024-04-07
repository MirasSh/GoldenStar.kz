import React from "react"
import Header from "../components/header"
import img2 from "../images/Zahita.jpg"
import Footer from "../components/Footer"

export default function Personalprotective() {
  return (
    <div>
      <Header />
      <div className="topNewAbout">
        <p className="newcolor newTextAbout newTextAlignAbout padding1">
          Средства Индивидуальной Защиты
        </p>
      </div>
      <div className="newFlex-blok1" style={{ position: "relative" }}>
        <div>
          <h1 className="ChapterText padding5">
            Производство Средств Индивидуальной Защиты
          </h1>
          <h2 className="textDescription">
            Группа компаний 'ALTYN JULDYZ' постоянно заботится о сохранении и
            обеспечении здоровья людей. Ежедневно мы выпускаем средства
            индивидуальной защиты (СИЗ) для органов дыхания, слуха, рук, глаз, а
            также предлагаем диэлектрические изделия (СИЗ).
          </h2>
          <h2 className="textDescription">
            На нашем сайте представлен широкий ассортимент высококачественных
            средств защиты, включая защитные фартуки, респираторы, каски,
            удерживающие системы и другую спецодежду. Мы также готовы изготовить
            персонализированные средства индивидуальной защиты в соответствии с
            требованиями клиента.
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
