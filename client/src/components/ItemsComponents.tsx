import { Link } from "react-router-dom"
import Image from "../assets/photo.jpg"
import { CiStar } from "react-icons/ci"

export type ItemsComponentsProps = {
    type: string,
    user: User
    items: Item[]
}

export type Item = {
    id?: number,
    name: string,
    price: number,
    image: string,
    description: string
} & Partial<Game> & Partial<ItemToBuy> & Partial<Skin> & Partial<Account>


type User = {
    rating: string,
    username: string,
    image: string
}

type Game = {
    age: number,
    genre: string,
    platform: string,
    developer: string,
}

type ItemToBuy = {
    game: string,
}

type Skin = {
    weapon: string,
    rarity: string
}

type Account = {
    platform: string,
    level: number
}


const ItemsComponents = ({ type, items }: ItemsComponentsProps) => {
    
    items = [
        {
            name: "Cs",
            price: 1,
            image: "https://upload.wikimedia.org/wikipedia/en/4/4c/CS-GO_Logo.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quam veritatis aliquid a blanditiis dolorum fugit error! Rem perferendis laboriosam doloribus, adipisci molestias sapiente quam, quod aliquam at illum maxime aut delectus! Ex hic maxime dolores sequi neque, possimus itaque ea dicta at porro dolorum cum assumenda, reiciendis, quia quaerat.",
        },
        {
            name: "Cs",
            price: 1,
            image: "https://upload.wikimedia.org/wikipedia/en/4/4c/CS-GO_Logo.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quibusdam!",
        }
    ]

  return (
    <div className="bg-primary mt-2 mx-auto p-2 text-white
    max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl w-full mx-auto
    ">
        <>
            <p className="font-bold px-3 text-3xl my-3"> You are now watching for {type} </p>
        </>
        <div className="flex flex-col gap-4">
            {items.map((item) => {
                return (
                    <Link to={'/item/' + item.id}> 
                    <div className="bg-neutral p-2 mt-2 flex flex-col lg:flex-row cursor-pointer">
                        <div className="flex items-center justify-center">
                            <img className="p-3 w-48 h-48 lg:w-64 lg:h-64 object-fit" src={Image}/>
                        </div>
                        <div className="flex flex-col flex-1 lg:mt-3 justify-center items-center lg:items-start lg:justify-start">
                            <p className="font-bold text-2xl"> {item.name} </p>
                            <p className="font-light text-lg"> {item.description.length > 100 ? item.description.slice(0, 100) + "..." : item.description} </p>
                        </div>
                        <div className="flex flex-col flex-1"> 
                            <div className="flex justify-center flex-1 mt-2">
                                <h2 className="p-3 text-primary text-5xl font-bold"> {item.price} lei </h2>
                            </div>
                            <div className="flex items-center w-64 mx-auto rounded-lg p-4 flex-col flex-[2] text-neutral bg-primary justify-center">
                                <img src={Image} className="w-24 h-24 rounded-lg p-2"/>
                                <p> Seller: test123 </p>
                                <p className="flex items-center"> Ratings: 9.7/10 35 <CiStar className="ml-1 text-xl text-white rounded-lg bg-yellow-500" /> </p>
                            </div>
                        </div>
                    </div>
                    </Link>
                )
            })}

        </div>


    </div>
    )
}

export default ItemsComponents