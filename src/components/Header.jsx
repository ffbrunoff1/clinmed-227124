import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Menu, X, Phone, Calendar, MapPin } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' }
  ]

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-medical' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={`p-2 rounded-xl ${
              isScrolled 
                ? 'bg-gradient-medical text-white' 
                : 'bg-white/20 backdrop-blur-sm text-white'
            }`}>
              <Heart className="h-8 w-8 animate-heartbeat" />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold ${
                isScrolled ? 'text-trust-blue' : 'text-white'
              }`}>
                Clinmed
              </span>
              <span className={`text-sm font-medium ${
                isScrolled ? 'text-medical-blue' : 'text-blue-200'
              }`}>
                Cardiologia
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-medical-blue' 
                    : 'text-white hover:text-blue-200'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="tel:+5511999999999"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isScrolled
                  ? 'text-medical-blue hover:bg-blue-50'
                  : 'text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">Ligar</span>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="bg-gradient-accent text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="h-4 w-4 inline mr-2" />
              Agendar
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-lg rounded-lg mt-2 shadow-medical">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:text-medical-blue font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 py-2 space-y-3">
              <a
                href="tel:+5511999999999"
                className="flex items-center space-x-2 text-medical-blue font-medium"
              >
                <Phone className="h-4 w-4" />
                <span>Ligar Agora</span>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center space-x-2 bg-gradient-accent text-white px-4 py-2 rounded-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Calendar className="h-4 w-4" />
                <span>Agendar Consulta</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}