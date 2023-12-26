import Footer from '../components/Footer'
import ItemsComponents from '../components/ItemsComponents'
import Navbar from '../components/Navbar'

const Games = () => {

  return (
    <> 
        <Navbar />
        <ItemsComponents type={"games"} />    
        <Footer />
    </>
    )
}

export default Games