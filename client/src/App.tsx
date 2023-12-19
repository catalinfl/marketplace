import Footer from "./components/Footer"
import Hero from "./components/Hero"
import ListComponent from "./components/ListComponent"
import Navbar from "./components/Navbar"
import Promoted from "./components/Promoted"
import Recommanded from "./components/Recommanded"
function App() {

  return (
    <>
      <Navbar />
      <ListComponent />
      <Hero />
      <Promoted />
      <Recommanded />
      <Footer />
    </>
  )
}

export default App
