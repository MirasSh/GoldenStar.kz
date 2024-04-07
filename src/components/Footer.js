import React from "react"
import "../style/Messege.css"
import Location from "../images/free-icon-location-5988775.png"
import logo from "../images/icons/logo-light.svg"
import WatsapMes from "../images/icons/free-icon-whatsapp-3670051.png"
import facebook from "../images/icons/free-icon-facebook-5968764.png"
import instagram from "../images/icons/free-icon-instagram-2111463.png"
import { Link } from "gatsby"

import { useForm } from "@formspree/react"

function ContactForm() {
  const [state] = useForm("xaygzgar")

  if (state.succeeded) {
    return <></>
  }

  return (
    <>
    <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
             (function (m, e, t, r, i, k, a) {
               m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
               m[i].l = 1 * new Date();
               for (var j = 0; j < document.scripts.length; j++) {
                 if (document.scripts[j].src === r) {
                   return;
                 }
               }
               k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
             })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

             ym(89496981, "init", {
               clickmap: true,
               trackLinks: true,
               accurateTrackBounce: true,
               webvisor: true
             });
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/89496981"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      <div className="bloc-bagraund2">
        <div className="widht-messege width15 ">
          <div className="flex-contact">
            <div>
              <img className="widht35img" alt="Логотип" src={logo}></img>
              <a
          href="https://metrika.yandex.ru/stat/?id=89496981&amp;from=informer"
          target="_blank"
          rel="nofollow"
        >
          <img
            src="https://informer.yandex.ru/informer/89496981/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
            style={{ width: '88px', height: '31px', border: '0' }}
            alt="Яндекс.Метрика"
            title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
            className="ym-advanced-informer"
            data-cid="89496981"
            data-lang="ru"
          />
        </a>  
          </div>
            <div className="fontsize35">
              <h2 id="textFooter">Контакты</h2>
              <a className="text-color-messege font18" href="tel:+77273178549">
                + 7 (727) 317-85-49
                <br />
              </a>
              <a className="text-color-messege font18" href="tel:+77024813949">
                + 7 (702) 481-39-49
                <br />
              </a>
              <a className="text-color-messege font18" href="tel:+77028053347">
                + 7 (702) 805-33-47
                <br />
              </a>
              <a className="text-color-messege font18" href="tel:+77751676040">
                + 7 (775) 167-60-40
              </a>
            </div>

            <div className="fontsize35 none11">
              <h2 id="textFooter">Направление</h2>
              <div className="text-color-messege3" href="tel:+77273178549">
                <Link to="/AdministrativeBuilding">
                  Строительство Административных Зданий
                </Link>
              </div>
              <div className="text-color-messege3" href="tel:+77273178549">
                <Link to="/Fabrica">Швейно-обувная фабрика</Link>
              </div>
              <div className="text-color-messege3" href="tel:+77273178549">
                <Link to="/Angus">Разведение КРС "Абердин Ангус"</Link>
              </div>
              <div className="text-color-messege3" href="tel:+77273178549">
                <Link to="/Schoolequipment">
                  Школьное оборудование и кабинеты
                </Link>
              </div>
              <div className="text-color-messege3" href="tel:+77273178549">
                <Link to="/VIPCars">Аренда VIP Авто</Link>
              </div>
              <div className="text-color-messege3" href="tel:+77273178549">
                <Link to="/Cinematography">Кинематография</Link>
              </div>
            </div>
           

            <div className="logoFlex2 ">
              <div className="flexNewLogo">
                <a href="https://www.instagram.com/altyn_juldyz/?hl=en">
                  <img className="logo12" src={instagram} alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/goldenstar.kz/">
                  <img className="logo12" src={facebook} alt="Facebook" />
                </a>
                <a href="https://wa.me/77024813949?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82...">
                  <img className="logo12" src={WatsapMes} alt="WhatsApp" />
                </a>
              </div>

              <h1 className="widht80newlogo">
                <a
                  className="new-class font1rem time"
                  href="mailto:info@goldenstar.kz"
                >
                  info@goldenstar.kz
                </a>
                <br />
                <a
                  className="new-class font1rem time"
                  href="mailto:a.janat@hotmail.com"
                >
                  a.janat@hotmail.com
                </a>
                <br />
                <a
                  className="new-class time"
                  href="https://go.2gis.com/ef5eb4i"
                >
                  Бокейханова 152
                  <img className="location" alt="" src={Location}></img>
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Contacts() {
  return <ContactForm />
}

export default Contacts
