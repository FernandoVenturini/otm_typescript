import Header from '../components/Header'
import Footer from '../components/Footer'

const ServicesPage = () => {
  const services = [
    {
      title: "Corte de Cabelo",
      description: "Cortes modernos e clássicos para todos os estilos",
      price: "R$ 50,00",
      duration: "45 min"
    },
    {
      title: "Barba",
      description: "Modelagem e acabamento profissional",
      price: "R$ 35,00",
      duration: "30 min"
    },
    {
      title: "Coloração",
      description: "Coloração completa com produtos de qualidade",
      price: "R$ 80,00",
      duration: "1h 30min"
    },
    {
      title: "Penteado",
      description: "Penteados para eventos e ocasiões especiais",
      price: "R$ 100,00",
      duration: "1h"
    },
    {
      title: "Manicure",
      description: "Cuidados completos para as mãos",
      price: "R$ 40,00",
      duration: "45 min"
    },
    {
      title: "Pedicure",
      description: "Cuidados completos para os pés",
      price: "R$ 50,00",
      duration: "1h"
    },
    {
      title: "Tratamento Capilar",
      description: "Hidratação, nutrição e reconstrução capilar",
      price: "R$ 70,00",
      duration: "1h"
    },
    {
      title: "Depilação",
      description: "Depilação com cera quente",
      price: "R$ 60,00",
      duration: "30 min"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Nossos Serviços</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <span className="text-lg font-bold text-primary">{service.price}</span>
                    <span className="block text-sm text-gray-500">{service.duration}</span>
                  </div>
                  <button className="btn-primary text-sm py-2 px-4">
                    Agendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ServicesPage