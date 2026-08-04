import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import ProductView from "./Components/ProductView"
import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"
import Showcase from "./Components/Showcase"

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductView />
      <Showcase />
    </main>
  )
}
export default App