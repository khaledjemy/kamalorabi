import { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import { t } from "../i18n/translations";

function Company() {
    const { lang } = useContext(LanguageContext);
    const l = t[lang];

    return (
        <section className="company-section" id="company">
            <div className="container">
                <div className="company-wrapper">

                    {/* IMAGES SIDE */}
                    <motion.div
                        className="company-images"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                    >
                        <div className="company-img main-company-img">
                            <img src="./img/img3.jpeg" alt="Company" />
                        </div>
                        <div className="company-img small-company-img">
                            <img src="./img/img4.jpeg" alt="Office" />
                        </div>
                    </motion.div>

                    {/* CONTENT SIDE */}
                    <motion.div
                        className="company-content"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                    >
                        <span className="company-subtitle">
                            {l.companySubtitle}
                        </span>

                        <h2>
                            {l.companyTitle}
                        </h2>

                        <p>{l.companyText1}</p>
                        <p>{l.companyText2}</p>
                        <p>{l.companyText3}</p>

                        <div className="company-stats">
                            <div className="company-card">
                                <h3>20+</h3>
                                <span>{l.companyStat1}</span>
                            </div>
                            <div className="company-card">
                                <h3>100M+</h3>
                                <span>{l.companyStat2}</span>
                            </div>
                            <div className="company-card">
                                <h3>2021</h3>
                                <span>{l.companyStat3}</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default Company;