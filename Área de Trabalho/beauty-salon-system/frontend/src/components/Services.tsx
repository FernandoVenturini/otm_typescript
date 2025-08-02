import { FiScissors, FiFace, FiDroplet, FiCamera } from 'react-icons/fi'

const services = [
  {
    icon: <FiScissors className="text-3xl" />,
    title: "Corte de Cabelo",
    description: "Cortes modernos e clássicos para todos os estilos",
    price: "R$ 50,00"
  },
  {
    icon: <FiFace className="text-3xl" />,
    title: "Barba",
    description: "Modelagem e acabamento profissional",
    price: "R$ 35,00"
  },
  {
    icon: <FiDroplet className="text-3xl" />,
    title: "Coloração",
    description: "Coloração completa com produtos de qualidade",
    price: "R$ 80,00"
  },
  {
    icon: <FiCamera className="text-3xl" />,
    title: "Penteado",
    description: "Penteados para eventos e ocasiões especiais",
    price: "R$ 100,00"
  }
]

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Oferecemos uma ampla variedade de serviços para realçar sua beleza e estilo
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-primary">{service.price}</span>
                <button className="btn-primary text-sm py-2 px-4">
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-white rounded-2xl border border-gray-200 shadow-md">
            <h3 className="text-2xl font-bold mb-4">Soluções Personalizadas</h3>
            <p className="text-gray-600 max-w-2xl">
              Além dos serviços mencionados, oferecemos tratamentos capilares, manicure, 
              pedicure e muito mais. Entre em contato para saber mais!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services