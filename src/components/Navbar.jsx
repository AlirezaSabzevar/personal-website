import "./Navbar.css";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [activeSection, setActiveSection] = useState("home");

  const [showResumeModal, setShowResumeModal] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);


  useEffect(() => {

  const sections = document.querySelectorAll("section");

  const handleScroll = () => {

    let current = "";

    sections.forEach((section) => {

      const sectionTop =
        section.offsetTop - 150;

      const sectionHeight =
        section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY <
          sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }

    });

    setActiveSection(current);

  };

  window.addEventListener(
    "scroll",
    handleScroll
  );

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );

  }, []);

  

  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <span>AS</span>
        <p>Alireza Sabzevar</p>
      </div>

      <ul className="nav-links">
        <li>
          <a 
            href="#home"
            className={
              activeSection === "home" ? "active" : ""
            }
          >خانه
          </a>
        </li>

        <li>
          <a 
            href="#about"
            className={
              activeSection === "about" ? "active" : ""
            }
          >درباره من
          </a>
        </li>

        <li>
          <a 
            href="#skills"
            className={
              activeSection === "skills" ? "active" : ""
            }
            >مهارت‌ها
            </a>
        </li>

        <li>
          <a 
            href="#portfolio"
            className={
              activeSection === "portfolio" ? "active" : ""
            }
            >نمونه کارها
            </a>
        </li>

        <li>
          <a 
            href="#experience"
            className={
              activeSection === "experience" ? "active" : ""
            }
            >تجربه کاری
            </a>
        </li>

        <li>
          <a 
            href="#contact"
            className={
              activeSection === "contact" ? "active" : ""
            }
            >تماس با من
            </a>
        </li>
      </ul>

      <button className="resume-btn" onClick={()=>setShowResumeModal(true)}>
        <span>دانلود رزومه</span>
        <FaDownload/>
      </button>

      <button className="hamburger-btn" onClick={() => setMobileMenu(true)}>
        <FaBars /> 
      </button>


      </nav>

      <div
  className={`mobile-menu-overlay ${
    mobileMenu ? "show" : ""
  }`}
  onClick={() => setMobileMenu(false)}
>
  <div
    className={`mobile-menu ${
      mobileMenu ? "open" : ""
    }`}
    onClick={(e) => e.stopPropagation()}
  >

    <button
      className="close-menu"
      onClick={() => setMobileMenu(false)}
    >
      <FaTimes />
    </button>

    <a href="#home" onClick={() => setMobileMenu(false)}>خانه</a>

    <a href="#about" onClick={() => setMobileMenu(false)}>
      درباره من
    </a>

    <a href="#skills" onClick={() => setMobileMenu(false)}>
      مهارت‌ها
    </a>

    <a href="#portfolio" onClick={() => setMobileMenu(false)}>
      نمونه کارها
    </a>

    <a href="#experience" onClick={() => setMobileMenu(false)}>
      تجربه کاری
    </a>

    <a href="#contact" onClick={() => setMobileMenu(false)}>
      تماس با من
    </a>

    <button
      className="mobile-resume-btn"
      onClick={() => {
        setShowResumeModal(true);
        setMobileMenu(false);
      }}
    >
      دانلود رزومه
    </button>

  </div>
</div>


            {
  showResumeModal && (
    <div
      className="resume-modal-overlay"
      onClick={() => setShowResumeModal(false)}>
      <div
        className="resume-modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <h3>
          رزومه علیرضا سبزوار
        </h3>

        <p>
          برای مشاهده یا دانلود رزومه
          یکی از گزینه‌های زیر را انتخاب
          کنید.
        </p>

        <div className="resume-actions">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            مشاهده آنلاین
          </a>

          <a
            href="/resume.pdf"
            download
          >
            دانلود PDF
          </a>

        </div>

        <button
          className="close-modal"
          onClick={() =>
            setShowResumeModal(false)
          }
        >
          بستن
        </button>

          </div>
        </div>
        )
        }
        </>
)};