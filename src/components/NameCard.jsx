import profilePic from '../assets/profile2.jpg'
import SentenceAnimation from '../animations/SentenceAnimation.jsx'
import { motion } from 'framer-motion'

function NameCard() {
  return (
    <>
      <div className='w-full h-full flex flex-row justify-center' id='namecard'>
        
        <div className='relative xs:h-[300px] xs:w-[350px] 2xs:h-[400px] 2xs:w-[450px] sm:h-[400px] sm:w-[600px] md:h-[550px] md:w-[880px] lg:h-[550px] lg:w-[880px] xl:h-[615px] xl:w-[1500px] flex flex-col xs:items-center'>
          
          <div className="grid grid-cols-2 grid-rows-[35%,65%] box-border w-[85%] pr-9">
            <p className="font-body xs:text-sm 2xs:text-lg sm:text-2xl md:text-3xl col-start-2 col-span-1 row-span-1 pb-2">
              <SentenceAnimation text={"nice to meet you, i'm"}/>
            </p>
          </div>

          <motion.img 
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 2, ease: "easeOut" }}
            src={profilePic} 
            alt="Profile of Ann" 
            className='z-10 absolute xs:left-[1%] bottom-[20%] sm:left-[10%] sm:bottom-[25%] md:bottom-[28%] xl:left-[15%] xl:bottom-[30%] shadow-2xl xs:h-[190px] xs:w-[140px] 2xs:h-[290px] 2xs:w-[200px] sm:h-[325px] sm:w-[220px] md:h-[420px] md:w-[300px] xl:h-[500px] xl:w-[350px]' 
          />

          <motion.div 
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 2 }}
            className='bg-muted-grey bg-opacity-60 box-border h-4/6 w-[85%] shadow-xl grid grid-cols-2 grid-rows-[35%,65%] pr-7 pt-5'
          >
            <h5 className="mt-[-20px] xs:text-4xl 2xs:text-4xl sm:text-5xl md:text-7xl font-extrabold col-start-2 col-span-1 row-span-1 self-center">
              ann shi
            </h5>
            <p className="xs:text-sm 2xs:text-lg sm:text-2xl md:text-3xl col-start-2 row-start-2 col-span-1 row-span-2">
              third year software<br/>
              engineering student <br/> 
              @ mcmaster university
            </p>
          </motion.div>

        </div>
      </div>
    </>
  )
}

export default NameCard

// 'xs': "375px",
// '2xs': "620px",
// 'sm': "800px",
// 'md': "1050px",
// 'lg': "1250px",
// 'xl': "1500px",
