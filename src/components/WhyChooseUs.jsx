import { Cpu, Eye, ShieldCheck, Clock } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const REASONS = [
    {
        icon: Cpu,
        title: 'Expertos Multimarca',
        description:
            'No nos limitamos a una marca. Reparamos y mantenemos cualquier vehículo con la misma calidad y precisión, desde utilitarios hasta berlinas premium.',
    },
    {
        icon: Eye,
        title: 'Diagnóstico de Última Generación',
        description:
            'Nuestra maquinaria de diagnosis electrónica avanzada detecta problemas ocultos que otros talleres pasan por alto. Reparamos la causa, no solo el síntoma.',
    },
    {
        icon: ShieldCheck,
        title: 'Presupuesto Transparente',
        description:
            'Antes de tocar tu coche, te damos un presupuesto claro y cerrado. Sin sorpresas al recoger. Sin "extras" ocultos.',
    },
    {
        icon: Clock,
        title: 'Ubicación Céntrica, Horario Amplio',
        description:
            'En pleno San Sebastián de los Reyes, con horario de mañana y tarde de lunes a viernes y sábados por la mañana.',
    },
]

export default function WhyChooseUs() {
    const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2 })

    return (
        <section id="por-que-elegirnos" className="relative py-20 lg:py-28 bg-brand-dark">
            {/* Subtle divider */}
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-14 lg:mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <span className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
                        Por Qué Elegirnos
                    </span>
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-text mb-4">
                        El Estándar Roman
                    </h2>
                    <p className="text-brand-muted text-lg max-w-xl mx-auto">
                        No somos un taller más. Somos tu socio de confianza en la carretera.
                    </p>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {REASONS.map((reason, index) => (
                        <ReasonCard key={index} reason={reason} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ReasonCard({ reason, index }) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 })
    const Icon = reason.icon

    return (
        <div
            ref={ref}
            className={`group relative bg-brand-card border border-brand-border rounded-2xl p-8 transition-all duration-500 hover:border-brand-accent/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            style={{ transitionDelay: `${index * 120}ms` }}
        >
            {/* Number watermark */}
            <span className="absolute top-4 right-6 font-heading font-extrabold text-6xl text-brand-border/40 select-none">
                0{index + 1}
            </span>

            <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-brand-accent-subtle flex items-center justify-center mb-5 group-hover:bg-brand-accent/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-brand-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-text mb-3 group-hover:text-brand-accent transition-colors duration-300">
                    {reason.title}
                </h3>
                <p className="text-brand-muted leading-relaxed">
                    {reason.description}
                </p>
            </div>
        </div>
    )
}
