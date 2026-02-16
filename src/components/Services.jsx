import { useRef, useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { BUSINESS } from '@/data/business'
import { SERVICE_CATEGORIES } from '@/data/services'
import ServiceCard from './ServiceCard'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function Services() {
    const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2 })
    const scrollContainerRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    // Handle scroll for dots
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current
            // Approximate active index based on scroll position
            // Card width is approx 85% of screen + gap
            const cardWidth = clientWidth * 0.85 + 24 // 24 is gap-6
            const index = Math.round(scrollLeft / cardWidth)
            setActiveIndex(Math.min(Math.max(0, index), SERVICE_CATEGORIES.length - 1))
        }
    }

    // Bento Logic
    const getBentoVariant = (index) => {
        if (index === 0) return 'large'  // Diagnosis - First Important Card
        if (index === 5) return 'full'   // Bottom Wide Card
        return 'default'                 // Small Cards
    }

    return (
        <section id="servicios" className="relative py-20 lg:py-28 bg-brand-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-14 lg:mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <span className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
                        Soluciones Reales
                    </span>
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-text mb-4">
                        Ingeniería y Mantenimiento de Precisión
                    </h2>
                    <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                        No somos "cambiapiezas". Somos técnicos especializados en resolver problemas complejos.
                    </p>
                </div>

                {/* Grid - Bento Layout (Mobile: Carousel / Desktop: Grid) */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 
                             md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 md:pb-0 md:px-0 md:mx-0
                             scrollbar-hide scroll-smooth"
                >
                    {SERVICE_CATEGORIES.map((service, index) => {
                        const variant = getBentoVariant(index)

                        // Responsive Grid Classes (Desktop only)
                        let gridClass = "md:col-span-1"
                        if (variant === 'large') gridClass = "md:col-span-2"
                        if (variant === 'full') gridClass = "md:col-span-3"

                        return (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                index={index}
                                variant={variant}
                                className={gridClass}
                            />
                        )
                    })}
                </div>

                {/* Mobile Scroll Indicator (Dots) */}
                <div className="flex justify-center gap-2 md:hidden mb-8">
                    {SERVICE_CATEGORIES.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-brand-accent' : 'w-1.5 bg-brand-border'
                                }`}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16 lg:mt-24">
                    <p className="text-brand-muted mb-6 text-lg">
                        ¿No encuentras lo que buscas? Probablemente lo hacemos.
                    </p>
                    <a
                        href={BUSINESS.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-accent/25 hover:-translate-y-1"
                    >
                        <MessageCircle className="w-5 h-5 fill-current" />
                        Consultar por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}
