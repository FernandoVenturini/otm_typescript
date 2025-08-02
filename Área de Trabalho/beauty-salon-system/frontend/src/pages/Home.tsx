import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}

export default Home