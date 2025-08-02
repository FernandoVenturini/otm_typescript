import { FiFacebook, FiInstagram, FiTwitter, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import WhatsAppButton from './WhatsAppButton'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Beauty<span className="text-secondary">Style</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Sistema completo para salões de beleza, cabeleireiros e barbearias. 
              Transformamos sua experiência de beleza com tecnologia e estilo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-primary transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-primary transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-primary transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Agendamentos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-primary" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-primary" />
                <span>contato@beautystyle.com.br</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-primary" />
                <span>Av. Paulista, 1000 - São Paulo, SP</span>
              </li>
            </ul>
            <div className="mt-4">
              <WhatsAppButton />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BeautyStyle. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Desenvolvido com ❤️ para salões de beleza</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer