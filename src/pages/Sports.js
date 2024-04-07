import React from "react"
import Header from "../components/header"
import img2 from "../images/Sport-tovar.jpg"
import Footer from "../components/Footer"

export default function Sports() {
  return (
    <div>
      <div>
        <Header />
        <div className="topNewAbout">
          <p className="newcolor newTextAbout newTextAlignAbout padding1">
            Спортивные Товары
          </p>
        </div>
        <div className="newFlex-blok1" style={{ position: "relative" }}>
          <div>
            <h1 className="ChapterText padding5">Спортивные Товары</h1>
            <h2 className="textDescription">
              "GS SPORT" — магазин спортивных товаров, являющийся частью группы
              компаний "ALTYN JULDYZ", предлагает разнообразный ассортимент
              товаров для спорта и дома. Наш спортивный магазин ориентирован на
              всю семью! Здесь вы найдете все необходимое для занятий спортом и
              активного отдыха — от простых спортивных товаров до передового
              технологического оборудования последнего поколения.
            </h2>
            <h2 className="textDescription">
              Высокое качество продукции от известного бренда GS гарантирует
              вашему выбору надежность. Мы предлагаем разнообразие спортивных
              товаров, представленных в каталоге с детальными описаниями и
              фотографиями. В нашем ассортименте вы найдете велосипеды для
              детей, роликовые коньки, кимоно для дзюдо и многое другое. Кроме
              того, у нас есть мебель для вашего дома, зонты и шатры — все, что
              может сделать ваш активный отдых еще более комфортным.
            </h2>
            <a href="http://gssport.kz/">
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
