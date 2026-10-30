import { projects } from '../data'
import SectionHeading from '../components/SectionHeading'
export default function Projects() {
  return <div className="page-wrap inner-page">
    <SectionHeading eyebrow="SELECTED WORK" title="Projects & case studies." text="A selection of projects and work areas from my professional experience. Outcomes are limited to details that can be substantiated."/>
    <div className="case-grid">{projects.map((p,i)=><article className="case-card" key={p.name}><div className="case-art"><span>0{i+1}</span><b>{p.name.split(' ').map(w=>w[0]).join('').slice(0,3).toUpperCase()}</b><small>{p.type.toUpperCase()}</small></div><div className="case-content"><span className="tag">{p.type}</span><h2>{p.name}</h2><p>{p.description}</p><div className="outcome"><span>DOCUMENTED EXPERIENCE</span><strong>{p.outcome}</strong></div></div></article>)}</div>
    <p className="note">Note: This portfolio intentionally avoids estimated traffic, revenue or conversion figures. Detailed project metrics can be added when verified reporting data is available.</p>
  </div>
}
