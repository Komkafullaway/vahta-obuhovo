export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="overlay" />

        <header className="header">
          <div className="logo">VAHTA SPB</div>
          <a className="headerBtn" href="#form">Оставить заявку</a>
        </header>

        <div className="heroContent">
          <div className="badge">Для граждан Беларуси</div>

          <h1>
            Работа водителем такси
            <br />
            в Санкт-Петербурге
          </h1>

          <p className="heroSalary">
            от 2 400 до 3 500 BYN в месяц
          </p>

          <p className="heroText">
            Geely Coolray 2023 с первого дня. Подготовка к тарифу Бизнес
            на Hongqi H5 2024. Проживание, проезд, автомобиль и поддержка —
            за счёт компании.
          </p>

          <div className="heroActions">
            <a href="#form" className="btn primary">Получить консультацию</a>
            <a href="tel:+375XXXXXXXXX" className="btn secondary">Позвонить</a>
          </div>

          <div className="heroStats">
            <div><b>0 BYN</b><span>вложений на старт</span></div>
            <div><b>24/7</b><span>поддержка водителей</span></div>
            <div><b>30+</b><span>смен вахта</span></div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="sectionHead">
          <span>Почему это предложение сильнее обычной вакансии</span>
          <h2>Вы не просто приезжаете работать — мы сопровождаем вас на каждом этапе</h2>
        </div>

        <div className="benefits">
          <div>Бесплатное проживание</div>
          <div>Бесплатный проезд</div>
          <div>Автомобиль компании</div>
          <div>Без аренды и залогов</div>
          <div>Связь и интернет</div>
          <div>Обучение Яндекс Такси</div>
          <div>Поддержка 24/7</div>
          <div>Выход на линию</div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <span>Автомобили компании</span>
          <h2>Старт на Geely Coolray 2023 и рост до тарифа Бизнес</h2>
        </div>

        <div className="cars">
          <div className="carCard">
            <div className="carImage geely" />
            <div className="carContent">
              <p className="label">Старт работы</p>
              <h3>Geely Coolray 2023</h3>
              <p>
                Современный комфортный кроссовер для стабильной работы
                в Санкт-Петербурге.
              </p>
              <ul>
                <li>Быстрый старт после обучения</li>
                <li>Автомобиль компании</li>
                <li>ТО, страховка и резина за счёт компании</li>
              </ul>
            </div>
          </div>

          <div className="carCard premium">
            <div className="carImage hongqi" />
            <div className="carContent">
              <p className="label">Рост дохода</p>
              <h3>Hongqi H5 2024</h3>
              <p>
                Подготовка водителей к тарифу Бизнес: стандарты сервиса,
                качество поездок и более высокий уровень клиентов.
              </p>
              <ul>
                <li>Обучение под тариф Бизнес</li>
                <li>Повышение класса работы</li>
                <li>Возможность выйти на больший доход</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section housing">
        <div className="housingBox">
          <div>
            <span>Проживание</span>
            <h2>Новый микрорайон Новосаратовка, улица Первых</h2>
            <p>
              Предоставляем жильё в новом районе рядом с Санкт-Петербургом.
              Вам не нужно искать квартиру, платить залог или решать бытовые
              вопросы самостоятельно.
            </p>
          </div>

          <div className="housingList">
            <div>Комфортное проживание</div>
            <div>Заселение после приезда</div>
            <div>Без залога за квартиру</div>
            <div>Поддержка на месте</div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="sectionHead">
          <span>Доход</span>
          <h2>Понятные цифры до выезда в Санкт-Петербург</h2>
        </div>

        <div className="money">
          <div><b>2 200 BYN</b><span>гарантированный минимум</span></div>
          <div><b>3 000 BYN</b><span>средний доход водителей</span></div>
          <div><b>3 500+ BYN</b><span>потенциал опытных водителей</span></div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <span>Как начать</span>
          <h2>Простой путь от заявки до первой смены</h2>
        </div>

        <div className="steps">
          <div><b>01</b><span>Оставляете заявку</span></div>
          <div><b>02</b><span>Получаете консультацию</span></div>
          <div><b>03</b><span>Проверяем документы</span></div>
          <div><b>04</b><span>Организуем выезд</span></div>
          <div><b>05</b><span>Заселяем</span></div>
          <div><b>06</b><span>Обучаем и выводим на линию</span></div>
        </div>
      </section>

      <section className="final" id="form">
        <div className="finalText">
          <span>Заявка</span>
          <h2>Оставьте заявку на консультацию</h2>
          <p>
            Мы свяжемся с вами, расскажем условия, проверим документы
            и объясним, как пройти путь до первой смены в Санкт-Петербурге.
          </p>
        </div>

        <form className="form">
          <input type="text" placeholder="Ваше имя" />
          <input type="tel" placeholder="Телефон / WhatsApp" />
          <input type="text" placeholder="Город в Беларуси" />

          <select>
            <option>Есть права категории B?</option>
            <option>Да</option>
            <option>Нет</option>
          </select>

          <select>
            <option>Стаж вождения</option>
            <option>До 3 лет</option>
            <option>От 3 до 5 лет</option>
            <option>Более 5 лет</option>
          </select>

          <button type="submit">Получить консультацию</button>

          <p>
            Нажимая кнопку, вы отправляете заявку на обратную связь.
          </p>
        </form>
      </section>

      <a className="whatsapp" href="https://wa.me/375XXXXXXXXX">
        WhatsApp
      </a>
    </main>
  );
}