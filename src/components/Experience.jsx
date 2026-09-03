import "./Experience.css";

import { FaBriefcase, FaAward, FaLaptopCode, FaMugHot, FaHospital, FaChalkboardTeacher } from "react-icons/fa";

import { useEffect, useState } from "react";
import { getExperiences } from "./api";

// const experiences = [
//     {
//     year: "1405",
//     icon: <FaLaptopCode />,
//     title: "طراحی و توسعه وب‌سایت شخصی",
//     company:
//       "وب‌سایت شخصی برای ارائه جهت همکاری",
//     status: "ongoing",
//   },

//   {
//     year: "1404",
//     icon: <FaMugHot />,
//     title: "وب‌سایت کافه کاردیتو",
//     company:
//       "وب‌سایت خدماتی-فروشگاهی کافه کاردیتو",
//     status: "completed",
//   },

//   {
//     year: "1404",
//     icon: <FaHospital />,
//     title: "طراحی و توسعه وبسایت پزشکان",
//     company:
//       "سازمان نظام پزشکی استان لرستان و بیمارستان فوق تخصصی شهید رحیمی خرم‌آباد",
//     status: "completed",
//   },

//   {
//     year: "1404",
//     icon: <FaChalkboardTeacher />,
//     title:
//       "راه‌اندازی وبسایت و توسعه سیستم واحد ثبت امور کلاس‌های دانشگاه",
//     company:
//       "دانشگاه علوم پزشکی خرم‌آباد",
//     status: "completed",
//   },
// ];


const experienceIcons = {
  1: <FaHospital />,
  2: <FaMugHot />,
  3: <FaLaptopCode />,
  4: <FaChalkboardTeacher />,
};


export default function Experience() {

  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getExperiences()
      .then((data) => {
        setExperiences(data);
        console.log("✅ Experience API Response:", data);
      })
      .catch((error) => {
        console.error("❌ Experience API Error:", error);
      });
  }, []);

  return (
    <section id="experience" className="experience-section">

      <div className="experience-container">

        <h2 className="experience-title">
          تجربه کاری
          <span></span>
        </h2>

        {experiences.map((item, index) => (
          <div className="experience-row" key={item.id}>

            <div className="experience-year">
              {item.year}
            </div>

            <div className="timeline">
              <div className="timeline-dot"></div>
            </div>

            <div className="experience-card">

              {/* <div className="experience-icon">
                {item.icon}
              </div> */}
              <div className="experience-icon">
                {experienceIcons[item.id] || <FaBriefcase />}
              </div>

              <div className="experience-content">

                <h3>{item.title}</h3>

                {/* <p>{item.company}</p> */}
                <p>{item.short_description}</p>

              </div>

              <div className={`status-badge ${item.status === "P" ? "ongoing" : "completed"}`}>
                {item.status === "P" ? "در حال انجام" : "تکمیل شده"}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};