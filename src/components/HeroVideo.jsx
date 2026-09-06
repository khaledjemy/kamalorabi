import { useContext } from "react"
import { Link } from "react-router-dom"
import { LanguageContext } from "../context/LanguageContext"
import introVideo from "../assets/videos/intro.mp4"
export default function HeroVideo(){
 const {lang}=useContext(LanguageContext)
 const ar=lang==='ar'
 return <section className="ko-hero" aria-labelledby="ko-title"><div className="ko-hero-grid"><div className="ko-intro">
 <div className="ko-eyebrow"><span/>{ar?'رائد أعمال · مستشار استراتيجي':'ENTREPRENEUR · STRATEGIC ADVISOR'}</div>
 <h1 id="ko-title">{ar?'د. كمال':'Dr. Kamal'}<br/><span>{ar?'عرابي':'Orabi'}</span></h1>
 <p className="ko-headline">{ar?'رؤية واضحة. قيادة مؤثرة. نمو مستدام.':'Clear vision. Strong leadership. Lasting growth.'}</p>
 <p className="ko-description">{ar?'المؤسس والرئيس التنفيذي لـ TradeMark Groups. أكثر من ٢٠ عامًا من الخبرة في تطوير الأعمال وبناء استراتيجيات النمو وتمكين قادة المستقبل.':'Founder & CEO of TradeMark Groups. Over 20 years of experience shaping business strategies, unlocking growth, and empowering the next generation of leaders.'}</p>
 <div className="ko-hero-actions"><a className="ko-primary" href="https://www.linkedin.com/in/dr-kamal-orabi-5b02a766" target="_blank" rel="noreferrer">{ar?'لنتواصل':'Let’s connect'}<span aria-hidden="true">↗</span></a><Link className="ko-secondary" to="/#about">{ar?'اكتشف المسيرة':'Explore my journey'}<span aria-hidden="true">↓</span></Link></div>
 <div className="ko-signature"><strong>20<span>+</span></strong><span>{ar?'عامًا من الخبرة':'YEARS OF EXPERIENCE'}<small>{ar?'من الرؤية إلى التنفيذ':'From ambition to impact'}</small></span></div>
 </div><div className="ko-film"><div className="ko-film-heading"><span>{ar?'الرؤية عن قرب':'THE VISION, IN PERSON'}</span><span>01 /</span></div><div className="ko-film-frame"><video controls playsInline preload="metadata" aria-label={ar?'فيديو د. كمال عرابي':'Dr. Kamal Orabi introduction'}><source src={introVideo} type="video/mp4"/></video></div><div className="ko-film-caption"><span>{ar?'أفكار تصنع الفارق.':'Ideas that move businesses forward.'}</span><Link to="/videos">{ar?'كل الفيديوهات ↗':'All videos ↗'}</Link></div></div></div>
 <div className="ko-hero-footer"><span>TRADEMARK GROUPS</span><span>{ar?'استراتيجية الأعمال / القيادة / الاستثمار':'BUSINESS STRATEGY / LEADERSHIP / INVESTMENT'}</span></div></section>
}
