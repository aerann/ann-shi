import profilePic from '../assets/profile.jpg'

function NameCard() {
  return (
    <>
      <div className='relative w-full h-full flex flex-row justify-center'>
        
        <div className='relative xs:h-[300px] xs:w-[350px] 2xs:h-[400px] 2xs:w-[450px] sm:h-[400px] sm:w-[600px] md:h-[550px] md:w-[880px] lg:h-[550px] lg:w-[880px] xl:h-[615px] xl:w-[1000px] flex flex-col xs:items-end'>
          
          <img 
            src={profilePic} 
            alt="Profile of Ann" 
            className='absolute bottom-10 shadow-2xl right-[60%] xs:h-[225px] xs:w-[150px] 2xs:h-[375px] 2xs:w-[250px] sm:h-[375px] sm:w-[250px] md:h-[580px] md:w-[380px] lg:h-[600px] lg:w-[424px] xl:h-[608px] xl:w-[424px]' 
          />
          
          <p className="font-body xs:text-lg 2xs:text-2xl sm:text-2xl md:text-4xl xl:text-5xl pb-2 sm:pr-20">nice to meet you, i'm</p>

          <div className='bg-white-blue bg-opacity-60 box-border h-full w-full shadow-xl grid grid-cols-2 grid-rows-[35%,65%] pr-3 xl:pr-16'>
            <p className="mt-[-20px] xs:text-4xl 2xs:text-5xl sm:text-5xl md:text-8xl xl:text-9xl font-extrabold col-start-2 col-span-1 row-span-1 self-center">
              ann shi
            </p>
            <p className="xs:text-lg 2xs:text-2xl sm:text-2xl md:text-4xl xl:text-5xl col-start-2 row-start-2 col-span-1 row-span-2">
              third year software<br/>
              engineering student <br/> 
              @ mcmaster uni
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NameCard
