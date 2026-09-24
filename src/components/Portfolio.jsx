import "./Portfolio.css";
import { useState, useEffect } from "react";
import { getProjects } from "./api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaExternalLinkAlt } from "react-icons/fa";

// const projects = [
//   {
//     title: "وب‌سایت علی‌بابا",
//     image: "/projects/alibaba.png",
//     description:"React.js ,Css, Bootstrap طراحی شده با",
//     challenge : "هدف تمرین و مهارت بیشتر",
//     solution : "تسلط بیشتر روی رابط کاربری",
//     result: "آمادگی کامل برای طراحی سایت های خدماتی و رزرویشن",
//     tags: ["React.js", "Css", "JavaScript"],
//     demo: null,
//     github: "#"
//   },

//   {
//     title: "وب‌سایت کافه کاردیتو",
//     image: "/projects/kardito.png",
//     description: "وب‌سایت معرفی کافه",
//     challenge : "ناتوانی در خدمت رسانی به همه‌ی مشتریان",
//     solution : "طراحی ساختاری ساده و منظم همراه با نمایش واضح منو، تصاویر و اطلاعات مورد نیاز کاربران",
//     result: "بهبود بسیار در وضعیت خدمت‌رسانی به مشتریان کافه و جلب رضایت همه میهمانان",
//     tags: ["Next.js", "React.js", "Css"],
//     demo: "https://cafe-kardito-b2gw.vercel.app/",
//     github: "#"
//   },

//   {
//     title: "وب‌سایت آنکالی بیمارستان (دمو)",
//     image: "/projects/oncall.png",
//     description: "نسخه آزمایشی",
//     challenge : "اتلاف زمان زیاد برای جستجوی پزشک آنکال + افزایش خطا‌های کارکنان هنگام مواقع اورژانسی",
//     solution : "ساخت یک وب‌سایت هدفمند و ساده و سریع در جهت تماس با پزشک آنکال با حداقل صرف زمان و خطای انسانی",
//     result: "فراخوان پزشک آنکال در سریع‌ترین زمان ممکن و کنترل شرایط اورژانسی",
//     tags: ["React.js", "CSS", "GSAP"],
//     demo: "https://rahimi-hospital.vercel.app/",
//     github: "#"
//   },

//   {
//     title: "سایت مدیریت کلاس‌ دانشگاه علوم پزشکی",
//     image: "/projects/report class.png",
//     description: "سازماندهی کلاس‌های فعال و غیر‌فعال",
//     challenge : "مشکل در عدم مدیریت رزرو کلاس‌های در دسترس",
//     solution : "ساخت وب‌سایت ساده و کاربردی در جهت مدیریت کلاس‌‌ها",
//     result: "سازماندهی قوی‌تر و اجرای منظم و بدون مشکل مدیریت رزرو کلاس‌ها",
//     tags: ["React.js", "Redux"],
//     demo: null,
//     github: "#"
//   }
// ];



export default function Portfolio() {

    // const [selectedProject, setSelectedProject] = useState(null);

      const [projects, setProjects] = useState([]);
      const [selectedProject, setSelectedProject] = useState(null);

      useEffect(() => {
        getProjects()
          .then((data) => {
            setProjects(data);
            console.log("✅ Portfolio Projects:", data);
          })
          .catch((error) => {
            console.error("❌ Portfolio API Error:", error);
          });
      }, []);

  return (
    <section id="portfolio" className="portfolio-section">

    <div className="portfolio-container">


      <div className="portfolio-header">

        <h2>
          نمونه کارها
          <span></span>
        </h2>

      </div>

      <Swiper
        modules={[Autoplay, Pagination]}

        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}

        pagination={{
        clickable: true,
        }}
        
        loop={true}
        spaceBetween={25}
        breakpoints={{
          0: {
        slidesPerView: 1,
          },
          640: {
        slidesPerView: 1,
          },
          768: {
        slidesPerView: 2,
          },
          1200: {
        slidesPerView: 3,
      },
      }}
      >

        {projects.map((project) => (
          <SwiperSlide key={project.id}>

            <div className="project-card">

              <img
                src={project.image}
                alt=""
              />

              <div className="project-content">

                <h3>{project.title}</h3>

                {/* <p>
                  {project.description}
                </p> */}
                <p>
                  {project.short_description}
                </p>

                {/* <div className="tags">

                  {project.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div> */}
                <div className="tags">

                  {project.technologies.map((technology) => (
                    <span key={technology.id}>
                      {technology.name}
                    </span>
                  ))}

                </div>

                <div className="card-buttons">

                  <button onClick={() => setSelectedProject(project)}>
                    جزئیات پروژه
                  </button>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>


      {
selectedProject && (

<div
  className="project-modal-overlay"
  onClick={() =>
    setSelectedProject(null)
  }
>

  <div
    className="project-modal"
    onClick={(e) =>
      e.stopPropagation()
    }
  >

    <h2>
      {selectedProject.title}
    </h2>

    <img
      src={selectedProject.image}
      alt=""
    />

    <div className="project-details">

      {/* <div>
        <h4>چالش موجود :</h4>
        <p>
          {selectedProject.challenge}
        </p>
      </div> */}
      <div>
        <h4>چالش موجود :</h4>
        <p>
          {selectedProject.detail.challenge}
        </p>
      </div>

      {/* <div>
        <h4>راه حل ما :</h4>
        <p>
          {selectedProject.solution}
        </p>
      </div> */}
      <div>
        <h4>راه حل ما :</h4>
        <p>
          {selectedProject.detail.solution}
        </p>
      </div>

      {/* <div>
        <h4>نتیجه نهایی :</h4>
        <p>
          {selectedProject.result}
        </p>
      </div> */}
      <div>
        <h4>نتیجه نهایی :</h4>
        <p>
          {selectedProject.detail.result}
        </p>
      </div>

    </div>

    <div className="modal-buttons">

      {/* <a
        href={selectedProject.demo}
        target="_blank"
        rel="noopener noreferrer"
      >
        مشاهده دمو
        <FaExternalLinkAlt className="FaExternalLinkAlt"/>
      </a> */}
      <a
        href={selectedProject.detail.demo_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        مشاهده دمو
        <FaExternalLinkAlt className="FaExternalLinkAlt"/>
      </a>

    </div>

    <button
      className="close-project-modal"
      onClick={() =>
        setSelectedProject(null)
      }
    >
      بستن
    </button>

  </div>

</div>

)}

    </div>
    </section>
  );
};