import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Activity, Stethoscope, Monitor, Clock, Shield, CheckCircle, Calendar, Phone, MapPin } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Consulta Cardiológica",
      description: "Avaliação completa da saúde cardiovascular com exame físico detalhado e análise do histórico médico do paciente.",
      features: [
        "Anamnese detalhada",
        "Exame físico cardiovascular",
        "Orientações preventivas",
        "Plano de tratamento personalizado"
      ],
      duration: "60 minutos",
      price: "A partir de R$ 250"
    },
    {
      icon: Activity,
      title: "Eletrocardiograma (ECG)",
      description: "Exame que registra a atividade elétrica do coração, fundamental para detectar arritmias e outras alterações cardíacas.",
      features: [
        "Detecção de arritmias",
        "Avaliação de isquemia",
        "Análise do ritmo cardíaco",
        "Resultado imediato"
      ],
      duration: "30 minutos",
      price: "A partir de R$ 120"
    },
    {
      icon: Monitor,
      title: "Ecocardiograma",
      description: "Ultrassom do coração que permite visualizar estruturas e avaliar o funcionamento das câmaras e válvulas cardíacas.",
      features: [
        "Avaliação da função cardíaca",
        "Análise das válvulas",
        "Medição de câmaras",
        "Exame não invasivo"
      ],
      duration: "45 minutos",
      price: "A partir de R$ 350"
    },
    {
      icon: Heart,
      title: "Teste Ergométrico",
      description: "Avaliação da resposta cardiovascular durante o exercício físico, importante para diagnóstico de doenças coronárias.",
      features: [
        "Avaliação durante exercício",
        "Detecção de isquemia",
        "Análise da capacidade física",
        "Monitoramento contínuo"
      ],
      duration: "90 minutos",
      price: "A partir de R$ 280"
    },
    {
      icon: Clock,
      title: "Holter 24h",
      description: "Monitoramento contínuo do ritmo cardíaco por 24 horas para detectar arritmias intermitentes.",
      features: [
        "Monitoramento 24 horas",
        "Detecção de arritmias",
        "Registro de sintomas",
        "Análise detalhada"
      ],
      duration: "24 horas",
      price: "A partir de R$ 400"
    },
    {
      icon: Shield,
      title: "Check-up Cardiovascular",
      description: "Avaliação preventiva completa incluindo múltiplos exames para diagnóstico precoce de problemas cardíacos.",
      features: [
        "Bateria completa de exames",
        "Avaliação de risco",
        "Orientações preventivas",
        "Relatório detalhado"
      ],
      duration: "3 horas",
      price: "A partir de R$ 800"
    }
  ]

  const convênios = [
    "Unimed", "Bradesco Saúde", "SulAmérica", "Amil", "Golden Cross", 
    "Porto Seguro", "NotreDame Intermédica", "Prevent Senior"
  ]

  return (
    <section id="services" className="py-20 bg-white">
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
            <Heart className="h-4 w-4" />
            <span>Nossos Serviços</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-trust-blue mb-6">
            Serviços{' '}
            <span className="text-gradient">Especializados</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços cardiológicos com tecnologia avançada 
            e profissionais especializados para cuidar da saúde do seu coração.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-medical-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className="p-3 bg-gradient-medical rounded-xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </motion.div>
                  
                  <div className="text-right">
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Duração</div>
                    <div className="font-semibold text-medical-blue">{service.duration}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-trust-blue mb-3 group-hover:text-medical-blue transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-4 w-4 text-medical-light flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="font-semibold text-medical-blue">
                    {service.price}
                  </div>
                  
                  <motion.a
                    href="#contact"
                    className="bg-gradient-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Agendar
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Convênios Section */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-trust-blue mb-4">
              Convênios Aceitos
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trabalhamos com os principais convênios médicos para facilitar 
              o acesso aos nossos serviços cardiológicos especializados.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {convênios.map((convenio, index) => (
              <motion.div
                key={convenio}
                className="bg-white rounded-xl p-6 text-center hover:shadow-medical transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="font-semibold text-trust-blue">
                  {convenio}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-4">
              Não encontrou seu convênio? Entre em contato conosco!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-2 text-medical-blue font-semibold hover:text-medical-light transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="h-4 w-4" />
              <span>Consultar outros convênios</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Emergency Notice */}
        <motion.div
          className="bg-gradient-accent rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6"
            animate={{ pulse: 1.05 }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Shield className="h-8 w-8 text-white" />
          </motion.div>
          
          <h3 className="text-2xl font-bold mb-4">
            Atendimento de Emergência
          </h3>
          
          <p className="text-red-100 mb-6 leading-relaxed">
            Em caso de emergência cardiológica, entre em contato conosco imediatamente. 
            Temos suporte 24 horas para situações urgentes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:192"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5" />
              <span>Emergência: 192</span>
            </motion.a>
            
            <motion.a
              href="tel:+5511999999999"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="h-5 w-5" />
              <span>Agendamento</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}