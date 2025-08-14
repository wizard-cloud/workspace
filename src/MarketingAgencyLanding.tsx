import React, { useState, useEffect } from "react";
import {
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  ArrowRight,
  Shield,
  Zap,
  Target,
  MessageCircle,
  BarChart3,
  Globe,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const MarketingAgencyLanding = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentCase, setCurrentCase] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
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
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, []);

  // Carousel for case studies
  useEffect(() => {
    const caseTimer = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % caseStudies.length);
    }, 6000);
    return () => clearInterval(caseTimer);
  }, []);

  const testimonials = [
    {
      name: "Laura Martínez",
      role: "Directora de E-commerce",
      content:
        "Increíble trabajo. Lograron que nuestras ventas online crecieran 280% en solo 3 meses.",
      company: "TechStyle MX",
    },
    {
      name: "Roberto Silva",
      role: "CEO Startup",
      content:
        "Su estrategia de publicidad pagada nos generó más de 500 leads calificados el primer mes.",
      company: "InnovateMX",
    },
    {
      name: "Carmen López",
      role: "Marketing Manager",
      content:
        "La analítica detallada nos ayudó a optimizar nuestro ROI en un 420%. Profesionales excepcionales.",
      company: "Digital Solutions",
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce Fashion",
      metric: "380% ROI",
      description:
        "Campaña de Facebook e Instagram Ads que generó $2.4M MXN en ventas",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    },
    {
      title: "SaaS B2B",
      metric: "150% más leads",
      description:
        "Estrategia integral que triplicó la generación de prospectos calificados",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    },
    {
      title: "Restaurante Local",
      metric: "250% ventas",
      description:
        "Campaña local que aumentó pedidos a domicilio y reservaciones",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
    },
  ];

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Publicidad Pagada",
      description:
        "Campañas optimizadas en Facebook, Google y LinkedIn que maximizan tu ROI y generan leads calificados.",
      features: [
        "Google Ads",
        "Facebook Ads",
        "LinkedIn Ads",
        "Optimización ROI",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Páginas Atractivas",
      description:
        "Diseño web moderno y optimizado para conversiones que transforma visitantes en clientes.",
      features: [
        "Diseño UX/UI",
        "Responsive",
        "Velocidad optimizada",
        "SEO básico",
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analítica de Campañas",
      description:
        "Reportes detallados y análisis profundo para tomar decisiones basadas en datos reales.",
      features: [
        "Google Analytics",
        "Reportes personalizados",
        "KPIs relevantes",
        "Optimización continua",
      ],
    },
  ];

  const whatsappMessage =
    "¡Hola! Vengo desde tu landing page y me interesa conocer más sobre sus servicios de marketing digital. ¿Podemos agendar una consulta gratuita?";
  const whatsappUrl = `https://wa.me/525572045735?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Fixed WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

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
              className={`absolute rounded-full opacity-40 ${
                Math.random() > 0.5 ? "bg-orange-400" : "bg-white"
              }`}
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

        <div
          className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
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
            <TrendingUp className="w-4 h-4 mr-2" />
            Marketing Digital de Resultados
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Multiplica tus Ventas con
            <span className="block text-5xl md:text-7xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Marketing Digital
            </span>
            <span className="block text-3xl md:text-4xl text-gray-300">
              que SÍ Funciona
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Estrategias probadas de publicidad digital, páginas web optimizadas
            y analítica avanzada.
            <span className="text-orange-400 font-semibold">
              {" "}
              Resultados garantizados en 30 días.
            </span>
          </p>

          {/* Social Proof Numbers */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">+2.5M</div>
              <div className="text-sm text-gray-400">MXN Generados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">320%</div>
              <div className="text-sm text-gray-400">ROI Promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">48h</div>
              <div className="text-sm text-gray-400">Para Resultados</div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-orange-500/30 inline-block">
            <div className="text-orange-400 font-semibold mb-2 flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2 animate-pulse" />
              CONSULTA GRATUITA LIMITADA:
            </div>
            <div className="flex space-x-4 text-center">
              <div className="bg-gradient-to-b from-orange-500 to-orange-700 px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-xs">HORAS</div>
              </div>
              <div className="text-2xl self-center animate-pulse">:</div>
              <div className="bg-gradient-to-b from-orange-500 to-orange-700 px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-xs">MIN</div>
              </div>
              <div className="text-2xl self-center animate-pulse">:</div>
              <div className="bg-gradient-to-b from-orange-500 to-orange-700 px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
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
                CONSULTA GRATUITA POR WHATSAPP
                <MessageCircle className="w-6 h-6 ml-2 group-hover:scale-110 transition-transform" />
              </span>
            </a>

            <div className="text-sm text-gray-400">
              <Shield className="w-4 h-4 inline mr-1" />
              Sin compromiso • Respuesta en 5 minutos • Estrategia personalizada
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 bg-black bg-opacity-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
            Servicios que Impulsan tu Negocio:
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-blue-900/30 to-transparent p-8 rounded-2xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-400"
                    >
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
            Casos de Éxito Comprobados
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
                      <img
                        src={case_.image}
                        alt={case_.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-8 text-center">
                        <h3 className="text-2xl font-bold mb-2">
                          {case_.title}
                        </h3>
                        <div className="text-4xl font-bold text-orange-400 mb-4">
                          {case_.metric}
                        </div>
                        <p className="text-gray-300">{case_.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={() =>
                setCurrentCase((prev) =>
                  prev === 0 ? caseStudies.length - 1 : prev - 1
                )
              }
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() =>
                setCurrentCase((prev) => (prev + 1) % caseStudies.length)
              }
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
                    index === currentCase ? "bg-orange-500" : "bg-gray-600"
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
            Lo que Dicen Nuestros Clientes
          </h2>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-orange-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-xl text-gray-200 italic mb-6">
                        "{testimonial.content}"
                      </p>
                      <div className="font-semibold text-orange-300">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role} - {testimonial.company}
                      </div>
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
                    index === currentTestimonial
                      ? "bg-orange-500"
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-orange-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            ¿Listo para Hacer Crecer tu Negocio?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Agenda tu consulta gratuita y descubre cómo podemos multiplicar tus
            ventas en 30 días.
          </p>

          <div className="bg-black bg-opacity-50 rounded-2xl p-8 mb-8">
            <div className="text-3xl font-bold mb-4 text-orange-400">
              Consulta Gratuita de $2,500 MXN
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
              ¡QUIERO MI CONSULTA GRATUITA!
            </a>

            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                Respuesta inmediata
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                Sin compromiso
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                Estrategia personalizada
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingAgencyLanding;
