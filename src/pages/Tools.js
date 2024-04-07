import React from "react"
import Header from "../components/header"
import img2 from "../images/Stroi-mat.jpg"
import Footer from "../components/Footer"

export default function Tools() {
  return (
    <div>
      <div>
        <Header />
        <div className="topNewAbout">
          <p className="newcolor newTextAbout newTextAlignAbout padding1">
            Строительные Инструменты и Материалы
          </p>
        </div>
        <div className="newFlex-blok1" style={{ position: "relative" }}>
          <div>
            <h1 className="ChapterText padding5">
              Продажа Строительных инструментов и Материалов
            </h1>
            <h2 className="textDescription">
              Группа компаний "ALTYN JULDYZ" является ведущим производителем
              высококачественных строительных, технологических и механических
              инструментов под престижным брендом "GS". Наш богатый ассортимент
              включает разнообразные товары, предоставляя вам широкий выбор
              строительных инструментов, электроинструментов, расходных
              материалов, строительного оборудования и аксессуаров для опалубки.
            </h2>
            <h2 className="textDescription">
              В сфере строительства, садоводства, ремонта и других областей
              необходимы специализированные инструменты и оборудование для
              упрощения труда и повышения эффективности задач. Наши продукты
              предоставляют современные технологии, которые не только облегчают
              труд специалистов, но и гарантируют высший стандарт качества
              результатов. Гордимся предоставлением новейших технических
              характеристик нашего оборудования, создавая условия для достижения
              впечатляющих успехов наших клиентов.
            </h2>
            <a href="https://gstools.kz/">
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
    </div>
  )
}
