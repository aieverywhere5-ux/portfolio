import { useState } from 'react'
import { Mail, MapPin, ArrowUpRight, Send } from 'lucide-react'
import { profile } from '../data'
import SectionHeading from '../components/SectionHeading'
export default function Contact() {
  const [form,setForm] = useState({name:'',email:'',message:''})
  const update = e => setForm({...form,[e.target.name]:e.target.value})
  const submit = e => {
    e.preventDefault()

    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()

    if (!name || !email || !message) return

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }
  return <div className="page-wrap inner-page">
    <SectionHeading eyebrow="GET IN TOUCH" title="Let's talk about what comes next." text="Have a role, project or collaboration in mind? Send a note and let's start a conversation."/>
    <div className="contact-layout">
      <div className="contact-info"><h2>Build something meaningful.</h2><p>I'm interested in conversations around SEO, digital marketing, growth strategy and collaboration.</p><a className="contact-line" href={`mailto:${profile.email}`}><Mail/> <span>{profile.email}</span><ArrowUpRight/></a><div className="contact-line"><MapPin/><span>Hyderabad, Telangana, India</span></div><div className="social-row"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.x} target="_blank" rel="noreferrer">X / Twitter ↗</a></div></div>
      <form className="contact-form" onSubmit={submit}><label>Your name<input name="name" value={form.name} onChange={update} required placeholder="Enter your name"/></label><label>Email address<input name="email" type="email" value={form.email} onChange={update} required placeholder="you@example.com"/></label><label>How can I help?<textarea name="message" value={form.message} onChange={update} required rows="5" placeholder="Tell me a little about your project..."/></label><button className="button" type="submit">Send message <Send size={16}/></button><small>This form opens your email app with the message prepared. It does not submit to a server.</small></form>
    </div>
  </div>
}
