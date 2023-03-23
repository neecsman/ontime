import { HashLink as Link } from "react-router-hash-link";

import { Button } from "../../Components";
import { Feedback } from "../../Layouts";

import style from "./main.module.scss";

import main from "../../img/main.png";
import map from "../../img/map.png";
import cash from "../../img/cash.png";
import card from "../../img/card.png";
import payment from "../../img/payment.png";

import clothes from "../../img/delivery/clothes.png";

const Home = () => {
  return (
    <>
      <main className={style.main}>
        <div className={style.main__container}>
          <div className={style.main__container_left}>
            <h1>Курьерская доставка</h1>
            <p>
              Всегда быстрые сроки, надежность, низкие тарифы и индивидуальный
              подход к каждому.
            </p>
            <Link to="/create-order">
              <Button xl>Заказать доставку</Button>
            </Link>
          </div>
          <div className={style.main__container_right}>
            <img src={main} alt="main gb" />
          </div>
        </div>
      </main>
      <section id="advantages" className={style.advantages}>
        <h2 className={style.advantages_title}>Преимущества</h2>
        <div className={style.advantages_block}>
          <div>
            <h3>30 минут</h3>
            <p>Среднее время доставки по городу</p>
          </div>
          <div>
            <h3>5 минут</h3>
            <p>Скорость обработки заказа</p>
          </div>
          <div>
            <h3>от 400 ₽</h3>
            <p>Стоимость курьерской доставки по городу</p>
          </div>
        </div>
      </section>
      <section id="region" className={style.region}>
        <h2 className="text-white text-bold text-5xl">Регионы присутствия</h2>
        <div className={style.region_map}>
          <img src={map} alt="Карта" />
        </div>
      </section>
      <section id="how" className={style.how}>
        <div className="bg-white p-20 rounded-xl">
          <h2 className="mb-10 text-black font-bold text-5xl">
            Как работает сервис?
          </h2>
          <div className={style.how_container}>
            <div className={style.how_container_item}>
              <h3>Заявка</h3>
              <p>Создайте заказ через сайт или по номеру телефона</p>
            </div>
            <div className={style.how_container_item}>
              <h3>Оформление</h3>
              <p>
                В течение 2 минут вы получите расчет и уведомление о назначении
                курьера
              </p>
            </div>
            <div className={style.how_container_item}>
              <h3>Доставка</h3>
              <p>Курьер заберет заказ и оперативно доставит получателю</p>
            </div>
            <div className={style.how_container_item}>
              <h3>Оплата</h3>
              <p>Произведите оплату за доставку любым удобным способом</p>
            </div>
          </div>
        </div>
      </section>

      <section id="tarifs" className={style.tarifs}>
        <h2>Тарифы</h2>
        <div className={style.tarifs_container}>
          <div className={style.tarifs_container_item}>
            <div className={style.tarifs_container_item_header}>
              <h3>Стандарт</h3>
            </div>
            <div className={style.tarifs_container_item_body}>
              <ul>
                <li>В пределах города</li>
                <li>Небольшие посылки</li>
                <li>
                  Ночная доставка <br /> не осуществляется
                </li>
              </ul>
              <h3 className="text-3xl font-medium text-center">от 400 ₽</h3>
              <Link to="/create-order">
                <Button tarifs>Заказать доставку</Button>
              </Link>
            </div>
          </div>
          <div className={style.tarifs_container_item}>
            <div className={style.tarifs_container_item_header}>
              <h3>Премиум</h3>
            </div>
            <div className={style.tarifs_container_item_body}>
              <ul>
                <li>В пределах города</li>
                <li>Ночная доставка + 90 ₽</li>
                <li>
                  Перевоз крупногабаритных <br /> объектов + 400 ₽
                </li>
              </ul>
              <h3 className="text-3xl font-medium text-center">от 800 ₽</h3>
              <Link to="/create-order">
                <Button tarifs>Заказать доставку</Button>
              </Link>
            </div>
          </div>
          <div className={style.tarifs_container_item}>
            <div className={style.tarifs_container_item_header}>
              <h3>VIP</h3>
            </div>
            <div className={style.tarifs_container_item_body}>
              <ul>
                <li>В пределах города</li>
                <li>Ночная доставка + 90 ₽</li>
                <li>
                  Перевоз крупногабаритных <br /> объектов + 600 ₽
                </li>
              </ul>
              <h3 className="text-3xl font-medium text-center">от 1600 ₽</h3>
              <Link to="/create-order">
                <Button tarifs>Заказать доставку</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={style.payments}>
        <div className={style.payments_container}>
          <div className={style.payments_container_left}>
            <img src={payment} alt="Payment" />
          </div>
          <div className={style.payments_container_right}>
            <h2>Способы оплаты</h2>
            <p>
              Выберите удобный для себя способ оплаты и <br /> оплатите доставку
              при передачи груза курьеру.
            </p>
            <div className={style.payments_container_right_pay}>
              <div>
                <img src={cash} alt="Наличными" />
                <span>Наличными</span>
              </div>
              <div>
                <img src={card} alt="Картой" />
                <span>Картой</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="delivery" className={style.delivery}>
        <h2>Виды доставки</h2>
        <div className={style.delivery_container}>
          <div className={style.delivery_container_item}>
            <div className={style.delivery_container_item_photo}>
              <img src={clothes} alt="Одежда" />
            </div>
            <div className={style.delivery_container_item_desc}>
              <h3>Одежда</h3>
              <p>Доставка одежды из интернет-магазинов</p>
            </div>
          </div>
        </div>
      </section>
      <Feedback />
    </>
  );
};

export default Home;
