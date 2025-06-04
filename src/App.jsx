import './App.css'
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'
import Services from './components/Services/Services'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
