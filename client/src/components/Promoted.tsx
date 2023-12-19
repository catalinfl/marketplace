import { motion } from 'framer-motion'
import Card from './Card'
import { itemsVariant } from '../utils/framer'

const Promoted = () => {

  return (
    <div className="my-2 bg-primary
    max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl w-full mx-auto
    ">
          <p className="bg-neutral p-3 text-white font-bold"> Promoted items </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 px-16 py-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {
        Array.from([1, 2, 3, 4]).map((_, i) => {
        return (
            <motion.div
            key={i}
            variants={itemsVariant}
            initial="hidden"
            whileInView={itemsVariant.visible(i)}
            viewport={{ once: true }}
            >
                <Card />
            </motion.div>
        )            
        })
        }
        </div>    
    </div>
  )
    
}

export default Promoted