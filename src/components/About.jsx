import { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { t } from "../i18n/translations";
import { motion } from "framer-motion";

function About() {
    const { lang } = useContext(LanguageContext);
    const l = t[lang]; // اختيار الترجمة حسب اللغة الحالية

    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-wrapper">

                    {/* LEFT CONTENT */}
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                    >
                        <span className="about-subtitle">
                            {l.aboutSubtitle}
                        </span>

                        <h2>
                            {l.aboutTitle}
                        </h2>

                        <p>{l.aboutText1}</p>
                        <p>{l.aboutText2}</p>
                        <p>{l.aboutText3}</p>

                        <div className="about-info">
                            <div className="info-card">
                                <h3>20+</h3>
                                <span>{l.infoYears}</span>
                            </div>
                            <div className="info-card">
                                <h3>100M+</h3>
                                <span>{l.infoGrowth}</span>
                            </div>
                            <div className="info-card">
                                <h3>CEO</h3>
                                <span>{l.infoCEO}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT IMAGES */}
                    <motion.div
                        className="about-images"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                    >
                        <div className="about-img main-img">
                            <img src="./img/img.jpg" alt="" />
                        </div>
                        <div className="about-img small-img">
                            <img src="./img/img2.jpg" alt="" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default About;