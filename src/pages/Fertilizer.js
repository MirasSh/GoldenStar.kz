import React from "react"
import Header from "../components/header"
import img2 from "../images/chto-takoe-kislyj-torf-i-dlya-chego-on-ispolzuetsya.jpg"
import Footer from "../components/Footer"
import "../Style/NewComponentNaprovlenie.css"

export default function Fertilizer() {
  return (
    <div>
      <Header />
      <div className="topNewAbout">
        <p className="newcolor newTextAbout newTextAlignAbout padding1">
          Органическое Удобрение Биогумус (Вермикост)
        </p>
      </div>
      <div className="newFlex-blok1" style={{ position: "relative" }}>
        <div>
          <h1 className="ChapterText padding5">
            Органическое Удобрение Биогумус (Вермикост)
          </h1>
          <h2 className="textDescription">
            Удобрение "Биогумус" – это ключ к красивым и здоровым растениям, а
            также обеспечению плодородия почвы! Это удобрение в несколько раз
            увеличивает потенциал, вложенный в растения и почву. "Биогумус"
            активизирует процессы на протяжении всего вегетативного периода
            растений, улучшает систему минерального питания и обогащает растения
            необходимыми питательными веществами. Благодаря универсальности
            "Биогумуса", он способствует ускоренному росту и развитию рассады на
            всех этапах.
          </h2>
          <h2 className="textDescription">
            "Биогумус" стимулирует питание растений, повышает качество плодов у
            плодоносящих растений и улучшает цветение у цветущих. Вместе с тем,
            корневая система растений становится более разветвленной и развитой.
            Обработка почвы удобрением "Биогумус" значительно повышает ее
            плодородие, качественно улучшая и структурируя состав почвы.
            "Биогумус" представляет собой эффективное средство для поддержания
            здоровья растений и улучшения плодородия почвенного слоя.
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
