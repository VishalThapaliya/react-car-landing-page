import './Navbar.css';
import logo from '../../assets/logo.avif';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-logo">
        <img src={logo} alt="Peugeot logo" />
      </div>
      <ul className='navbar-nav'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar