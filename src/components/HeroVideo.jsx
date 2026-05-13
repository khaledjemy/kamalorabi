import { motion } from "framer-motion"
import { useRef, useState } from "react"

import {
    FaPlay,
    FaPause,
    FaVolumeUp,
    FaVolumeMute,
    FaExpand
} from "react-icons/fa"

import introVideo from "../assets/videos/intro.mp4"

function HeroVideo() {

    const videoRef = useRef(null)

    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)
    const [volume, setVolume] = useState(0.5)
    const [progress, setProgress] = useState(0)

    // PLAY / PAUSE
    const togglePlay = () => {

        if (videoRef.current.paused) {
            videoRef.current.play()
            setIsPlaying(true)
        } else {
            videoRef.current.pause()
            setIsPlaying(false)
        }

    }

    // MUTE
    const toggleMute = () => {

        videoRef.current.muted = !videoRef.current.muted
        setIsMuted(videoRef.current.muted)

    }

    // VOLUME
    const handleVolume = (e) => {

        const value = e.target.value

        videoRef.current.volume = value
        setVolume(value)

        if (value > 0) {
            videoRef.current.muted = false
            setIsMuted(false)
        }

    }

    // PROGRESS
    const handleTimeUpdate = () => {

        const current = videoRef.current.currentTime
        const duration = videoRef.current.duration

        setProgress((current / duration) * 100)

    }

    // SEEK
    const handleSeek = (e) => {

        const value = e.target.value

        const duration = videoRef.current.duration

        videoRef.current.currentTime = (value / 100) * duration

        setProgress(value)

    }

    // FULLSCREEN
    const handleFullscreen = () => {

        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen()
        }

    }

    return (

        <section className="hero-video">

            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="background-video"
                onTimeUpdate={handleTimeUpdate}
            >
                <source src={introVideo} type="video/mp4" />
            </video>


            <div className="hero-content">

                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >

                    <img
                        src="/Copilot_20260510_202157.png"
                        className="logo_img"
                        alt="Logo"
                    />

                </motion.h1>

                <motion.a
                    href="#about"
                    className="hero-btn"
                    whileHover={{ scale: 1.1 }}
                >
                    Explore
                </motion.a>

            </div>

            {/* CONTROLS */}

            <div className="video-controls">

                {/* PLAY */}
                <button onClick={togglePlay}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>

                {/* MUTE */}
                <button onClick={toggleMute}>
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>

                {/* VOLUME */}
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolume}
                    className="volume-slider"
                />

                {/* PROGRESS */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleSeek}
                    className="progress-slider"
                />

                {/* FULLSCREEN */}
                <button onClick={handleFullscreen}>
                    <FaExpand />
                </button>

            </div>

        </section>

    )
}

export default HeroVideo