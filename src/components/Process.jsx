import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Phone, Search, FileText, Wrench, CheckCircle2 } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const STEPS = [
    {
        icon: Phone,
        title: 'Contacto',
        description:
            'Llámanos, escríbenos por WhatsApp o pásate por el taller. Te atendemos sin cita para consultas rápidas.',
    },
    {
        icon: Search,
        title: 'Diagnóstico',
        description:
            'Revisamos tu vehículo con nuestro equipo de diagnosis electrónica avanzada para identificar el problema con precisión.',
    },
    {
        icon: FileText,
        title: 'Presupuesto',
        description:
            'Te presentamos un presupuesto detallado y cerrado antes de iniciar cualquier reparación. Tú decides.',
    },
    {
        icon: Wrench,
        title: 'Reparación',
        description:
            'Nuestro equipo trabaja con piezas de calidad y procedimientos profesionales para devolverte tu coche en perfectas condiciones.',
    },
    {
        icon: CheckCircle2,
        title: 'Entrega',
        description:
            'Te explicamos todo lo realizado, resolvemos tus dudas y te damos recomendaciones para el mantenimiento futuro.',
    },
]

export default function Process() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2 })

    return (
        <section id="proceso" className="relative py-20 lg:py-28 bg-brand-black overflow-hidden">
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-14 lg:mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <span className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
                        Proceso
                    </span>
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-text mb-4">
                        Nuestro Proceso de Trabajo
                    </h2>
                    <p className="text-brand-muted text-lg max-w-xl mx-auto">
                        Sencillo, transparente y sin sorpresas. Así trabajamos.
                    </p>
                </div>

                {/* Timeline */}
                <div ref={containerRef} className="relative">
                    {/* Background Line - Perfectly centered with icons (w-16, center=2rem) */}
                    <div className="absolute left-[2rem] top-0 bottom-0 w-0.5 bg-brand-border/30 -translate-x-1/2" />

                    {/* Active Line (Scroll Driven) - Perfectly centered */}
                    <motion.div
                        style={{ scaleY: scaleY }}
                        className="absolute left-[2rem] top-0 bottom-0 w-0.5 bg-brand-accent origin-top -translate-x-1/2 z-0"
                    />

                    <div className="space-y-12 lg:space-y-16 relative z-10">
                        {STEPS.map((step, index) => (
                            <ProcessStep key={index} step={step} index={index} total={STEPS.length} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function ProcessStep({ step, index, total }) {
    const Icon = step.icon

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex gap-8 lg:gap-12"
        >
            {/* Step Icon Bubble - w-16 means 4rem width */}
            <div className="relative flex-shrink-0">
                <div className="w-16 h-16 lg:w-16 lg:h-16 rounded-full flex items-center justify-center border-4 border-brand-black bg-brand-card shadow-lg z-10 relative overflow-hidden group">
                    {/* Fill effect on hover/active */}
                    <div className="absolute inset-0 bg-brand-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <Icon className="w-6 h-6 text-brand-muted group-hover:text-white relative z-10 transition-colors duration-300" />
                </div>
                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-accent flex items-center justify-center border-2 border-brand-black z-20">
                    <span className="text-[10px] font-bold text-white">{index + 1}</span>
                </div>
            </div>

            {/* Content */}
            <div className="pt-2">
                <h3 className="font-heading font-bold text-xl lg:text-2xl text-brand-text mb-3 flex items-center gap-3">
                    {step.title}
                </h3>
                <p className="text-brand-muted leading-relaxed text-base lg:text-lg">
                    {step.description}
                </p>
            </div>
        </motion.div>
    )
}
