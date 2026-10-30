import { experience } from '../data'
import SectionHeading from '../components/SectionHeading'
export default function Experience() {
  return <div className="page-wrap inner-page">
    <SectionHeading eyebrow="CAREER JOURNEY" title="Experience that keeps evolving." text="Roles and responsibilities across healthcare, SaaS and digital marketing environments."/>
    <div className="experience-list">{experience.map((job,i)=><article className="experience-card" key={job.company}><div className="experience-top"><span className="number">0{i+1}</span><span className="period">{job.period}</span></div><h2>{job.role}</h2><h3>{job.company}</h3><ul>{job.points.map(point=><li key={point}>{point}</li>)}</ul></article>)}</div>
    <section className="subsection"><h2>Tools & platforms</h2><div className="tool-cloud">{['Google Search Console','Google Analytics','Google Tag Manager','Google Trends','SEMrush','Ahrefs','SpyFu','Google Ads','Meta Ads','WordPress','Canva','Instantly','Keyword Research','CRO','AI Tools'].map(t=><span key={t}>{t}</span>)}</div></section>
  </div>
}
