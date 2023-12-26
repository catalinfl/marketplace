import { Link } from "react-router-dom"

const ListComponent = () => {
  return (
    <div className="bg-secondary mt-1 flex flex-row justify-center p-1 md:justify-start 
    max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl w-full mx-auto
    ">
        <Link to="/games">
          <button className="btn btn-primary rounded-none text-white"> Jocuri </button>
        </Link>
        <Link to="/items">
        <button className="btn btn-primary rounded-none text-white"> Iteme </button>
        </Link> 
        <Link to="/skins">
        <button className="btn btn-primary rounded-none text-white"> Skinuri </button>
        </Link>
        <Link to="/steam">
        <button className="btn btn-primary rounded-none text-white"> Steam </button>
        </Link>
        <Link to="/alt">
        <button className="btn btn-primary rounded-none text-white"> Altele </button>
        </Link>
    </div>
  )
}

export default ListComponent