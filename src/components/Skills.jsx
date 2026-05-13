import { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import { t } from "../i18n/translations";

function Skills() {
    const { lang } = useContext(LanguageContext);
    const l = t[lang];

    // استخدام قائمة المهارات المترجمة من ملف الترجمة
    const skillsList = l.skillsList;

    return (
        <section className="skills" id="skills">
            <div className="container">
                <h2 className="skills-title">
                    {l.skillsTitle}
                </h2>

                <div className="skills-wrap">
                    {
                        skillsList.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="skill-pill"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ scale: 1.08 }}
                                viewport={{ once: false }}
                            >
                                {skill}
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Skills;