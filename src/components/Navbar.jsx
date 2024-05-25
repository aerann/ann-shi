import { Link } from 'react-scroll'
const Navbar = () => {
    return (
      <>
        <nav className='sticky top-0 z-50 backdrop-blur-sm p-4 pr-7 xl:mb-28'>
          <ul className='flex flex-row justify-end items-center gap-10'>
            <li className='text-xl cursor-pointer'><Link to="about" spy={true} smooth={true} offset={-60} duration={500}>about</Link></li>
            <li className='text-xl cursor-pointer'><Link >projects</Link></li>
            <li className='text-xl cursor-pointer'><Link to="contact" spy={true} smooth={true} duration={500}>contact</Link></li>
          </ul>
        </nav>
      </>
    )
}
  
export default Navbar

// backdrop-blur-sm