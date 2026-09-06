import HeroVideo from "../components/HeroVideo"
import About from "../components/About"
import Skills from "../components/Skills"
import YouthSection from "../components/Youth"
import Company from "../components/Company"
import Gallery from "../components/Gallary"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function Home() {

    const location = useLocation()

    useEffect(() => {

        if (location.hash) {
            const id = location.hash.replace("#", "")
            const el = document.getElementById(id)

            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" })
                }, 100)
            }
        }

    }, [location])
    return (
        <>

            <HeroVideo />

            <About />
            <Company />

            <Skills />

            <YouthSection />
            <Gallery />
        </>
    )
}

export default Home
