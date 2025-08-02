import { FiCalendar, FiScissors, FiStar } from 'react-icons/fi'
import WhatsAppButton from './WhatsAppButton'

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transforme sua <span className="text-accent">beleza</span> com estilo
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl">
              Sistema completo para agendamentos, pagamentos e gestão de salões de beleza, cabeleireiros e barbearias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-accent text-center">
                Nossos Serviços
              </a>
              <WhatsAppButton />
            </div>
            
            <div className="mt-12 flex items-center">
              <div className="flex mr-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar key={star} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p>4.9/5 - 120 avaliações</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Ilustração de salão de beleza */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gray-200 rounded-full"></div>
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gray-300 rounded-lg"></div>
                  <div className="absolute top-24 -left-8 w-16 h-4 bg-gray-400 rounded-full transform rotate-45"></div>
                  <div className="absolute top-24 -right-8 w-16 h-4 bg-gray-400 rounded-full transform -rotate-45"></div>
                  <div className="absolute top-48 left-1/3 w-4 h-12 bg-gray-300"></div>
                  <div className="absolute top-48 right-1/3 w-4 h-12 bg-gray-300"></div>
                  <div className="absolute top-58 left-1/3 transform -translate-x-2 w-8 h-3 bg-accent rounded"></div>
                  <div className="absolute top-58 right-1/3 transform translate-x-2 w-8 h-3 bg-accent rounded"></div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-300 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero