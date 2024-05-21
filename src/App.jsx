import { useState } from 'react'
import { Navbar, NameCard, About } from './components'
import profilePic from './assets/profile.jpg'
//import NameCard from './components/NameCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body className='bg-gradient-to-b from-blue from-0% to-yellow to-90% min-h-screen min-w-0 p-10'>
        <div className='pt-96'> 

        <div className='flex flex-col items-start space-y-60 xs:px-1 lg:px-20 xl:px-40'>
          <NameCard />
          <About/>
        </div>
          
        </div>
      </body>
    </>
  )
}

export default App
