import { Wrench, Car, FileCheck, MapPin } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const TRUST_ITEMS = [
    { icon: Wrench, text: 'Servicios especializados completos' },
    { icon: Car, text: 'Todas las marcas' },
    { icon: FileCheck, text: 'Presupuesto sin compromiso' },
    { icon: MapPin, text: 'Centro de San Sebastián de los Reyes' },
]

export default function TrustBar() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 })

    return (
        <section
            ref={ref}
            className="relative bg-brand-dark border-y border-brand-border py-6 lg:py-8"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    {TRUST_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 group"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-accent-subtle flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors duration-300">
                                <item.icon className="w-5 h-5 text-brand-accent" />
                            </div>
                            <span className="text-sm font-medium text-brand-muted group-hover:text-brand-text transition-colors duration-300">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
