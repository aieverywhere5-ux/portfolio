import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, MoveUpRight, Search, Target, BarChart3 } from 'lucide-react'
import { profile, services, projects } from '../data'
import SectionHeading from '../components/SectionHeading'

export default function Home() {
  return <>
    <section className="hero page-wrap">
      <div className="hero-copy">
        <span className="availability"><i/> OPEN TO SELECT OPPORTUNITIES</span>
        <p className="eyebrow">DIGITAL MARKETING · SEO · GROWTH</p>
        <h1>Making brands<br/> <span>easier to find.</span></h1>
        <p className="hero-intro">{profile.summary}</p>
        <div className="hero-actions"><Link className="button" to="/projects">Explore my work <ArrowUpRight size={17}/></Link><Link className="text-link" to="/contact">Let's work together <MoveUpRight size={16}/></Link></div>
        <div className="hero-meta"><span>BASED IN {profile.location.toUpperCase()}</span><span>5.5+ YEARS EXPERIENCE</span></div>
      </div>
      <div className="hero-art">
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="hero-monogram">ST<span>+</span></div>
        <div className="floating-card card-top"><Search size={17}/><span>Search visibility</span><b>SEO</b></div>
        <div className="floating-card card-bottom"><BarChart3 size={18}/><span>Growth mindset</span><b>DATA</b></div>
        <div className="hero-stamp">STRATEGY<br/>MEETS<br/>EXECUTION</div>
      </div>
    </section>
    <section className="proof-strip page-wrap">
      <div><strong>5.5+</strong><span>Years in digital marketing</span></div>
      <div><strong>1,000+</strong><span>Doctor profiles optimised</span></div>
      <div><strong>8+</strong><span>eCommerce clients supported</span></div>
      <div><strong>360°</strong><span>Full-funnel perspective</span></div>
    </section>
    <section className="section page-wrap">
      <SectionHeading eyebrow="WHAT I DO" title="Strategy with a search-first mindset." text="I connect technical foundations, useful content and performance campaigns to help brands grow their digital presence."/>
      <div className="service-preview">{services.slice(0,4).map((s,i)=><article className="mini-card" key={s[0]}><span className="number">0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p></article>)}</div>
      <Link className="inline-link" to="/services">View all services <ArrowUpRight size={16}/></Link>
    </section>
    <section className="section section-muted">
      <div className="page-wrap">
        <SectionHeading eyebrow="SELECTED WORK" title="Projects grounded in real work." text="A snapshot of healthcare, SaaS and eCommerce marketing experience."/>
        <div className="project-grid">{projects.slice(0,3).map((p,i)=><article className="project-card" key={p.name}><span className="project-index">0{i+1} / CASE STUDY</span><span className="tag">{p.type}</span><h3>{p.name}</h3><p>{p.description}</p><strong>{p.outcome}</strong></article>)}</div>
        <Link className="inline-link" to="/projects">Explore case studies <ArrowUpRight size={16}/></Link>
      </div>
    </section>
    <section className="cta-band page-wrap"><div><span className="eyebrow">HAVE A PROJECT IN MIND?</span><h2>Let's make your next move count.</h2></div><Link className="button" to="/contact">Start a conversation <ArrowUpRight size={17}/></Link></section>
  </>
}
