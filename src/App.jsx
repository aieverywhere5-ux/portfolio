import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
function NotFound() {
  return <div className="page-wrap inner-page"><h1>Page not found</h1><p>The page you are looking for does not exist.</p><a className="button" href="/">Back to home</a></div>
}
export default function App() {
  return <Routes><Route element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="services" element={<Services/>}/>
    <Route path="experience" element={<Experience/>}/>
    <Route path="projects" element={<Projects/>}/>
    <Route path="achievements" element={<Achievements/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Route></Routes>
}
