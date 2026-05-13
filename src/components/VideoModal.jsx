import ReactPlayer from "react-player"
import { motion, AnimatePresence } from "framer-motion"

function VideoModal({ show, setShow }) {

    return (

        <AnimatePresence>

            {
                show && (

                    <motion.div
                        className="video-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        <motion.div
                            className="video-content"
                            initial={{ scale: .7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: .7, opacity: 0 }}
                        >

                            <button
                                className="close-btn"
                                onClick={() => setShow(false)}
                            >
                                ✕
                            </button>

                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                controls
                                playing
                                width="100%"
                                height="500px"
                            />

                        </motion.div>

                    </motion.div>

                )
            }

        </AnimatePresence>

    )
}

export default VideoModal