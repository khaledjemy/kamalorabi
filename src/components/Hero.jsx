import { useState } from "react"
import VideoModal from "./VideoModal"
import { motion } from "framer-motion"

function Hero() {

    const [showVideo, setShowVideo] = useState(false)


    return (
        <>
        <section className="hero">

            <div className="container">

                <div className="row align-items-center min-vh-100">

                    <div className="col-lg-6">

                        <motion.h1
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="display-3 fw-bold text-white"
                        >
                            Full Stack Developer
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: .5 }}
                            className="text-light mt-4 fs-5"
                        >
                            PHP Laravel React Developer
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-4"
                        >

                            <button className="btn btn-info btn-lg me-3">
                                Hire Me
                            </button>

                            <button
                                className="btn btn-outline-light btn-lg"
                                onClick={() => setShowVideo(true)}
                            >
                                Watch Video
                            </button>

                        </motion.div>

                    </div>

                    <div className="col-lg-6">

                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity
                            }}
                            className="hero-box"
                        />

                    </div>

                </div>

            </div>

        </section>
        <VideoModal
    show={showVideo}
    setShow={setShowVideo}
/></>
    )
}

export default Hero