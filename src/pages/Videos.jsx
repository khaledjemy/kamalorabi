import { useEffect, useState,useContext } from "react"
import { motion } from "framer-motion"
import { LanguageContext } from "../context/LanguageContext"
import { t } from "../i18n/translations"

function Videos() {

    const [videos, setVideos] = useState([])
    const [activeVideo, setActiveVideo] = useState(null)
    const [loading, setLoading] = useState(true)
    const { lang } = useContext(LanguageContext)


    useEffect(() => {

        const channelId = "UCBZ4wJc_8eZHLs3HOJU7ntw"

        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(
            `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
        )}`)
            .then(res => res.json())
            .then(data => {

                const parser = new DOMParser()
                const xml = parser.parseFromString(data.contents, "text/xml")

                const entries = xml.getElementsByTagName("entry")

                const videoList = Array.from(entries).map(entry => {

                    const videoId = entry.getElementsByTagName("yt:videoId")[0]?.textContent
                    const title = entry.getElementsByTagName("title")[0]?.textContent

                    return {
                        id: videoId,
                        title
                    }

                }).filter(v => v.id)

                setVideos(videoList)

                if (videoList.length > 0) {
                    setActiveVideo(videoList[0].id)
                }

                setLoading(false)

            })
            .catch(err => {
                console.log("Error loading videos:", err)
                setLoading(false)
            })

    }, [])

    return (

        <section className="videos-page" id="videos">

            <div className="container">

                <h2 className="videos-title">
    {t[lang].videos}
                </h2>

                {/* LOADING */}
                {
                    loading && (
                        <p style={{ color: "#d4af37", textAlign: "center" }}>
                            Loading videos...
                        </p>
                    )
                }

                {/* MAIN PLAYER */}
                {
                    activeVideo && (

                        <motion.div
                            className="video-player"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                        >

                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo}`}
                                title="video player"
                                allowFullScreen
                            ></iframe>

                        </motion.div>

                    )
                }

                {/* THUMBNAILS */}
                <div className="video-thumbs">

                    {
                        videos.map((video, index) => (

                            <motion.div
                                key={index}
                                className={`thumb ${activeVideo === video.id ? "active" : ""}`}
                                onClick={() => setActiveVideo(video.id)}
                                whileHover={{ scale: 1.05 }}
                            >

                                <img
                                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                    alt={video.title}
                                />

                                <span>{video.title}</span>

                            </motion.div>

                        ))
                    }

                </div>

            </div>

        </section>

    )
}

export default Videos