import { Link } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

import {
    FaLinkedin,
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaTiktok,
    FaBars,
    FaTimes,
    FaHome,
    FaInfoCircle,
    FaTools,
    FaBuilding,
    FaImages,
    FaBriefcase,
    FaVideo,
    FaGlobe
} from "react-icons/fa"


function Navbar() {

    const { lang, toggleLang } = useContext(LanguageContext)

    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }

        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (

        <nav className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>

            <div className="container navbar-container">

                {/* LEFT */}
                <div className="nav-left">

                    <Link to="/" className="logo">
                        <img
                            src="/Copilot_20260510_202157.png"
                            className="logo_img"
                            alt="Logo"
                        />
                    </Link>

                </div>

                {/* SOCIAL */}
                <div className="nav-social">

                    <a
                        href="https://www.linkedin.com/in/dr-kamal-orabi-5b02a766"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://www.instagram.com/kamal_oraby"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.facebook.com/share/1KgWeWo7oC/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaFacebook />
                    </a>

                    <a
                        href="https://x.com/kamalorabi?s=21"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaTwitter />
                    </a>

                    <a
                        href="https://www.youtube.com/@kamalorabiyoucanbewhatever5369"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaYoutube />
                    </a>

                    <a
                        href="https://www.tiktok.com/@kamalorabi1?_r=1&_t=ZS-96F61rThMhw"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaTiktok />
                    </a>

                </div>

                {/* RIGHT */}
                <div className="nav-right">

                    {/* DESKTOP LANG */}
                    <div className="lang-switch">

                        <button
                            className={lang === "ar" ? "active" : ""}
                            onClick={() => toggleLang("ar")}
                        >
                            AR
                        </button>

                        <span>|</span>

                        <button
                            className={lang === "en" ? "active" : ""}
                            onClick={() => toggleLang("en")}
                        >
                            EN
                        </button>

                    </div>

                    {/* MENU BUTTON */}
                    <button
                        className="menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                </div>

            </div>

            {/* MOBILE MENU */}
            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

    <Link to="/" onClick={() => setMenuOpen(false)}>
        <FaHome />
        <span>{lang === "ar" ? "الرئيسية" : "Home"}</span>
    </Link>

    <a href="/#about" onClick={() => setMenuOpen(false)}>
        <FaInfoCircle />
        <span>{lang === "ar" ? "من نحن" : "About"}</span>
    </a>

    <a href="/#skills" onClick={() => setMenuOpen(false)}>
        <FaTools />
        <span>{lang === "ar" ? "المهارات" : "Skills"}</span>
    </a>

    <a href="/#company" onClick={() => setMenuOpen(false)}>
        <FaBuilding />
        <span>{lang === "ar" ? "الشركة" : "Company"}</span>
    </a>

    <a href="/#gallery" onClick={() => setMenuOpen(false)}>
        <FaImages />
        <span>{lang === "ar" ? "المعرض" : "Gallery"}</span>
    </a>

    <Link to="/#youth" onClick={() => setMenuOpen(false)}>
        <FaBriefcase />
        <span>{lang === "ar" ? "التوظيف" : "Careers"}</span>
    </Link>

    <Link to="/videos" onClick={() => setMenuOpen(false)}>
        <FaVideo />
        <span>{lang === "ar" ? "الفيديوهات" : "Videos"}</span>
    </Link>

    {/* MOBILE LANG */}
    <div className="mobile-lang-switch">

        <button
            className={lang === "ar" ? "active" : ""}
            onClick={() => {
                toggleLang("ar")
                setMenuOpen(false)
            }}
        >
            <FaGlobe />
            العربية
        </button>

        <button
            className={lang === "en" ? "active" : ""}
            onClick={() => {
                toggleLang("en")
                setMenuOpen(false)
            }}
        >
            <FaGlobe />
            English
        </button>

    </div>

</div>

        </nav>

    )
}

export default Navbar