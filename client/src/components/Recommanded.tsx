import { motion } from 'framer-motion'
import Card from './Card'

const Promoted = () => {

    const variants = {
        visible: (i: number) => ({
          opacity: 1,
          transition: {
            delay: i * 0.3,
          },
        }),
        hidden: { opacity: 0 },
      }
    
    const d = [1, 2, 3, 4]

  return (
    <div className="mx-auto my-2 max-w-7xl bg-primary">
          <p className="bg-neutral p-3 text-white font-bold"> Recommanded items  </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 px-16 py-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        
        {
        d.map((_, i) => {
        return (
            <motion.div
            key={i}
            variants={variants}
            animate="visible"
            initial="hidden"
            custom={i}
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