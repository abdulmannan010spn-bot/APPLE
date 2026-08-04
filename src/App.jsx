import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import ProductView from "./Components/ProductView"
import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"
import Showcase from "./Components/Showcase"
import Performance from "./Components/Performance"
import Features from "./Components/Features"
import Highlights from "./Components/Highlights"
import Footer from "./Components/Footer"

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductView />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}
export default App