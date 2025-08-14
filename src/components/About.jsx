import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Users, Award, Target, Stethoscope, Activity, CheckCircle } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compaixão",
      description: "Tratamos cada paciente com empatia e dedicação, compreendendo suas necessidades únicas."
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Priorizamos protocolos rigorosos e tecnologia avançada para garantir a segurança dos nossos pacientes."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos constantemente a perfeição em nossos serviços e tratamentos cardiológicos."
    },
    {
      icon: Users,
      title: "Humanização",
      description: "Acreditamos no atendimento humanizado, criando um ambiente acolhedor e confortável."
    }
  ]

  const achievements = [
    "Mais de 1000 procedimentos cardiológicos realizados com sucesso",
    "Taxa de satisfação dos pacientes superior a 95%",
    "Certificação em cardiologia pela Sociedade Brasileira de Cardiologia",
    "Tecnologia de última geração em diagnósticos cardiovasculares",
    "Equipe médica especializada com anos de experiência",
    "Atendimento 24 horas para emergências cardiológicas"
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-medical text-white px-6 py-2 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Stethoscope className="h-4 w-4" />
            <span>Sobre a Clinmed</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-trust-blue mb-6">
            Especialistas em{' '}
            <span className="text-gradient">Cardiologia</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A Clinmed é uma clínica especializada em cardiologia, dedicada a oferecer 
            cuidados excepcionais para a saúde cardiovascular dos nossos pacientes.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-trust-blue mb-6">
              Nossa Missão e Compromisso
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Na Clinmed, nossa missão é proporcionar cuidados cardiológicos de excelência, 
              utilizando tecnologia avançada e uma abordagem personalizada para cada paciente. 
              Acreditamos que a prevenção e o diagnóstico precoce são fundamentais para uma vida saudável.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nossa equipe é formada por cardiologistas experientes e dedicados, que trabalham 
              incansavelmente para oferecer tratamentos eficazes e um atendimento humanizado, 
              sempre com foco na recuperação e bem-estar dos nossos pacientes.
            </p>

            {/* Achievements List */}
            <div className="space-y-3">
              {achievements.slice(0, 3).map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-medical-light flex-shrink-0" />
                  <span className="text-gray-600">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats & Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { number: "5+", label: "Anos de Experiência", icon: Award },
                { number: "1000+", label: "Pacientes Atendidos", icon: Users },
                { number: "95%", label: "Taxa de Satisfação", icon: Heart },
                { number: "24h", label: "Suporte Emergencial", icon: Shield }
              ].map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    className="bg-white rounded-xl p-6 shadow-medical hover:shadow-medical-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <IconComponent className="h-8 w-8 text-medical-blue" />
                      <motion.div
                        className="text-3xl font-bold text-trust-blue"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {stat.number}
                      </motion.div>
                    </div>
                    <p className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            {/* Decorative Element */}
            <motion.div
              className="relative bg-gradient-medical rounded-2xl p-8 text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <Activity className="h-8 w-8 text-white" />
                <h4 className="text-2xl font-bold">Tecnologia Avançada</h4>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Utilizamos equipamentos de última geração para diagnósticos precisos 
                e tratamentos eficazes, garantindo os melhores resultados para nossos pacientes.
              </p>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-12 h-12 bg-white/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-8 h-8 bg-white/20 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-trust-blue mb-4">
            Nossos Valores
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Os princípios que orientam nosso trabalho e definem nossa identidade como 
            profissionais da saúde cardiovascular.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={value.title}
                className="bg-white rounded-xl p-8 shadow-medical hover:shadow-medical-lg transition-all duration-300 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-medical rounded-full mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </motion.div>
                
                <h4 className="text-xl font-bold text-trust-blue mb-4 group-hover:text-medical-blue transition-colors duration-300">
                  {value.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-8 text-lg">
            Pronto para cuidar da saúde do seu coração com quem entende do assunto?
          </p>
          
          <motion.a
            href="#contact"
            className="inline-flex items-center space-x-3 bg-gradient-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="h-5 w-5" />
            <span>Agendar Consulta</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}