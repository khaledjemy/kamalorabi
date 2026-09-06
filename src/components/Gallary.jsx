import { motion } from "framer-motion"
import { useContext, useEffect, useRef, useState } from "react"
import { LanguageContext } from "../context/LanguageContext"
import "../styles/gallery-viewer.css"

const images = [
    "/img/gallary2.jpeg",
    "/img/gallary4.jpeg",
    "/img/gallary5.jpeg",
    "/img/whatsapp-sep06/photo-1.jpeg",
    "/img/whatsapp-sep06/photo-2.jpeg",
    "/img/whatsapp-sep06/photo-3.jpeg",
    "/img/whatsapp-sep06/photo-4.jpeg",
    "/img/whatsapp-sep06/photo-5.jpeg",
    "/img/whatsapp-sep06/photo-6.jpeg",
]

function Gallery() {
    const { lang } = useContext(LanguageContext)
    const ar = lang === "ar"
    const [activeIndex, setActiveIndex] = useState(null)
    const dialogRef = useRef(null)
    const touchStart = useRef(null)
    const isOpen = activeIndex !== null
    const move = (step) => setActiveIndex(index => index === null ? null : (index + step + images.length) % images.length)

    useEffect(() => {
        if (!isOpen) return
        const dialog = dialogRef.current
        const trigger = document.activeElement
        const previousOverflow = document.body.style.overflow
        dialog.showModal()
        document.body.style.overflow = "hidden"
        return () => {
            dialog.close()
            document.body.style.overflow = previousOverflow
            if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus({ preventScroll: true })
        }
    }, [isOpen])

    const handleKeyDown = (event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault()
            move(event.key === "ArrowRight" ? 1 : -1)
        }
    }

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
                    {images.map((img, index) => (
                        <motion.button
                            type="button"
                            className="gallery-item gallery-trigger"
                            key={img}
                            aria-label={ar ? `فتح الصورة ${index + 1}` : `Open image ${index + 1}`}
                            aria-haspopup="dialog"
                            onClick={() => setActiveIndex(index)}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: false }}
                        >
                            <img src={img} alt={`gallery-${index}`} />
                        </motion.button>
                    ))}
                </div>
            </div>
            <dialog
                ref={dialogRef}
                className="gallery-viewer"
                aria-label={ar ? "عارض الصور" : "Image viewer"}
                onCancel={(event) => { event.preventDefault(); setActiveIndex(null) }}
                onKeyDown={handleKeyDown}
                onClick={(event) => { if (event.target === event.currentTarget) setActiveIndex(null) }}
            >
                {isOpen && <>
                    <button type="button" className="gallery-viewer-close" aria-label={ar ? "إغلاق" : "Close"} onClick={() => setActiveIndex(null)} autoFocus>×</button>
                    <span className="gallery-viewer-count" role="status" aria-live="polite" aria-atomic="true">
                        {ar ? `الصورة ${activeIndex + 1} من ${images.length}` : `${activeIndex + 1} / ${images.length}`}
                    </span>
                    <img
                        className="gallery-viewer-image"
                        src={images[activeIndex]}
                        alt={ar ? `صورة المعرض ${activeIndex + 1}` : `Gallery image ${activeIndex + 1}`}
                        onTouchStart={(event) => { touchStart.current = event.touches.length === 1 ? event.touches[0].clientX : null }}
                        onTouchEnd={(event) => {
                            if (touchStart.current !== null) {
                                const distance = event.changedTouches[0].clientX - touchStart.current
                                if (Math.abs(distance) > 60) move(distance < 0 ? 1 : -1)
                            }
                            touchStart.current = null
                        }}
                        onTouchCancel={() => { touchStart.current = null }}
                    />
                    <div className="gallery-viewer-navigation" dir="ltr">
                        <button type="button" aria-label={ar ? "الصورة السابقة" : "Previous image"} onClick={() => move(-1)}>←</button>
                        <button type="button" aria-label={ar ? "الصورة التالية" : "Next image"} onClick={() => move(1)}>→</button>
                    </div>
                </>}
            </dialog>
        </section>
    )
}

export default Gallery
