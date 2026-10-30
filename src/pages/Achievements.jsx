import SectionHeading from '../components/SectionHeading'
export default function Achievements() {
  const items = [
    ['1,000+','Doctor profiles managed and optimised','Medicover Hospitals'],
    ['8+','eCommerce clients supported','SEO, website and paid social work'],
    ['Top 10','Multiple Google keyword rankings','Across projects and client work'],
    ['Product Hunt','Product of the Day recognition','ASAAN.APP · March/April 2023']
  ]
  return <div className="page-wrap inner-page">
    <SectionHeading eyebrow="MILESTONES" title="Progress worth highlighting." text="Selected achievements and contributions documented across my professional experience."/>
    <div className="achievement-grid">{items.map((item,i)=><article className="achievement-card" key={item[0]}><span className="number">0{i+1}</span><strong>{item[0]}</strong><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
    <section className="subsection"><h2>Areas of contribution</h2><div className="simple-grid"><div className="mini-card"><h3>Healthcare SEO</h3><p>Multi-speciality SEO activities, local visibility and doctor profile optimisation.</p></div><div className="mini-card"><h3>Technical improvements</h3><p>Support for Web Stories, trailing slash consistency and technical SEO fixes.</p></div><div className="mini-card"><h3>eCommerce marketing</h3><p>SEO support, eCommerce tracking, image alt text and product listing optimisation.</p></div></div></section>
  </div>
}
