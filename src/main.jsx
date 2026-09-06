import ReactDOM from 'react-dom/client'
import { useEffect } from 'react'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.css'
import './styles/hero-refresh.css'
import './styles/sections-refresh.css'
import './styles/type-refresh.css'
  import { LanguageProvider } from "./context/LanguageContext"

function AppShell() {
    useEffect(() => {
        document.documentElement.classList.add('ko-scroll-ready')
        const targets = document.querySelectorAll('.ko-section-inner, .ko-hero-grid')
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('ko-is-visible')
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
        targets.forEach((target) => observer.observe(target))
        return () => observer.disconnect()
    }, [])
    return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
<LanguageProvider>
    <AppShell />
</LanguageProvider>
)
