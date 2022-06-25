import navbarStyle from './Navbar.module.css'

const Navbar = () => {
  return (
   <nav>
    <ul className={navbarStyle['title']}>
        <li>ABOUT US</li>
        <li>FOR YOU</li>
        <li>SERVICE</li>
        <li>BLOG</li>
        <li>VLOG</li>
        <li>CONTACT</li>
    </ul>
   </nav>
  )
}

export default Navbar;