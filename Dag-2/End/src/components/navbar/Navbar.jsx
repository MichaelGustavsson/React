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
          <a href='./'>Start sida</a>
        </li>
        <li>
          <a href='#'>Lager fordon</a>
        </li>
        <li>
          <a href='#'>Lägg till nytt fordon</a>
        </li>
        <li>
          <a href='#'>Logga In</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
