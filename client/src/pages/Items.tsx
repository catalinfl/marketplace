import Footer from "../components/Footer"
import ItemsComponents from "../components/ItemsComponents"
import Navbar from "../components/Navbar"

const Items = () => {
  return (
    <> 
        <Navbar />
        <ItemsComponents type={"items"} />    
        <Footer />
    </>
    )
}

export default Items