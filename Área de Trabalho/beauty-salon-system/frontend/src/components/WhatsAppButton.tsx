import { FiPhone } from 'react-icons/fi'

const WhatsAppButton = () => {
  const phoneNumber = "5511999999999" // Número do salão
  const message = "Olá, gostaria de agendar um horário!"
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
    >
      <FiPhone className="mr-2" />
      WhatsApp
    </a>
  )
}

export default WhatsAppButton