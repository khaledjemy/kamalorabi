import { useContext } from "react"; // أضف useContext
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { t } from "../i18n/translations";

function YouthSection() {
    const { lang } = useContext(LanguageContext);
    const l = t[lang];

    return (
        <section className="youth-section" id="youth">
            {/* BACKGROUND IMAGE */}
            <div className="youth-overlay"></div>

            <div className="container">
                <motion.div
                    className="youth-content"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    <h2>{l.youthTitle}</h2>
                    <p>{l.youthText}</p>
                    <Link to="/HireMe" className="youth-btn">
                        {l.youthBtn}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default YouthSection;