// components/Header.js
const Header = () => (
    <header className="bg-white shadow-sm">
      <nav className="container flex items-center justify-between py-4">
        <a href="#">
          <img
            src="https://dsathemes.com/html/soltech_1.1/files/images/logo-indigo.png"
            width="180"
            height="40"
            alt="logo"
          />
        </a>
        <button
          className="lg:hidden focus:outline-none"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div className="hidden lg:block" id="navbarNav">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    
  );
  
  export default Header;
  