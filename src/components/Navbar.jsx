import { Link } from 'react-scroll'
const Navbar = () => {
    return (
      <>
        <nav className='sticky top-0 z-50 backdrop-blur-sm p-4 pr-7 xl:mb-28'>
          <ul className='flex flex-row justify-end items-center gap-10'>
            <li className='nav-item text-xl cursor-pointer hover:text-grey'><Link to="namecard" activeClass="active" spy={true} smooth={true} offset={-150} duration={500}>home</Link></li>
            <li className='nav-item text-xl cursor-pointer hover:text-grey'><Link to="about" spy={true} smooth={true} offset={-50} duration={500}>about</Link></li>
            {/* <li className='nav-item text-xl cursor-pointer hover:text-grey'><Link to="/projects">projects</Link></li> */}
            <li className='nav-item text-xl cursor-pointer hover:text-grey'><Link to="contact" offset={800} spy={true} smooth={true} duration={500}>contact</Link></li>
          </ul>
        </nav>
      </>
    )
}
  
export default Navbar

