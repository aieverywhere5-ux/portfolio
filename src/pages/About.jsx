import SectionHeading from '../components/SectionHeading'
import { profile } from '../data'
export default function About() {
  return <div className="page-wrap inner-page">
    <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious by nature. Strategic by practice." text="I enjoy understanding how people search, what they need and how brands can provide a better digital experience."/>
    <div className="about-layout">
      <div className="about-visual"><div className="about-initials">ST</div><span>SEO / AEO / GEO / SXO</span></div>
      <div className="prose"><h3>Hello, I'm Shaik Thaheed.</h3><p>{profile.summary}</p><p>My work spans healthcare, SaaS and eCommerce environments. I combine search strategy with content optimisation, technical SEO, analytics and paid campaign experience to support business goals.</p><p>I value clear communication, thoughtful experimentation and decisions backed by data. I work closely with content, design and development teams to turn opportunities into practical improvements.</p><div className="fact-list"><div><span>Location</span><b>{profile.location}</b></div><div><span>Experience</span><b>5.5+ years</b></div><div><span>Focus</span><b>Organic growth & digital performance</b></div></div></div>
    </div>
    <section className="subsection"><h2>Education</h2><div className="timeline-item"><span>2021</span><div><h3>MBA – Marketing, Logistics & Green Supply Chain Management</h3><p>GEMS B School, Bangalore</p></div></div><div className="timeline-item"><span>2019</span><div><h3>B.Com – Computer Applications</h3><p>Krishna Chaitanya Educational Institutions, Andhra Pradesh</p></div></div></section>
    <section className="subsection"><h2>Certifications</h2><div className="simple-grid"><div className="mini-card"><h3>Google Digital Marketing Fundamentals</h3><p>Digital marketing fundamentals certification.</p></div><div className="mini-card"><h3>Digital Marketing Course</h3><p>Hyderabad · 2021</p></div></div></section>
  </div>
}
