import { useContext } from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import { t } from "../i18n/translations";

function Footer() {
    const { lang } = useContext(LanguageContext);
    const l = t[lang];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">

                    {/* LEFT */}
                    <div className="footer-col">
                        <h2 className="footer-logo">
                            TradeMark Groups
                        </h2>
                        <p>{l.footerTagline}</p>
                    </div>

                    {/* CENTER LINKS */}
                    <div className="footer-col">
                        <h3>{l.quickLinks}</h3>
                        <a href="/#about">{l.aboutLink}</a>
                        <a href="/#skills">{l.skillsLink}</a>
                        <a href="/#gallery">{l.galleryLink}</a>
                        <a href="/#company">{l.companyLink}</a>
                        <a href="/#youth">{l.careersLink}</a>
                        <a href="/#contact">{l.contactLink}</a>
                    </div>

                    {/* RIGHT SOCIAL */}
                    <div className="footer-col">
                        <h3>{l.followUs}</h3>
                        <div className="footer-social">
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
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="footer-bottom">
                    © {new Date().getFullYear()} TradeMark Groups. {l.copyright}
                </div>
            </div>
        </footer>
    );
}

export default Footer;