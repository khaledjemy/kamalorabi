import { Link } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { LanguageContext } from "../context/LanguageContext"
export default function Navbar() {
 const { lang, toggleLang } = useContext(LanguageContext)
 const [open, setOpen] = useState(false)
 const ar = lang === "ar"
 const links = [["/#about",ar?"عن الدكتور":"About"],["/#company",ar?"الشركة":"Company"],["/#skills",ar?"الخبرات":"Expertise"],["/#gallery",ar?"المعرض":"Gallery"],["/videos",ar?"الفيديوهات":"Videos"],["/#youth",ar?"الفرص المهنية":"Careers"]]
 useEffect(()=>{const close=e=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[])
 return <header className="ko-header"><nav className="ko-nav" aria-label={ar?"القائمة الرئيسية":"Main navigation"}>
 <Link to="/" className="ko-brand" onClick={()=>setOpen(false)}><img src="/Copilot_20260510_202157.png" alt=""/><span>{ar?"د. كمال عرابي":"DR. KAMAL ORABI"}<small>{ar?"رؤية تقود النمو":"VISION. LEADERSHIP. GROWTH."}</small></span></Link>
 <div className="ko-desktop-links">{links.slice(0,3).map(([to,label])=><Link key={to} to={to}>{label}</Link>)}</div>
 <div className="ko-nav-actions"><button className="ko-language" onClick={()=>toggleLang(ar?'en':'ar')}>{ar?'EN':'العربية'}</button><button className="ko-menu-toggle" aria-label={ar?(open?'إغلاق القائمة':'فتح القائمة'):(open?'Close menu':'Open menu')} aria-expanded={open} aria-controls="ko-navigation" onClick={()=>setOpen(!open)}>{open?<FaTimes/>:<FaBars/>}</button></div>
 {open&&<div className="ko-navigation" id="ko-navigation">{links.map(([to,label])=><Link key={to} to={to} onClick={()=>setOpen(false)}>{label}</Link>)}</div>}
 </nav></header>
}
