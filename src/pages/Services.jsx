import { services } from '../data'
import SectionHeading from '../components/SectionHeading'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function Services() {
  return <div className="page-wrap inner-page">
    <SectionHeading eyebrow="WHAT I CAN HELP WITH" title="Digital marketing services." text="A connected set of capabilities to improve discoverability, attract relevant audiences and strengthen digital experiences."/>
    <div className="service-grid">{services.map((s,i)=><article className="service-card" key={s[0]}><span className="number">{String(i+1).padStart(2,'0')}</span><h3>{s[0]}</h3><p>{s[1]}</p></article>)}</div>
    <div className="page-callout"><div><h2>Have a specific growth challenge?</h2><p>Let's discuss your goals and identify the right starting point.</p></div><Link className="button" to="/contact">Discuss a project <ArrowUpRight size={16}/></Link></div>
  </div>
}
