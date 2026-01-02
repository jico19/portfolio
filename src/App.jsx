import HomePage from "./page/Home"
import Navbar from "./component/navbar"
import Projects from "./page/Projects"
import SkillsSection from "./page/Skills"
import Contact from "./page/Contact"
import Footer from "./component/footer"


function App() {

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <Navbar />
      <div className="flex flex-col">
        <HomePage />
        <Projects />
        <SkillsSection />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
