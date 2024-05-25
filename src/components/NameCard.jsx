import profilePic from '../assets/profile.jpg'

function NameCard() {
  return (
    <>
      <div className='w-full h-full flex flex-row justify-center'>
        
        <div className='relative xs:h-[300px] xs:w-[350px] 2xs:h-[400px] 2xs:w-[450px] sm:h-[400px] sm:w-[600px] md:h-[550px] md:w-[880px] lg:h-[550px] lg:w-[880px] xl:h-[615px] xl:w-[1500px] flex flex-col xs:items-center'>
          
          <img 
            src={profilePic} 
            alt="Profile of Ann" 
            className='absolute xs:left-[1%] bottom-[20%] sm:left-[10%] sm:bottom-[25%] xl:left-[15%] xl:bottom-[30%] shadow-2xl xs:h-[225px] xs:w-[150px] 2xs:h-[290px] 2xs:w-[200px] sm:h-[325px] sm:w-[220px] md:h-[440px] md:w-[300px] xl:h-[500px] xl:w-[350px]' 
          />
          
          <div className="grid grid-cols-2 grid-rows-[35%,65%] box-border w-[85%] pr-9">
            <p className="font-body xs:text-sm 2xs:text-lg sm:text-2xl md:text-4xl  col-start-2 col-span-1 row-span-1 pb-2">nice to meet you, i'm</p>
          </div>

          <div className='bg-white-blue bg-opacity-60 box-border h-4/6 w-[85%] shadow-xl grid grid-cols-2 grid-rows-[35%,65%] pr-7 pt-5'>
            <h5 className="mt-[-20px] xs:text-4xl 2xs:text-4xl sm:text-5xl md:text-8xl font-extrabold col-start-2 col-span-1 row-span-1 self-center">
              ann shi
            </h5>
            <p className="xs:text-sm 2xs:text-lg sm:text-2xl md:text-4xl col-start-2 row-start-2 col-span-1 row-span-2">
              third year software<br/>
              engineering student <br/> 
              @ mcmaster university
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NameCard
