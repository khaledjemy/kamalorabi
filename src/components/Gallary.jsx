import { motion } from "framer-motion"

const images = [
    "./img/gallary1.jpeg",
    "./img/gallary2.jpeg",
    "./img/gallary3.jpeg",
    "./img/gallary4.jpeg",
    "./img/gallary5.jpeg",

]

function Gallery() {

    return (

        <section className="gallery-section" id="gallery">

            <div className="container">

                <motion.h2
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Gallery
                </motion.h2>

                <div className="gallery-grid">

                    {
                        images.map((img, index) => (

                            <motion.div
                                className="gallery-item"
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: false }}
                            >

                                <img src={img} alt={`gallery-${index}`} />

                            </motion.div>

                        ))
                    }

                </div>

            </div>

        </section>

    )
}

export default Gallery