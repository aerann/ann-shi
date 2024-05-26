import { Navbar, NameCard, About, Contact } from '../components'

const Home = () => {
  
  return (
    <>
        <div className='bg-gradient-to-b from-blue from-0% to-yellow to-90%'>
        <Navbar />
            <div className='min-h-screen min-w-0 p-10 xs:px-1 lg:px-20 xl:px-40'>
            <div className='flex flex-col items-start space-y-60 '>
                <NameCard />
                <About/>
                <div className='w-full flex flex-row xs:justify-center md:justify-end'>
                <Contact />
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Home
