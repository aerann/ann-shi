import { Navbar, NameCard, About, Contact } from '../components'
import { motion }  from 'framer-motion'

const Home = () => {
  
  return (
    <>
        <div className='bg-gradient-to-b from-beige from-0% to-dark-beige to-90%'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 2, ease: "easeOut" }}
            className = "sticky top-0 z-50"
          >
            <Navbar />
          </motion.div>
            <div className='min-h-screen min-w-0 p-10 xs:px-1 lg:px-20 xl:px-40'>
            <div className='flex flex-col items-start space-y-20 '>
                <NameCard />
                <About/>
                <div className='w-full flex flex-row xs:justify-center md:justify-end mt-14'>
                <Contact />
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Home
