import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import More from "../components/More"
import Header from "../components/header"
import "../Style/layout.css"
import "../Style/bootstrap.css"
import "../Style/litle-style.css"
import Footer from "../components/Footer"
import Manufacturers from "../components/Manufacturers"

const About = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    } 
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="topNewAbout">
        <p className="newcolor newTextAbout newTextAlignAbout padding1">
          О нашей компаний
        </p>
        <div className="newFlexAbout">
          <div className="About60">
            <p className="newcolor newFontSize1">
              <b className="newFontSize2"> Группа компании «ALTYN JULDYZ»</b> —
              это многоотраслевая компания, которая успешно оперирует в
              различных сферах бизнеса в Республике Казахстан. Наша компания
              имеет многолетний опыт и является одним из ведущих предприятий на
              рынке Казахстана.
              <ul className="styleUinew">
                <li>
                  <b className="newFontSize2"> Производство и торговля:</b> Мы
                  гордимся нашей швейно-обувной фабрикой, которая производит
                  высококачественную одежду и обувь, учитывая последние модные
                  тенденции и потребности клиентов. Кроме того, мы также
                  предоставляем широкий ассортимент средств индивидуальной
                  защиты, строительных инструментов и материалов, а также
                  строительное оборудование и спортивные товары для различных
                  отраслей.
                </li>

                <li>
                  <b className="newFontSize2">
                    
                    Строительство и проектирование:
                  </b>
                  Наша компания специализируется в жилищном строительстве и
                  проектировании современных и уникальных жилых объектов. Кроме
                  того, мы предлагаем услуги по аренде складских помещений
                  класса А и С с высоким уровнем безопасности и комфорта для
                  вашего бизнеса.
                </li>
                <li>
                  <b className="newFontSize2">Сельское хозяйство: </b>
                  Мы уделяем особое внимание развитию сельского хозяйства и
                  являемся ответственным разведением КРС «Абердин Ангус», а
                  также МРС «Романовские овцы». Наш интенсивный яблочный сад
                  обеспечивает высокоурожайные и качественные плоды, а в сфере
                  рыбоводства мы стремимся к предоставлению свежей и здоровой
                  рыбы.
                </li>
                <li>
                  <b className="newFontSize2">
                    Школьное оборудование и кабинеты:
                  </b>
                  Интерактивные панели и OPS Моноблоки, ПК, планшеты 3D принтеры
                  Цифровые лаборатории Робототехнические наборы и оборудование
                  Лабораторное оборудование и демонстрационные приборы
                  Программное обеспечение Учебная Учебная мебель
                </li>
                <li>
                  <b className="newFontSize2">Аренда VIP авто: </b>
                  Мы предлагаем услуги аренды VIP автомобилей, чтобы обеспечить
                  вашу комфортабельность и роскошь во время путешествий и
                  деловых встреч.
                </li>
                <li>
                  <b className="newFontSize2">Кинематография: </b>
                  Мы активно развиваем кинематографическую индустрию и участвуем
                  в создании уникальных и качественных кино проектов, которые
                  вдохновляют и развлекают наших зрителей. Группа компании
                  «ALTYN JULDYZ» стремится к постоянному совершенствованию и
                  предоставлению нашим клиентам только самых лучших продуктов и
                  услуг. Мы гордимся нашей командой опытных профессионалов,
                  которые являются ключевым фактором нашего успеха. Наша цель —
                  удовлетворить потребности наших клиентов и принести вклад в
                  процветание общества. Выбирайте Группа компании «ALTYN JULDYZ»
                  — ваш надежный партнер в различных отраслях бизнеса
                </li>
              </ul>
            </p>
          </div>
          <div className="About40">
            <div className="flextImageAbout">
              <div className="newFlex3">
                <div id="One" className="otzyv widht-110">
                  <h1 className="Newsize newCenterCenter ">1</h1>
                  <p className="newPaddeing newCenterCenter">ЛИДЕР НА РЫНКЕ</p>
                </div>
                <div id="two" className="otzyv widht-110">
                  <h1 className="Newsize newCenterCenter">17</h1>
                  <p className="newPaddeing newCenterCenter">
                    ЛЕТ ОПЫТА РАБОТЫ
                  </p>
                </div>
                <div id="three" className="otzyv widht-110">
                  <h1 className="Newsize newCenterCenter">98%</h1>
                  <p className="newPaddeing newCenterCenter">
                    ДОВОЛЬНЫХ КЛИЕНТОВ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Manufacturers />
        <More />
        <iframe 
          className="none1 aboutButtom map2"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.9089680672414!2d76.90620703502101!3d43.27428289391712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836bfaec5f397f%3A0x60dacf2521987fc0!2z0YPQuy4g0JHQvtC60LXQudGF0LDQvdC-0LLQsCAxNTIsINCQ0LvQvNCw0YLRiw!5e0!3m2!1sru!2skz!4v1699512917323!5m2!1sru!2skz"
          allowFullScreen
          loading="lazy"
          title="Карта"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Footer />
    </>
  )
}

export default About
