import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import { sendContactMessage } from "./api";
import { getSocialLinks } from "./api";



const socialIcons = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  telegram: <FaTelegramPlane />,
  email: <FaEnvelope />,
  phone: <FaPhoneAlt />,
  location: <FaMapMarkerAlt />,
};


export default function Contact() {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    messageText: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  const [socialLinks, setSocialLinks] = useState([]);


    const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    };



    const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setMessageStatus("");

    try {
      await sendContactMessage(formData);

      setMessageStatus("پیام شما با موفقیت ارسال شد.");

      setFormData({
        name: "",
        email: "",
        topic: "",
        messageText: "",
      });
    } catch (error) {
      console.error(error);
      setMessageStatus("ارسال پیام با خطا مواجه شد.");
    } finally {
      setIsSending(false);
    }
  };




  useEffect(() => {
    getSocialLinks()
      .then((data) => {
        setSocialLinks(data);
        console.log("✅ Social API Response:", data);
      })
      .catch((error) => {
        console.error("❌ Social API Error:", error);
      });
  }, []);



  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        <h2 className="contact-title">
          تماس با من
          <span></span>
        </h2>

        <div className="contact-content">

          {/* فرم */}

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="نام و نام خانوادگی"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="ایمیل"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="topic"
              placeholder="موضوع پیام"
              value={formData.topic}
              onChange={handleChange}
              required
            />

            <textarea
              rows="6"
              name="messageText"
              placeholder="پیام خود را بنویسید..."
              value={formData.messageText}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={isSending}>
              {isSending ? "در حال ارسال..." : "ارسال پیام"}
            </button>

            {messageStatus && (
              <p className="contact-status">
                {messageStatus}
              </p>
            )}

            <p className="contact-note">
                آماده همکاری در پروژه‌های فرانت‌اند، طراحی رابط کاربری و توسعه وب هستم.
            </p>

          </form>

          {/* اطلاعات تماس */}

          {/* <div className="contact-socials">

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

            </div> */}

        <div className="contact-socials">

          {socialLinks.map((link) => {
          const isLink = link.platform.toLowerCase() !== "email"
            && link.platform.toLowerCase() !== "phone"
            && link.platform.toLowerCase() !== "location";

          const content = (
            <>
              <div className="social-icon">
                {socialIcons[link.platform.toLowerCase()] || <FaEnvelope />}
              </div>

              <h4>{link.platform}</h4>

              <span>{link.label}</span>
            </>
          );

          if (isLink) {
            return (
              <a
                key={link.id}
                href={link.url_or_value}
                target="_blank"
                rel="noreferrer"
                className="glass-card"
              >
                {content}
              </a>
            );
          }

          return (
            <div key={link.id} className="glass-card">
              {content}
            </div>
          );
          })}

        </div>

        </div>

      </div>

    </section>
  );
};