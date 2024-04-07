import React from "react"
import Header from "../components/header"
import img2 from "../images/vip.png"
import Footer from "../components/Footer"
import "../Style/NewComponentNaprovlenie.css"

export default function VIPCars() {
  return (
    <div>
      <Header />
      <div className="topNewAbout">
        <p className="newcolor newTextAbout newTextAlignAbout padding1">
          Аренда Премиум Авто в Казахстане
        </p>
      </div>
      <div className="newFlex-blok1" style={{ position: "relative" }}>
        <div>
          <h1 className="ChapterText padding5">
            Аренда Премиум Авто в Казахстане
          </h1>
          <h2 className="textDescription">
            В нашем распоряжении — эксклюзивный автопарк, представляющий лучшие
            мировые бренды. От элегантных седанов до мощных внедорожников,
            каждый автомобиль — воплощение роскоши и безупречного стиля. Мы
            всегда следим за последними технологическими трендами в
            автомобильной индустрии. Наши премиум автомобили оборудованы
            новейшими технологиями, обеспечивая комфорт и безопасность в каждой
            поездке.
          </h2>
          <h2 className="textDescription">
            Наша студия по аренде премиум автомобилей обеспечивает вас полным
            комфортом в каждой детали. Современные студии с обширным набором
            услуг и уникальными возможностями, чтобы каждая поездка стала
            неповторимым событием.
          </h2>
          <a href="https://aforma.kz/">
            <button
              onclick="window.location.href='https://aforma.kz/'"
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
