import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, Clock, TrendingUp, ArrowRight, Shield, Zap, Target, MessageCircle, BarChart3, Globe, Eye, ChevronLeft, ChevronRight, Bot, Smartphone, RefreshCw } from 'lucide-react';

const MarketingAgencyLanding = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentCase, setCurrentCase] = useState(0);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // WhatsApp button visibility control
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const clientHeight = window.innerHeight;
      
      // Show WhatsApp button when user reaches 80% of the page
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;
      setShowWhatsApp(scrollPercentage > 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Carousel for testimonials
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, []);

  // Carousel for case studies
  useEffect(() => {
    const caseTimer = setInterval(() => {
      setCurrentCase(prev => (prev + 1) % caseStudies.length);
    }, 6000);
    return () => clearInterval(caseTimer);
  }, []);

  const testimonials = [
    {
      name: "Laura Martínez",
      role: "Directora de E-commerce",
      content: "Sus campañas de Google Ads nos generaron un ROAS de 8:1. Cada peso invertido nos devolvió 8 pesos en ventas.",
      company: "TechStyle MX"
    },
    {
      name: "Roberto Silva",
      role: "CEO Startup",
      content: "La automatización de leads por WhatsApp nos ahorró 15 horas semanales y aumentó la conversión 45%.",
      company: "InnovateMX"
    },
    {
      name: "Carmen López",
      role: "Marketing Manager",
      content: "Los chatbots inteligentes califican prospectos 24/7. Nunca perdemos un lead, incluso de madrugada.",
      company: "Digital Solutions"
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Moda",
      metric: "ROAS 12:1",
      description: "Campaña integrada Google + Meta Ads con remarketing dinámico que generó $3.2M MXN",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      title: "SaaS B2B",
      metric: "280% más leads",
      description: "Automatización completa: desde captura hasta cierre, integrando CRM con WhatsApp",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      title: "Clínica Dental",
      metric: "450% ROI SMS",
      description: "Campañas WhatsApp + SMS recordatorios que redujeron ausencias y aumentaron citas",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=250&fit=crop"
    }
  ];

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "SEM y Publicidad Digital de Alta Conversión",
      description: "Campañas optimizadas en Google Ads, Meta Ads y TikTok Ads que maximizan tu ROAS con segmentaciones inteligentes.",
      features: ["Google Ads optimizado", "Meta Ads (Facebook/Instagram)", "TikTok Ads", "Remarketing dinámico", "Optimización ROAS", "Embudos de conversión"]
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Automatización de Marketing y Ventas",
      description: "Integraciones con Make, Zapier y CRMs como HubSpot que automatizan desde captura hasta cierre de ventas.",
      features: ["Integración Make/Zapier", "CRM HubSpot/ActiveCampaign", "Respuesta automática leads", "Seguimiento WhatsApp", "Presupuestos automáticos", "Sincronización bases de datos"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Marketing Conversacional WhatsApp/SMS",
      description: "Chatbots inteligentes y campañas directas con +90% tasa de apertura que convierten prospectos 24/7.",
      features: ["Chatbots inteligentes", "Campañas WhatsApp masivas", "SMS marketing", "Calificación automática leads", "Respuesta inmediata", "Integración CRM"]
    }
  ];

  const whatsappMessage = "¡Hola! Vengo desde tu landing page y me interesa conocer más sobre automatización de marketing y campañas de alta conversión. ¿Podemos agendar una consulta gratuita?";
  const whatsappUrl = `https://wa.me/525572045735?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Fixed WhatsApp Button - Only shows when near bottom */}
      {showWhatsApp && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      )}

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Effects inspired by logo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-500"></div>
        </div>

        {/* Floating dots pattern like logo */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-40 ${Math.random() > 0.5 ? 'bg-orange-400' : 'bg-white'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo M */}
          <div className="mb-8 flex justify-center">
  
	<img
    src="/logo2.png"
    
	alt="Logo de la marca"
    
	className="w-32 md:w-48 lg:w-56 h-auto object-contain"
  
	/>

</div>


          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full text-sm font-medium mb-8">
            <Bot className="w-4 h-4 mr-2" />
            Automatización y Ads de Alta Conversión
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Optimiza tu Marketing
            <span className="block text-5xl md:text-7xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            con Sistemas Automatizados
            </span>
            <span className="block text-3xl md:text-4xl text-gray-300">que Amplifican tus Resultados</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Campañas SEM optimizadas por expertos, procesos de ventas automatizados que nunca fallan y marketing conversacional por WhatsApp que convierte más leads.
            <span className="text-orange-400 font-semibold"> Todo integrado para generar ventas 24/7.</span>
          </p>

          {/* Social Proof Numbers */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">ROAS 8:1</div>
              <div className="text-sm text-gray-400">Promedio Garantizado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">90%+</div>
              <div className="text-sm text-gray-400">Tasa Apertura WhatsApp</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">Captura Automática</div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-orange-500/30 inline-block">
            <div className="text-orange-400 font-semibold mb-2 flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2 animate-pulse" />
              AUDITORÍA GRATUITA LIMITADA:
            </div>
            <div className="flex space-x-4 text-center">
              <div className="bg-gradient-to-b from-orange-500 to-orange-700 px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs">HORAS</div>
              </div>
              <div className="text-2xl self-center animate-pulse">:</div>
              <div className="bg-gradient-to-b from-orange-500 to-orange-700 px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs">MIN</div>
              </div>
              <div className="text-2xl self-center animate-pulse">:</div>
              <div className="bg-gradient-to-b from-orange-500 to-orange-700 px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs">SEG</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50"
            >
              <span className="relative z-10 flex items-center justify-center">
                AUDITORÍA GRATUITA POR WHATSAPP
                <MessageCircle className="w-6 h-6 ml-2 group-hover:scale-110 transition-transform" />
              </span>
            </a>
            
            <div className="text-sm text-gray-400">
              <Shield className="w-4 h-4 inline mr-1" />
              Auditoría completa gratis • Respuesta en 5 minutos • Plan personalizado
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 bg-black bg-opacity-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
            Nuestros Servicios de Alto Impacto
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-b from-blue-900/30 to-transparent p-8 rounded-2xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="text-orange-400 mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Carousel */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Resultados Reales de Automatización
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentCase * 100}%)` }}
              >
                {caseStudies.map((case_, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-r from-blue-900/50 to-orange-900/30 rounded-2xl overflow-hidden border border-orange-500/30">
                      <img src={case_.image} alt={case_.title} className="w-full h-48 object-cover" />
                      <div className="p-8 text-center">
                        <h3 className="text-2xl font-bold mb-2">{case_.title}</h3>
                        <div className="text-4xl font-bold text-orange-400 mb-4">{case_.metric}</div>
                        <p className="text-gray-300">{case_.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={() => setCurrentCase(prev => prev === 0 ? caseStudies.length - 1 : prev - 1)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentCase(prev => (prev + 1) % caseStudies.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCase(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentCase ? 'bg-orange-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="py-20 px-4 bg-black bg-opacity-30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
            Clientes que Automatizaron y Crecieron
          </h2>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-xl text-gray-200 italic mb-6">"{testimonial.content}"</p>
                      <div className="font-semibold text-orange-300">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role} - {testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-orange-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
            Cómo Automatizamos tu Crecimiento
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Auditoría Completa", desc: "Analizamos tus campañas actuales y identificamos oportunidades de ROAS" },
              { step: "2", title: "Configuración SEM", desc: "Optimizamos Google/Meta Ads con segmentaciones y remarketing inteligente" },
              { step: "3", title: "Automatización", desc: "Integramos CRM, WhatsApp y procesos de seguimiento automático" },
              { step: "4", title: "Escalamiento", desc: "Monitoreamos y optimizamos para maximizar resultados 24/7" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-300">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-orange-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            ¿Listo para Automatizar tus Ventas?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Obtén una auditoría completa GRATIS y descubre cómo multiplicar tu ROAS automáticamente.
          </p>
          
          <div className="bg-black bg-opacity-50 rounded-2xl p-8 mb-8">
            <div className="text-3xl font-bold mb-4 text-orange-400">
              Auditoría Completa de $3,500 MXN
            </div>
            <div className="text-xl mb-6 text-gray-300">
              ¡GRATIS por tiempo limitado!
            </div>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-gradient-to-r from-green-500 to-green-600 text-white px-16 py-6 rounded-full text-2xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 mb-4"
            >
              <MessageCircle className="w-8 h-8 mr-3" />
              ¡QUIERO MI AUDITORÍA GRATUITA!
            </a>
            
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                Análisis campañas actuales
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                Plan de automatización
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                Proyección ROAS
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-500 mt-8">
            * El botón de WhatsApp aparece cuando llegas hasta aquí para no ser invasivo 😉
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingAgencyLanding;