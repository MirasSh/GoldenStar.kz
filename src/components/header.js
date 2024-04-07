import React, { useState } from "react"
import { Link } from "gatsby"
import MainIcon from "../images/logo-light.svg"

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link to="/" className="navbar-brand">
            <img src={MainIcon} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            onClick={toggleMenu}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "active" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Главная
                </Link>
              </li>
              <li className="nav-item">
                <div className="dropdown5">
                  <span className="dropbtn5">
                    Направления
                    <i className="fa fa-caret-down"></i>
                  </span>
                  <div className="dropdown-content5">
                    <ul className="menu">
                      <li>
                        <a href="#">Производство и Торговля</a>
                        <ul>
                          <li>
                            <Link className="" to="/Fabrica">
                              Швейно-обувная Фабрика
                            </Link>
                          </li>
                          <li>
                            <Link className="" to="/Personal-protective">
                              Средства Индивидуальной Защиты
                            </Link>
                          </li>
                          <li>
                            <Link className="" to="/Tools">
                              Строительные Инструменты и Материалы
                            </Link>
                          </li>
                          <li>
                            <Link className="" to="/Equipment">
                              Строительное Оборудование
                            </Link>
                          </li>
                          <li>
                            <Link className="" to="/Sports">
                              Спортивные Товары
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="listNone">
                        <a href="#">Строительство и Проектирование</a>
                        <ul>
                          <li>
                            <Link className="" to="/AdministrativeBuilding">
                              Строительство Административных Зданий
                            </Link>
                          </li>
                          <li>
                            <Link className="" to="/Construction">
                              Жилищное Строительство
                            </Link>
                          </li>
                          <li>
                            <Link className="" to="/Rentalvisits">
                              Аренда Складских Помещений Класса А и С
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* Начинаем  */}
                      <li className="listNone">
                        <a href="#">Сельское Хозяйство</a>
                        <ul>
                          <li>
                            <Link className="" to="/Angus">
                              Разведение КРС "Абердин Ангус" (племенной)
                            </Link>
                          </li>
                          <li>
                            <Link className="" to="/Orchard">
                              Интенсивный Яблочный Сад
                            </Link>
                          </li>
                          <li>
                            <Link className="" to="/Farmingfish">
                              Рыбоводство
                            </Link>
                          </li>
                          <li>
                            <Link className="" to="/RomanovSheep">
                              Разведение МРС "Романовские Овцы"
                            </Link>
                          </li>
                          <li>
                            <Link className="" to="/BreedingHorse">
                              Коневодство
                            </Link>
                          </li>
                          <li>
                            <Link className="" to="/Fertilizer">
                              Органическое Удобрение Биогумус (Вермикост)
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* Конец */}
                    </ul>
                    <Link className="" to="/Schoolequipment">
                      Школьное оборудование и кабинеты
                    </Link>
                    <Link className="" to="/VIPCars">
                      Аренда VIP Авто
                    </Link>
                    <Link className="" to="/Cinematography">
                      Кинематография
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About/">
                  О компании
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact/">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
