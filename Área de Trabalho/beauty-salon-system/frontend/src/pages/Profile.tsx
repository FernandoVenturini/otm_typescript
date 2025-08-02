import Header from '../components/Header'
import Footer from '../components/Footer'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Meu Perfil</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
                  <h2 className="text-xl font-bold">Ana Silva</h2>
                  <p className="text-gray-600">Cliente desde 2022</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-1">Telefone</h3>
                    <p>(11) 99999-9999</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p>ana.silva@email.com</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Preferências</h3>
                    <p>Corte de cabelo, coloração</p>
                  </div>
                </div>
                
                <button className="btn-primary w-full mt-6">
                  Editar Perfil
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6">Histórico de Agendamentos</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serviço</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Horário</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profissional</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Corte de Cabelo</td>
                        <td className="px-6 py-4 whitespace-nowrap">10/08/2023</td>
                        <td className="px-6 py-4 whitespace-nowrap">10:00</td>
                        <td className="px-6 py-4 whitespace-nowrap">Carlos Oliveira</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Concluído
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Coloração</td>
                        <td className="px-6 py-4 whitespace-nowrap">05/07/2023</td>
                        <td className="px-6 py-4 whitespace-nowrap">14:00</td>
                        <td className="px-6 py-4 whitespace-nowrap">Mariana Costa</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Concluído
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Barba</td>
                        <td className="px-6 py-4 whitespace-nowrap">01/06/2023</td>
                        <td className="px-6 py-4 whitespace-nowrap">11:30</td>
                        <td className="px-6 py-4 whitespace-nowrap">Carlos Oliveira</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Concluído
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
                <h2 className="text-2xl font-bold mb-6">Próximos Agendamentos</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-bold">Corte de Cabelo</h3>
                      <p className="text-gray-600">15/08/2023 às 10:00</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-secondary text-sm py-1 px-3">
                        Reagendar
                      </button>
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded-lg transition duration-300">
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Profile