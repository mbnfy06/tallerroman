import { MessageCircle } from 'lucide-react'
import { BUSINESS } from '@/data/business'
import { SERVICE_CATEGORIES } from '@/data/services'
import ServiceCard from './ServiceCard'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function Services() {
    const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2 })

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
                        Nuestros Servicios
                    </span>
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-text mb-4">
                        Servicios de Reparación y Mantenimiento
                    </h2>
                    <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                        Todo lo que tu vehículo necesita en un solo taller. Cualquier marca, cualquier avería.
                    </p>
                </div>

                {/* Grid - Bento Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[minmax(0,1fr)]">
                    {SERVICE_CATEGORIES.map((service, index) => {
                        // Bento Grid Logic
                        let spanClass = "md:col-span-1"

                        if (index === 0) spanClass = "md:col-span-2"
                        else if (index === 5) spanClass = "md:col-span-3"

                        return (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                index={index}
                                className={spanClass}
                            />
                        )
                    })}
                </div>

                {/* CTA */}
                <div className="text-center mt-14">
                    <p className="text-brand-muted mb-4">
                        ¿Tu coche necesita alguno de estos servicios?
                    </p>
                    <a
                        href={BUSINESS.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-brand-card border border-brand-border hover:border-brand-accent/40 text-brand-text font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:bg-brand-elevated"
                    >
                        <MessageCircle className="w-5 h-5 text-green-500" />
                        Consúltanos sin compromiso
                    </a>
                </div>
            </div>
        </section>
    )
}
