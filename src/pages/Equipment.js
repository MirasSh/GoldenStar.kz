import React from "react"
import Header from "../components/header"
import img2 from "../images/snapedit_1699681524244.png"
import Footer from "../components/Footer"

export default function Equipment() {
  return (
    <div>
      <div>
        <Header />
        <div className="topNewAbout">
          <p className="newcolor newTextAbout newTextAlignAbout padding1">
            Строительное Оборудование
          </p>
        </div>
        <div className="newFlex-blok1" style={{ position: "relative" }}>
          <div>
            <h1 className="ChapterText padding5">
              Продажа Строительного Оборудования
            </h1>
            <h2 className="textDescription">
              Группа компаний "ALTYN JULDYZ" специализируется на предоставлении
              широкого ассортимента строительного оборудования, применяемого в
              различных областях деятельности. Для каждой из сфер характерны
              свои индивидуальные особенности, поэтому наша техника
              предоставляет разнообразные решения.
            </h2>
            <h2 className="textDescription">
              В области дорожных работ мы предлагаем виброкатки, трамбующую
              технику, нарезчики швов и другие асфальтукладочные машины. А в
              секторе хозяйственного строительного оборудования востребованы
              различные тракторы, снегоуборочные устройства, мотокультиваторы и
              прочие устройства. Наша продукция создана для удовлетворения
              уникальных потребностей каждой отрасли, обеспечивая эффективные и
              надежные решения для успешного выполнения задач.
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
