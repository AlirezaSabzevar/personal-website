import "./SezarPolicy.css";

const principles = [
  {
    number: "01",
    title: "سادگی",
    subtitle: "SIMPLE",
    text: "آنچه لازم نیست، جایی در طراحی ما ندارد.",
  },
  {
    number: "02",
    title: "دقت",
    subtitle: "PRECISE",
    text: "هیچ جزئیاتی اتفاقی نیست.",
  },
  {
    number: "03",
    title: "انسانی",
    subtitle: "HUMAN",
    text: "برای آدم‌ها می‌سازیم، نه فقط برای چشم‌ها.",
  },
  {
    number: "04",
    title: "ماندگاری",
    subtitle: "TIMELESS",
    text: "ترندها می‌گذرند؛ چیزهای خوب می‌مانند.",
  },
];

export default function SezarPolicy() {
  return (
    <section className="sezar-policy" id="sezar-policy">
      <div className="sezar-policy-container">

        <div className="sezar-policy-heading">
          <div className="sezar-policy-kicker">
            <span>SEZAR</span>
            <span className="sezar-policy-kicker-line" />
            <span>PRINCIPLES</span>
          </div>

          <div className="sezar-policy-title-row">
            <h2>ما به چند چیز باور داریم.</h2>
            <span className="sezar-policy-dot" aria-hidden="true" />
          </div>
        </div>

        <div className="sezar-policy-grid">
          {principles.map((principle) => (
            <article className="sezar-policy-card" key={principle.number}>
              <div className="sezar-policy-card-top">
                <span className="sezar-policy-number">
                  {principle.number}
                </span>
                <span className="sezar-policy-subtitle">
                  {principle.subtitle}
                </span>
              </div>

              <div className="sezar-policy-card-content">
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>

            </article>
          ))}
        </div>

        <div className="sezar-policy-signature" aria-label="Sezar built this">
            <section className="sezar-policy-signature-sec-one">
                <span className="sezar-policy-signature-brand"><span className="sezar-style">sezar</span> built this.</span>
            </section>
            <section className="sezar-policy-signature-sec-two">
               ©️ تمامی حقوق این وب‌سایت متعلق به علیرضا سبزوار است. 
            </section>
        </div>

      </div>
    </section>
  );
}
