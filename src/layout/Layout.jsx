import { useContext, useEffect } from "react"
import { LanguageContext } from "../context/LanguageContext"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

function Layout() {

    const { lang } = useContext(LanguageContext)

    useEffect(() => {

        if (lang === "ar") {
            document.documentElement.setAttribute("dir", "rtl")
            document.documentElement.lang = "ar"
        } else {
            document.documentElement.setAttribute("dir", "ltr")
            document.documentElement.lang = "en"
        }

    }, [lang])

    return (
        <>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default Layout