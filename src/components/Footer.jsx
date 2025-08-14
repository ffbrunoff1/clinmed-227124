import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Shield, Award } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' }
  ]

  const services = [
    { name: 'Consulta Cardiológica', href: '#services' },
    { name: 'Eletrocardiograma', href: '#services' },
    { name: 'Ecocardiograma', href: '#services' },
    { name: 'Teste Ergométrico', href: '#services' },
    { name: 'Holter 24h', href: '#services' },
    { name: 'Check-up Cardiovascular', href: '#services' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ]

  return (
    <footer className="bg-trust-blue text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-2 bg-gradient-medical rounded-xl">
                <Heart className="h-8 w-8 text-white animate-heartbeat" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">
                  Clinmed
                </span>
                <span className="text-sm font-medium text-blue-200">
                  Cardiologia
                </span>
              </div>
            </motion.div>

            <p className="text-blue-200 mb-6 leading-relaxed">
              Especialistas em cardiologia dedicados a oferecer cuidados excepcionais 
              para a saúde cardiovascular dos nossos pacientes.
            </p>

            {/* Certifications */}
            <div className="flex items-center space-x-4 mb-6">
              <motion.div
                className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="h-4 w-4 text-blue-300" />
                <span className="text-xs text-blue-200">CRM Ativo</span>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="h-4 w-4 text-blue-300" />
                <span className="text-xs text-blue-200">SBC</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-gradient-medical rounded-lg flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1 h-1 bg-blue-300 rounded-full group-hover:bg-white transition-colors duration-200"></span>
                    <span>{link.name}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={service.href}
                    className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1 h-1 bg-blue-300 rounded-full group-hover:bg-white transition-colors duration-200"></span>
                    <span className="text-sm">{service.name}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            
            <div className="space-y-4">
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+5511999999999" className="text-blue-200 hover:text-white transition-colors duration-200">
                    (11) 9999-9999
                  </a>
                  <p className="text-xs text-blue-300">Ligue para agendar</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:contato@clinmed.com.br" className="text-blue-200 hover:text-white transition-colors duration-200">
                    contato@clinmed.com.br
                  </a>
                  <p className="text-xs text-blue-300">Envie sua dúvida</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-200">
                    Rua das Clínicas, 123<br />
                    São Paulo, SP - CEP 01234-567
                  </p>
                  <p className="text-xs text-blue-300">Venha nos visitar</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Clock className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-200">
                    Segunda a Sexta: 7h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                  <p className="text-xs text-blue-300">Horário de atendimento</p>
                </div>
              </motion.div>
            </div>

            {/* Emergency Button */}
            <motion.a
              href="tel:192"
              className="inline-flex items-center space-x-2 bg-gradient-accent text-white px-4 py-3 rounded-lg font-semibold mt-6 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="h-4 w-4 animate-pulse" />
              <span className="text-sm">Emergência: 192</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-blue-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="text-blue-200 text-sm text-center md:text-left"
              whileHover={{ scale: 1.05 }}
            >
              © 2023 Clinmed. Todos os direitos reservados.
            </motion.div>
            
            <motion.div
              className="flex items-center space-x-2 text-blue-200 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span>Criado com</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>por</span>
              <motion.a
                href="https://papum.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-300 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
              >
                Papum
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}