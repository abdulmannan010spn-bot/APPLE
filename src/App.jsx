import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import ProductView from "./Components/ProductView"
import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductView />
    </main>
  )
}
export default App