import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MainIcon from "../images/logo.png"
import Directions from "./Directions"
import Header from "./header"
import "../Style/layout.css"
import "../Style/bootstrap.css"
import "../Style/litle-style.css"
import "../Style/Adaptation.css"
import Footer from "./Footer"
import Messege from "./Messege"

const Layout = ({ children }) => {
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
      {/* Меню сайта и навигация   */}
      <div>
        <div className="hero_area">
          <div className="hero_bg_box">
            <img src={MainIcon} alt=""></img>
          </div>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <section className="slider_section ">
            <div
              id="customCarousel1"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container ">
                    <div className="row">
                      <div className="col-lg-8 col-xl-6 mx-auto ">
                        <div className="iMac:mb-8 iMac:text-9xl font-serif font-bold text-white lg:text-7xl">
                          <h1 className="text">
                            ALTYN <span className="small-space">&nbsp;</span>
                            JULDYZ
                          </h1>
                          <p>
                            Группа компаний в Казахстане, вносящая огромный
                            вклад в развитие разных отраслей страны
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Краткоя информаций  */}
      <div id="color" className="backgroundWhite">
        <div className="newcenter gridFlex marfintopbuttom">
          <h4 className="newColorWhite padding1">
            Наша компания — это объединение талантов, направленных на достижение
            выдающихся результатов, и мы гордимся тем, что каждый день вносим
            свой вклад в развитие индустрии и общества в целом.
          </h4>
          <div className="newFlex2">
            <div id="two" className="otzyv widht-110">
              <h1 className="Newsize">1</h1>
              <p className="newPaddeing">ЛУЧШИЕ В СЕГМЕНТЕ</p>
            </div>
            <div id="One" className="otzyv widht-110">
              <h1 className="Newsize">17</h1>
              <p className="newPaddeing"> ЛЕТ ОПЫТА РАБОТЫ</p>
            </div>
          </div>
        </div>
      </div>
      {/*Направления Компании*/}
      <div className="colorNewBlack">
        <div>
          <h1 className="newColorWhite newTextCenter padding1">
            Направления Компании
          </h1>
        </div>
        <Directions />
      </div>
      <hr />
      {/* Сообщение */}
      <Messege />
      {/* Подвал сайта */}
      <Footer />
    </>
  )
}

export default Layout
