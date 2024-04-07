import React, { useState } from "react"
import { Link } from "gatsby"

import img1 from "../images/15.png"
import img16 from "../images/2.jpg"
import img2 from "../images/Svea.png"
import img3 from "../images/Zahita.jpg"
import img4 from "../images/Stroi-mat.jpg"
import img5 from "../images/snapedit_1699681524244.png"
import img6 from "../images/256.jpg"
import img7 from "../images/angus.jpg"
import img8 from "../images/Horses.jpg"
import img9 from "../images/19741925018_97cb154c0d_b.jpg"
import img10 from "../images/Mal3.jpg"
import img11 from "../images/peugeot-partner-load-01.jpg"
import img12 from "../images/vip.png"
import img13 from "../images/1582053988_17-p-dizain-kabinetov-nachalnikh-klassov-53.jpg"
import img14 from "../images/Sport-tovar.jpg"
import img15 from "../images/1674910661_top-fon-com-p-fon-dlya-prezentatsii-po-kinoiskusstvu-118.jpg"

import "../Style/newStyle.css"

const Directions = () => {
  const [activeMovieId1, setActiveMovieId1] = useState(null)
  const [activeMovieId2, setActiveMovieId2] = useState(null)
  const [activeMovieId3, setActiveMovieId3] = useState(null)
  const [activeMovieId4, setActiveMovieId4] = useState(null)

  const movies = [
    {
      id: 5,
      Chapter: "GSTOWER",
      title:
        "GSTOWER — элегантный многоэтажный гостиничный комплекс, где каждый этаж предлагает великолепные виды, выдающийся дизайн и внимание к деталям. Насладитесь комфортом и роскошью в каждом номере, создавая неповторимый опыт для наших гостей.",
      image: img16,
      buttontext: "Подробнее",
      link: "/AdministrativeBuilding",
    },
    {
      id: 1,
      Chapter: "COMFORT JAGALAU",
      title:
        "TOO 'GS BUILDING' — это не просто строительная компания. Это сообщество талантливых профессионалов, объединенных общей страстью к строительству и стремлением к совершенству, которая входит в группу компании «ALTYN JULDYZ».",
      image: img1,
      buttontext: "Подробнее",
      link: "/Construction",
    },
    {
      id: 2,
      Chapter: "Швейно-обувная фабрика",
      title:
        "Мы разрабатываем собственные уникальные модели, инновационные ткани, пропитки, красители, технологии производства. ",
      image: img2,
      buttontext: "Подробнее",
      title2:
        "Наша продукция служит дольше и повышает производительность труда. Производственная мощность насчитывает до 300 тысяч комплектов спецодежды в год",
      link: "/Fabrica",
    },
    {
      id: 3,
      Chapter: "Средства Индивидуальной Защиты",
      title:
        "Группа компании «ALTYN JULDYZ» также специализируется по производству строительных  высоко качественных  технологических и механических инструментов.",
      image: img3,
      buttontext: "Подробнее",
      title2:
        "Высокое качество от популярного бренда «GS» .Мы предлагаем вам большой ассортимент, где вы найдете все что вам нужно. ",
      link: "/Personal-protective",
    },
  ]
  const movies2 = [
    {
      id: 5,
      Chapter: "Строительные Инструменты и Материалы",
      title:
        "Наша компания — это объединение талантов, направленных на достижение выдающихся результатов.",
      image: img4,
      buttontext: "Подробнее",
      title2:
        "Мы гордимся тем, что каждый день вносим свой вклад в развитие индустрии и общества в целом",
      link: "/Tools",
    },
    {
      id: 1,
      Chapter: "Строительное оборудование",
      title:
        "Группа компании «ALTYN JULDYZ» занимается продажей строительного оборудования применяемых в самых различных областях деятельности.",
      image: img5,
      buttontext: "Подробнее",
      link: "/Equipment",
    },
    {
      id: 2,
      Chapter: "Интенсивный яблочный сад",
      title:
        "Один из  наших  проектов для улучшения нашей страны  это растениеводство, а именно интенсивные сады.",
      image: img6,
      buttontext: "Подробнее",
      title2:
        "Интенсивные технологии позволяют получать максимальный урожай на ограниченной площади. ",
      link: "/Orchard",
    },
    {
      id: 3,
      Chapter: "Разведение КРС 'Абердин Ангус' (племенной)",
      title:
        "На ферме «LAKE FARM» реализуется часть межрегионального проекта компании по выращиванию крупного рогатого скота специализированной породы Абердин — ангус.",
      image: img7,
      buttontext: "Подробнее",
      title2:
        "Постоянное улучшение условий содержания, ветеринарный контроль на всех этапах развития животного и планирование прироста поголовья ведут к снижению производственных издержек и работают на оптимизацию себестоимости конечного продукта – мраморной говядины. ",
      link: "/Angus",
    },
  ]
  const movies3 = [
    {
      id: 5,
      Chapter: "Коневодство",
      title:
        "Конный завод «ALTYN JULDYZ» – специализируется на разведении лошадей древнейшей Ахалтекинской породы.",
      image: img8,
      buttontext: "Подробнее",
      title2:
        "Ахалтекинская лошадь древнейшая чистокровная верховая порода, которая была выведена около 5 000 лет назад. Ахалтекинцы выделяются эффектным внешним видом и имеют достаточно крупный рост. ",
      link: "/BreedingHorse",
    },
    {
      id: 1,
      Chapter: "Рыбоводство",
      title:
        "«FRESH FISH» — это проект по разведению форели который входит в группу компании «ALTYN JULDYZ». Производственная мощность на наших хозяйствах составляет 3000 тонн форели в год.",
      image: img9,
      buttontext: "Подробнее",
      title2:
        "Форель — рыба семейства лососевых. Ее природная среда обитания — горные реки. Она нуждается в чистой проточной воде, в любой бочке или первом попавшемся пруду расти не будет. ",
      link: "/Farmingfish",
    },
    {
      id: 2,
      Chapter: "Разведение МРС 'Романовские Овцы'",
      title:
        "Наша Фазенда была построена по всем стандартам мирового уровня , что бы наши овцы жили в комфорте тепле и уюте! Романовские овцы содержаться в комфортабельных павильонах. Есть большой манеж для прогулки овец.",
      image: img10,
      buttontext: "Подробнее",
      title2:
        "Наша фазенда по разведению «Романовских овец» одно из самых крупных хозяйств в Казахстане по разведению Романовской породы овец. На данный момент у нас более 3000 овец Романовской породы, которые соответствуют всем стандартам мирового уровня! ",
      link: "/RomanovSheep",
    },
    {
      id: 3,
      Chapter: "Аренда Складских Помещений Класса «А» и «Б»",
      title:
        "Компания «ALTYN JULDYZ» предоставляет в аренду складские помещения «В и С» класса общей площадью 4000 кв. м, полностью асфальтированный парк, высота потолков 8м, офисные кабинеты при складах общей площадью- 500 м2.",
      image: img11,
      buttontext: "Подробнее",
      link: "/Rentalvisits",
    },
  ]
  const movies4 = [
    {
      id: 5,
      Chapter: "Аренда VIP Авто",
      title:
        "Наша компания предоставляет широкий спектр роскошных автомобилей в аренду для клиентов, ценящих комфорт, стиль и первоклассное обслуживание.",
      image: img12,
      buttontext: "Подробнее",
      title2:
        "Мы ориентированы на удовлетворение потребностей представителей высшего класса общества, корпоративных клиентов и тех, кто желает добавить особый шарм в свои события.",
      link: "/VIPCars",
    },
    {
      id: 1,
      Chapter: "Школьное оборудование и кабинеты",
      title:
        "GSMektep — занимается поставкой инновационных товаров для образовательных учреждений.",
      image: img13,
      buttontext: "Подробнее",
      title2:
        "Мы продолжаем содействовать развитию нашей страны, предоставляя высококачественные решения для образовательных учреждений.",
      link: "/Schoolequipment",
    },
    {
      id: 2,
      Chapter: "Спортивные Товары",
      title:
        "«GS SPORT» магазин спортивных товаров. Проект входит в группу компании «ALTYN JULDYZ» и имеет большой ассортимент в выборе товаров для спорта и дома.",
      image: img14,
      buttontext: "Подробнее",
      title2:
        "Наш спорт магазин для всей семьи! Все для спорта и активного отдыха – от самых простых спорт товаров до технологического оборудования последнего поколения.",
      link: "/Sports",
    },
    {
      id: 3,
      Chapter: "Кинематография",
      title:
        "Наша компания занимается съемкой фильмов, сериалов и клипов. Мы работаем с настоящими профессионалами своего дела с многолетним опытом видео съемки. ",
      image: img15,
      buttontext: "Подробнее",
      title2:
        "Как студия по производству видео, мы располагаем обширной студией с полным набором световых, видео и монтажных возможностей, зелеными экранами и разнообразным реквизитом, который может воспроизводить различные обстановки — от розничных магазинов до офисных помещений.",
      link: "/Cinematography",
    },
  ]

  const handleMovieClick1 = movieId => {
    if (activeMovieId1) {
      setActiveMovieId1(null)
    }
    setActiveMovieId1(activeMovieId1 === movieId ? null : movieId)
  }

  const handleMovieClick2 = movieId => {
    if (activeMovieId2) {
      setActiveMovieId2(null)
    }
    setActiveMovieId2(activeMovieId2 === movieId ? null : movieId)
  }

  const handleMovieClick3 = movieId => {
    if (activeMovieId3) {
      setActiveMovieId3(null)
    }
    setActiveMovieId3(activeMovieId3 === movieId ? null : movieId)
  }
  const handleMovieClick4 = movieId => {
    if (activeMovieId4) {
      setActiveMovieId4(null)
    }
    setActiveMovieId4(activeMovieId4 === movieId ? null : movieId)
  }

  return (
    <div className="newcenter">
      {/* Первый блок */}
      <div className="gridNew">
        {movies.map(movie => (
          <div
            className="newBlok"
            key={movie.id}
            onClick={() => handleMovieClick1(movie.id)}
            style={{ cursor: "pointer", padding: "5px", margin: "0px" }}
          >
            <img
              className="CompantStyl"
              src={movie.image}
              alt={movie.title}
              style={{
                border:
                  activeMovieId1 === movie.id ? "2px solid white" : "none",
              }}
            />
          </div>
        ))}
      </div>
      {activeMovieId1 && (
        <div className="newFlex-blok1" style={{ position: "relative" }}>
          <div className="TopMinus">
            <h1 className="ChapterText padding5">
              {movies.find(movie => movie.id === activeMovieId1)?.Chapter}
            </h1>
            <h2 className="textDescription">
              {movies.find(movie => movie.id === activeMovieId1)?.title}
            </h2>
            <h2 className="textDescription">
              {movies.find(movie => movie.id === activeMovieId1)?.title2}
            </h2>
            <Link to={movies.find(movie => movie.id === activeMovieId1)?.link}>
              <button className="newpositionRel newButton">
                {movies.find(movie => movie.id === activeMovieId1)?.buttontext}
              </button>
            </Link>
          </div>
          <div className="image-overlay"></div>
          <div className="gradientOverlay"></div>
          <img
            className="minHeight2"
            src={movies.find(movie => movie.id === activeMovieId1)?.image}
            alt={movies.find(movie => movie.id === activeMovieId1)?.title}
          />
        </div>
      )}

      {/* Второй блок */}
      <div className="gridNew">
        {movies2.map(movie2 => (
          <div
            className="newBlok"
            key={movie2.id}
            onClick={() => handleMovieClick2(movie2.id)}
            style={{ cursor: "pointer", padding: "5px", margin: "0px" }}
          >
            <img
              className="CompantStyl"
              src={movie2.image}
              alt={movie2.title}
              style={{
                border:
                  activeMovieId2 === movie2.id ? "2px solid white" : "none",
              }}
            />
          </div>
        ))}
      </div>

      {activeMovieId2 && (
        <div className="newFlex-blok1" style={{ position: "relative" }}>
          <div className="TopMinus">
            <h1 className="ChapterText padding5">
              {movies2.find(movie => movie.id === activeMovieId2)?.Chapter}
            </h1>
            <h2 className="textDescription">
              {movies2.find(movie => movie.id === activeMovieId2)?.title}
            </h2>
            <h2 className="textDescription">
              {movies2.find(movie => movie.id === activeMovieId2)?.title2}
            </h2>

            <Link to={movies2.find(movie => movie.id === activeMovieId2)?.link}>
              <button className="newpositionRel newButton">
                {movies2.find(movie => movie.id === activeMovieId2)?.buttontext}
              </button>
            </Link>
          </div>
          <div className="image-overlay"></div>
          <div className="gradientOverlay"></div>
          <img
            className="minHeight2"
            src={movies2.find(movie => movie.id === activeMovieId2)?.image}
            alt={movies2.find(movie => movie.id === activeMovieId2)?.title}
          />
        </div>
      )}

      {/* Третий блок */}
      <div className="gridNew">
        {movies3.map(movie3 => (
          <div
            className="newBlok"
            key={movie3.id}
            onClick={() => handleMovieClick3(movie3.id)}
            style={{ cursor: "pointer", padding: "5px", margin: "0px" }}
          >
            <img
              className="CompantStyl"
              src={movie3.image}
              alt={movie3.title}
              style={{
                border:
                  activeMovieId3 === movie3.id ? "2px solid white" : "none",
              }}
            />
          </div>
        ))}
      </div>

      {activeMovieId3 && (
        <div className="newFlex-blok1" style={{ position: "relative" }}>
          <div className="TopMinus">
            <h1 className="ChapterText padding5">
              {movies3.find(movie => movie.id === activeMovieId3)?.Chapter}
            </h1>
            <h2 className="textDescription">
              {movies3.find(movie => movie.id === activeMovieId3)?.title}
            </h2>
            <h2 className="textDescription">
              {movies3.find(movie => movie.id === activeMovieId3)?.title2}
            </h2>
            <Link to={movies3.find(movie => movie.id === activeMovieId3)?.link}>
              <button className="newpositionRel newButton">
                {movies3.find(movie => movie.id === activeMovieId3)?.buttontext}
              </button>
            </Link>
          </div>
          <div className="image-overlay"></div>
          <div className="gradientOverlay"></div>
          <img
            className="minHeight2"
            src={movies3.find(movie => movie.id === activeMovieId3)?.image}
            alt={movies3.find(movie => movie.id === activeMovieId3)?.title}
          />
        </div>
      )}

      {/* Четвертый блок */}
      <div className="gridNew ">
        {movies4.map(movie4 => (
          <div
            className="newBlok"
            key={movie4.id}
            onClick={() => handleMovieClick4(movie4.id)}
            style={{ cursor: "pointer", padding: "5px", margin: "0px" }}
          >
            <img
              className="CompantStyl"
              src={movie4.image}
              alt={movie4.title}
              style={{
                border:
                  activeMovieId4 === movie4.id ? "2px solid white" : "none",
              }}
            />
          </div>
        ))}
      </div>
      {activeMovieId4 && (
        <div className="newFlex-blok1" style={{ position: "relative" }}>
          <div className="TopMinus">
            <h1 className="ChapterText padding5">
              {movies4.find(movie => movie.id === activeMovieId4)?.Chapter}
            </h1>
            <h2 className="textDescription">
              {movies4.find(movie => movie.id === activeMovieId4)?.title}
            </h2>
            <h2 className="textDescription">
              {movies4.find(movie => movie.id === activeMovieId4)?.title2}
            </h2>

            <Link to={movies4.find(movie => movie.id === activeMovieId4)?.link}>
              <button className="newpositionRel newButton">
                {movies4.find(movie => movie.id === activeMovieId4)?.buttontext}
              </button>
            </Link>
          </div>
          <div className="image-overlay"></div>
          <div className="gradientOverlay"></div>
          <img
            className="minHeight2"
            src={movies4.find(movie => movie.id === activeMovieId4)?.image}
            alt={movies4.find(movie => movie.id === activeMovieId4)?.title}
          />
        </div>
      )}
    </div>
  )
}

export default Directions
