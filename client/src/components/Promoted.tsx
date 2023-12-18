import Card from './Card'

const Promoted = () => {

  return (
    <div className="mx-auto my-2 max-w-7xl bg-primary">
          <p className="bg-neutral p-3 text-white font-bold"> Promoted items </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 px-16 py-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>    
    </div>
  )
    
}

export default Promoted