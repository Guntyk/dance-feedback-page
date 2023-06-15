import Hero from "./components/Hero/Hero";
import "./App.css";

export default function App() {
  return (
    <>
      <header className="header">
        <h1 className="main-title">Звернення до танцювальної спільноти</h1>
      </header>
      <main>
        <div className="container">
          <Hero />
          <section>
            <ol className="list">
              <li className="list-mark">
                <span className="mark-title">
                  <span className="text">Спорт</span>
                  <span className="number">01</span>
                </span>
                <hr className="mark-line" />
                <p className="mark-text">
                  Побудова структури, правила змагань. Закриті Чемпіонати та
                  Кубки. Збірні команди областей, регіонів та України вцілому.
                  Закони спорту понад усе!
                </p>
              </li>
              <li className="list-mark">
                <span className="mark-title">
                  <span className="text">Законність діяльності</span>
                  <span className="number">02</span>
                </span>
                <hr className="mark-line" />
                <p className="mark-text">
                  Клуби та змагання мають бути юридичними особами. Всі платежі.
                  в тому числі зарплати, мають бути офіційними і з них мають
                  бути сплачені податки в державу.
                </p>
              </li>
              <li className="list-mark">
                <span className="mark-title">
                  <span className="text">Ексклюзивність</span>
                  <span className="number">03</span>
                </span>
                <hr className="mark-line" />
                <p className="mark-text">
                  Тільки сертифіковані клуби, тренери, судді. Ми відкриті для
                  всіх танцюристів, але сертифікуємо виключно тих спеціалістів,
                  в кому впевнені.
                </p>
              </li>
              <li className="list-mark">
                <span className="mark-title">
                  <span className="text">Єдиний календар</span>
                  <span className="number">04</span>
                </span>
                <hr className="mark-line" />
                <p className="mark-text">
                  Різні статуси змагань. Жорстке правило побудови календаря. Не
                  більше одного змагання конкретного статусу в рік одному
                  організатору. Затверджені терміни між титульними змаганнями.
                  Суворий перелік можливих категорій та класів, похвилинний
                  розклад змагань не менше ніж за добу до його початку.
                  Побудуємо календар з чистого паперу. “Це мої традиційні дати”
                  - не аргумент.
                </p>
              </li>
              <li className="list-mark">
                <div className="mark-title">
                  <div className="text">Серії турнірів</div>
                  <div className="number">05</div>
                </div>
                <hr className="mark-line" />
                <p className="mark-text">
                  Чемпіонати, Першості, Кубки, класифікаційні змагання,
                  атестації - різні серії, в кожній з яких свої правила та
                  принципи. В одному змаганні може бути одночасно декілька
                  турнірів з різних серій, але кожен має суворо відповідати
                  вимогам конкретної серії.
                </p>
              </li>
              <li className="list-mark">
                <div className="mark-title">
                  <div className="text">Суддівство</div>
                  <div className="number">06</div>
                </div>
                <hr className="mark-line" />
                <p className="mark-text">
                  Тільки запрошені судді. Ротація суддів. Аналіз роботи після
                  кожного змагання. Суддівство та тренерство - дві різні роботи.
                  Суддя - це відповідально та почесно. Кількість суддів кожної
                  категорії розраховується з кількості змагань на рік.
                  Суддівська категорія - гарантія роботи. Автоматизація
                  присвоєння суддівських категорій.
                </p>
              </li>
              <li className="list-mark">
                <div className="mark-title">
                  <div className="text">Тренер на змаганнях</div>
                  <div className="number">07</div>
                </div>
                <hr className="mark-line" />
                <p className="mark-text">
                  Окрема особа, яка несе відповідальність за перелік питань
                  описаних в окремому положенні. Робота тренера має бути
                  оплаченою.
                </p>
              </li>
              <li className="list-mark">
                <div className="mark-title">
                  <div className="text">Танцюристи</div>
                  <div className="number">08</div>
                </div>
                <hr className="mark-line" />
                <p className="mark-text">
                  Правила та автоматизація переходу з класу в клас та для “Перші
                  кроки”, “Дебют”, “Школа”. Кожен танцюрист на змаганнях приймає
                  участь виключно в одному класі, але може в своїй та наступній
                  віковій категорії.
                </p>
              </li>
            </ol>
          </section>
        </div>
      </main>
    </>
  );
}
