import { Navbar, NameCard, About, Contact } from '../components'

const Home = () => {
  
  return (
    <>
        <div className='bg-gradient-to-b from-beige from-0% to-dark-beige to-90%'>
        <Navbar />
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
