import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";


export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        <h2 className="contact-title">
          تماس با من
          <span></span>
        </h2>

        <div className="contact-content">

          {/* فرم */}

          <div className="contact-form">

            <input
              type="text"
              placeholder="نام و نام خانوادگی"
            />

            <input
              type="email"
              placeholder="ایمیل"
            />

            <input
              type="text"
              placeholder="موضوع پیام"
            />

            <textarea
              rows="6"
              placeholder="پیام خود را بنویسید..."
            ></textarea>

            <button>
              ارسال پیام
            </button>

            <p className="contact-note">
                آماده همکاری در پروژه‌های فرانت‌اند، طراحی رابط کاربری و توسعه وب هستم.
            </p>

          </div>

          {/* اطلاعات تماس */}

          <div className="contact-socials">

            <a
                href="https://github.com/AlirezaSabzevar"
                target="_blank"
                rel="noreferrer"
                className="glass-card"
            >
                <FaGithub />
                <h4>GitHub</h4>
                <span>مشاهده پروژه‌ها</span>
            </a>

            <a
                href="https://linkedin.com/in/USERNAME"
                target="_blank"
                rel="noreferrer"
                className="glass-card"
            >
                <FaLinkedin />
                <h4>LinkedIn</h4>
                <span>شبکه حرفه‌ای</span>
            </a>

            <a
                href="https://t.me/sbr_alireza"
                target="_blank"
                rel="noreferrer"
                className="glass-card"
            >
                <FaTelegramPlane />
                <h4>Telegram</h4>
                <span>ارتباط مستقیم</span>
            </a>

            <div className="glass-card">
                <FaEnvelope />
                <h4>Email</h4>
                <span>sezarweb2025@gmail.com</span>
            </div>

            <div className="glass-card">
                <FaPhoneAlt />
                <h4>Phone</h4>
                <span>09389495048</span>
            </div>

            <div className="glass-card">
                <FaMapMarkerAlt />
                <h4>Location</h4>
                <span>ملایر، ایران</span>
            </div>

            </div>

        </div>

      </div>

    </section>
  );
};