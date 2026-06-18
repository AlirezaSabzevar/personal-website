import "./About.css";

import profile from "../assets/ChatGPT3.png";

import {
  FaPhone,
  FaEnvelope,
  FaUsers
} from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

export default function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-card">

        <div className="about-content">

          <div className="about-image">
            <img src={profile} alt="Alireza" />
          </div>

          <div className="about-text">

            <h2>
              <span></span>
              درباره من
            </h2>

            <p>
              توسعه‌دهنده فرانت‌اند با روحیه‌ای خلاق و دقیق هستم
              که در طراحی و پیاده‌سازی رابط‌های کاربری مدرن و
              واکنش‌گرا با استفاده از HTML، CSS، JavaScript
              و کتابخانه‌هایی مانند React.js و Next.js
              تخصص دارم.
            </p>

            <p>
              تمرکز من بر بهینه‌سازی تجربه کاربری،
              رعایت اصول طراحی و نوشتن کد تمیز و
              مقیاس‌پذیر است. همواره مشتاق یادگیری
              فناوری‌های جدید هستم و در محیط‌های
              تیمی به خوبی همکاری می‌کنم.
            </p>

          </div>

        </div>

        <div className="info-grid">

          <div className="info-box">
            <div>
              <h4>تلفن</h4>
              <p>09389495048</p>
            </div>
            <div className="div-icon"><FaPhone /></div>
          </div>

          <div className="info-box">
            <div>
              <h4>ایمیل</h4>
              <p>sezarweb2025@gmail.com</p>
            </div>
            <div className="div-icon"><FaEnvelope /></div>
          </div>

          <div className="info-box">
            <div>
              <h4>موقعیت</h4>
              <p>ملایر، ایران</p>
            </div>
            <div className="div-icon"><FaLocationDot /></div>
          </div>

          <div className="info-box">
            <div>
              <h4>دسترسی</h4>
              <p>برای پروژه‌های جدید</p>
            </div>
            <div className="div-icon"><FaUsers /></div>
          </div>

        </div>

      </div>

    </section>
  );
};