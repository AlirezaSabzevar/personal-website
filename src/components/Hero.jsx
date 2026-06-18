import "./Hero.css";
import profile from "../assets/Gemini2.png";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import { useState } from "react";


export default function Hero() {

  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showContractModal, setShowContractModal] = useState(false);

  return (
    <>
    <section id="home" className="hero">

      <div className="hero-right">

        <img src={profile} alt=""/>
      </div>

      <div className="hero-left">

        <div className="badge">
          <span></span>
          Frontend Developer
        </div>

        <h1>علیرضا سبزوار</h1>

        <h2>توسعه دهنده فرانت‌اند</h2>

        <h3>React.js & JavaScript</h3>

        <p>
          تخصص من در طراحی و توسعه رابط‌های کاربری مدرن
          و واکنش‌گرا با استفاده از جدیدترین تکنولوژی‌های
          وب است. عاشق نوشتن کد تمیز و ساخت تجربه‌های
          کاربری فوق‌العاده هستم.
        </p>

        <div className="buttons">
          <button className="primary" onClick={()=>setShowPricingModal(true)}>
            تعرفه طراحی و خدمات سایت
          </button>

          <button className="secondary" onClick={()=>setShowContractModal(true)}>
            قرارداد طراحی سایت
          </button>
        </div>

        <div className="socials">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaEnvelope /></a>
          <a href="#"><FaPhone /></a>
        </div>

      </div>


    </section>


  {
  showPricingModal && (
    <div className="pricing-modal-overlay" onClick={()=>setShowPricingModal(false)}>

      <div className="pricing-modal" onClick={(e)=>e.stopPropagation()}>
        <h3>تعرفه طراحی و خدمات وبسایت</h3>
        <p>
           برای مشاهده جزئیات خدمات و پکیج‌های
           پیشنهادی یکی از گزینه‌های زیر را
           انتخاب کنید.
        </p>
        <div className="pricing-actions">

          <a href="/pricing.pdf" target="_blank" rel="noreferrer">
          تعرفه خدمات و طراحی
          </a>

          <a href="/packages.pdf" target="_blank" rel="noreferrer">
          پکیج‌های پیشنهادی
          </a>
        </div>

        <button className="close-pricing-modal" onClick={()=>setShowPricingModal(false)}>بستن</button>
      </div>

    </div>
  )}


    {
  showContractModal && (
    <div className="contract-modal-overlay" onClick={()=>setShowContractModal(false)}>

      <div className="contract-modal" onClick={(e)=>e.stopPropagation()}>
        <h3>قرارداد طراحی سایت برای شروع همکاری</h3>
        <p>
           برای مشاهده مفاد قرارداد روی دکمه زیر کلیک کنید.
        </p>
        <div className="contract-actions">

          <a href="/contract.pdf" target="_blank" rel="noreferrer">
          قرارداد
          </a>

        </div>

        <button className="close-contract-modal" onClick={()=>setShowContractModal(false)}>بستن</button>
      </div>

    </div>
  )}

  </>
);

};