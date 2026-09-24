import "./SezarPolicy.css";

export default function SezarPolicy() {
  return (
    <section className="sezar-policy" aria-labelledby="sezar-policy-title">
      <div className="sezar-policy__container">
        <div className="sezar-policy__header">
          <span className="sezar-policy__eyebrow">SEZAR / MANIFESTO</span>
          <span className="sezar-policy__line" aria-hidden="true" />
        </div>

        <div className="sezar-policy__intro">
          <div className="sezar-policy__title-row">
            <h2 id="sezar-policy-title">خط‌مشی ما</h2>
            <span className="sezar-policy__dot" aria-hidden="true" />
          </div>

          <p className="sezar-policy__description">
            در Sezar، طراحی فقط ساختن یک ظاهر زیبا نیست؛
            هر پروژه باید ساده، دقیق و قابل اعتماد باشد.
            ما تلاش می‌کنیم هر چیزی که می‌سازیم، هم برای مخاطب تجربه خوبی ایجاد کند
            و هم برای صاحب کسب‌وکار ارزش واقعی داشته باشد.
          </p>
        </div>

        <div className="sezar-policy__principles">
          <article className="sezar-policy__principle">
            <span className="sezar-policy__number">01</span>
            <div>
              <h3>سادگی</h3>
              <p>هر چیزی که ضروری نیست، نباید حواس کاربر را پرت کند.</p>
            </div>
          </article>

          <article className="sezar-policy__principle">
            <span className="sezar-policy__number">02</span>
            <div>
              <h3>دقت</h3>
              <p>تفاوت یک تجربه حرفه‌ای، اغلب در جزئیات کوچک شکل می‌گیرد.</p>
            </div>
          </article>

          <article className="sezar-policy__principle">
            <span className="sezar-policy__number">03</span>
            <div>
              <h3>اعتماد</h3>
              <p>نتیجه باید از چیزی که وعده داده شده، شفاف و قابل اتکا باشد.</p>
            </div>
          </article>
        </div>

        <div className="sezar-policy__signature" aria-label="Sezar built this">
          <span className="sezar-policy__signature-brand">SEZAR</span>
          <span className="sezar-policy__signature-text">built this</span>
        </div>
      </div>
    </section>
  );
}
