import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <h1 className='logo'>
        <span className='text-primary'>
          <i className='fas fa-car'></i> Westcoast
        </span>
        &nbsp; Cars
      </h1>
      <ul>
        <li>
          <NavLink to='/'>Start sida</NavLink>
        </li>
        <li>
          <NavLink to='/vehicles'>Lager fordon</NavLink>
        </li>
        <li>
          <NavLink to='/vehicles/add'>Lägg till nytt fordon</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
