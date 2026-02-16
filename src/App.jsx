import { useState, useEffect, Suspense, lazy } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PasswordProtection from '@/components/PasswordProtection'

// Lazy load below-the-fold components
const TrustBar = lazy(() => import('@/components/TrustBar'))
const BrandsCarousel = lazy(() => import('@/components/BrandsCarousel'))
const Services = lazy(() => import('@/components/Services'))
const WhyChooseUs = lazy(() => import('@/components/WhyChooseUs'))
const Process = lazy(() => import('@/components/Process'))
const Testimonials = lazy(() => import('@/components/Testimonials'))
const Contact = lazy(() => import('@/components/Contact'))
const Footer = lazy(() => import('@/components/Footer'))
const MobileBottomBar = lazy(() => import('@/components/MobileBottomBar'))
const FloatingWhatsApp = lazy(() => import('@/components/FloatingWhatsApp'))

// Loading fallback component
const SectionLoader = () => <div className="w-full h-32 animate-pulse bg-brand-black/5" />

export default function App() {
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [isChecking, setIsChecking] = useState(true)

    useEffect(() => {
        const auth = localStorage.getItem('taller_roman_auth')
        if (auth === 'true') {
            setIsAuthorized(true)
        }
        setIsChecking(false)
    }, [])

    const handleUnlock = () => {
        localStorage.setItem('taller_roman_auth', 'true')
        setIsAuthorized(true)
    }

    if (isChecking) return <div className="fixed inset-0 bg-[#050505]" />

    return (
        <>
            <AnimatePresence mode="wait">
                {!isAuthorized && (
                    <PasswordProtection key="lock-screen" onUnlock={handleUnlock} />
                )}
            </AnimatePresence>

            {isAuthorized && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                >
                    <Navbar />
                    <main>
                        <Hero />
                        <Suspense fallback={<SectionLoader />}>
                            <TrustBar />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <Services />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <BrandsCarousel />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <WhyChooseUs />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <Process />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <Testimonials />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <Contact />
                        </Suspense>
                    </main>
                    <Suspense fallback={<div className="h-64 bg-brand-black" />}>
                        <Footer />
                    </Suspense>
                    <Suspense fallback={null}>
                        <MobileBottomBar />
                    </Suspense>
                    <Suspense fallback={null}>
                        <FloatingWhatsApp />
                    </Suspense>
                </motion.div>
            )}
        </>
    )
}
