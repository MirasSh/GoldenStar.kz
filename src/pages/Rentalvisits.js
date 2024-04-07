import React from "react"
import Header from "../components/header"
import img2 from "../images/peugeot-partner-load-01.jpg"
import Footer from "../components/Footer"
import "../Style/NewComponentNaprovlenie.css"

export default function Rentalvisits() {
  return (
    <div>
      <Header />
      <div className="topNewAbout">
        <p className="newcolor newTextAbout newTextAlignAbout padding1">
          Аренда Складских Помещений Класса А и С
        </p>
      </div>
      <div className="newFlex-blok1" style={{ position: "relative" }}>
        <div>
          <h1 className="ChapterText padding5">
            Аренда Складских Помещений Класса «А» и «Б»
          </h1>
          <h2 className="textDescription">
            Компания "ALTYN JULDYZ" предлагает в аренду современные складские
            помещения класса "В и С" с общей площадью 4000 кв. м. Наши склады
            оснащены всем необходимым для эффективного хранения и управления
            запасами. Характеристики наших помещений включают в себя полностью
            асфальтированный парк, высоту потолков 8 метров и офисные кабинеты
            общей площадью 500 кв. м. Каждый офисный кабинет имеет площадь 25
            кв. м, а весь периметр территории обеспечен круглосуточной охраной.
          </h2>
          <h2 className="textDescription">
            В нашем распоряжении имеются 9 крытых складов с площадью от 250 кв.
            м до 1000 кв. м, обеспечивая разнообразные варианты для вашего
            складского пространства. У нас предусмотрен удобный въезд и места
            для разворота фур, а также все необходимые коммуникации подведены.
            Наше предложение идеально подходит для компаний, ищущих современные,
            безопасные и удобные условия для хранения своих товаров.
          </h2>
          <a href="https://gsprombaza.kz/">
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
