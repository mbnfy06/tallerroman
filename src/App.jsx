import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import BrandsCarousel from '@/components/BrandsCarousel'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <TrustBar />
                <Services />
                <BrandsCarousel />
                <WhyChooseUs />
                <Process />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <MobileBottomBar />
            <FloatingWhatsApp />
        </>
    )
}
