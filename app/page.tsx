export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="badge">Вакансия с проживанием</div>

        <h1>Водитель Яндекс Такси на автомобиле компании</h1>

        <p className="salary">от 2 400 до 3 500 Br в месяц</p>

        <p className="subtitle">
          Работа в Санкт-Петербурге. Вахта от 30 смен. Проживание и проезд
          бесплатно.
        </p>

        <div className="buttons">
          <a href="#form" className="btn primary">Оставить заявку</a>
          <a href="tel:+375XXXXXXXXX" className="btn secondary">Позвонить</a>
        </div>
      </section>

      <section className="card">
        <h2>Коротко об условиях</h2>

        <div className="grid">
          <div><b>Доход</b><span>от 2 400 до 3 500 Br</span></div>
          <div><b>График</b><span>6/1, смены 10–12 часов</span></div>
          <div><b>Вахта</b><span>от 30 смен</span></div>
          <div><b>Опыт</b><span>не требуется</span></div>
        </div>
      </section>

      <section className="card">
        <h2>Что мы предлагаем</h2>

        <ul className="list">
          <li>✅ Работа на новых автомобилях Geely Coolray 2023</li>
          <li>✅ Работа в Санкт-Петербурге</li>
          <li>✅ Бесплатный проезд туда и обратно</li>
          <li>✅ Бесплатное проживание в комфортной квартире</li>
          <li>✅ Без вложений для начала работы</li>
          <li>✅ Ремонт, ТО, страховка и резина — за счёт компании</li>
          <li>✅ Смартфон, связь и интернет — за счёт компании</li>
          <li>✅ Обучение и поддержка 24/7</li>
          <li>✅ Выплаты без задержек</li>
        </ul>
      </section>

      <section className="card accent">
        <h2>Гарантированный доход</h2>
        <p>
          Минимальный гарантированный доход — <b>от 2 200 Br в месяц</b>.
          В среднем наши водители получают <b>около 3 000 Br в месяц</b>.
        </p>
      </section>

      <section className="card">
        <h2>Требования</h2>

        <ul className="list">
          <li>✅ Права категории B</li>
          <li>✅ Стаж вождения от 3 лет</li>
          <li>✅ Ответственность и аккуратное вождение</li>
          <li>✅ Опыт работы в такси будет преимуществом</li>
        </ul>
      </section>

      <section className="form" id="form">
        <h2>Оставьте заявку</h2>
        <p>Мы свяжемся с вами и подробно расскажем условия.</p>

        <form>
          <input type="text" placeholder="Ваше имя" />
          <input type="tel" placeholder="Ваш телефон" />
          <select>
            <option>Есть права категории B?</option>
            <option>Да</option>
            <option>Нет</option>
          </select>
          <button type="submit">Отправить заявку</button>
        </form>

        <p className="small">
          Или напишите нам в WhatsApp / Telegram: <b>+375 XX XXX-XX-XX</b>
        </p>
      </section>
    </main>
  );
}