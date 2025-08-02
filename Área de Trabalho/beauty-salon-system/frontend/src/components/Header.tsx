import { useState } from 'react'
import { FiMenu, FiX, FiUser, FiCalendar, FiScissors } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">
            Beauty<span className="text-secondary">Style</span>
          </h1>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-primary transition-colors flex items-center">
            <FiScissors className="mr-1" /> Home
          </Link>
          <Link to="/services" className="hover:text-primary transition-colors flex items-center">
            <FiScissors className="mr-1" /> Serviços
          </Link>
          <Link to="/dashboard" className="hover:text-primary transition-colors flex items-center">
            <FiCalendar className="mr-1" /> Agendamentos
          </Link>
          <Link to="/profile" className="hover:text-primary transition-colors flex items-center">
            <FiUser className="mr-1" /> Perfil
          </Link>
        </nav>

        {/* Menu Mobile */}
        <button 
          className="md:hidden text-2xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white bg-opacity-95 md:hidden shadow-lg">
            <nav className="flex flex-col py-4">
              <Link 
                to="/" 
                className="py-3 px-6 hover:bg-gray-100 hover:text-primary transition-colors flex items-center"
                onClick={toggleMenu}
              >
                <FiScissors className="mr-2" /> Home
              </Link>
              <Link 
                to="/services" 
                className="py-3 px-6 hover:bg-gray-100 hover:text-primary transition-colors flex items-center"
                onClick={toggleMenu}
              >
                <FiScissors className="mr-2" /> Serviços
              </Link>
              <Link 
                to="/dashboard" 
                className="py-3 px-6 hover:bg-gray-100 hover:text-primary transition-colors flex items-center"
                onClick={toggleMenu}
              >
                <FiCalendar className="mr-2" /> Agendamentos
              </Link>
              <Link 
                to="/profile" 
                className="py-3 px-6 hover:bg-gray-100 hover:text-primary transition-colors flex items-center"
                onClick={toggleMenu}
              >
                <FiUser className="mr-2" /> Perfil
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header