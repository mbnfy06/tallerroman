import { Star, ExternalLink } from 'lucide-react'
import { TESTIMONIALS } from '@/data/testimonials'
import { TestimonialsColumn } from './TestimonialsColumn'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

// Split testimonials evenly into 3 columns
// We have 18 items, so 6 per column
const firstColumn = TESTIMONIALS.slice(0, 6)
const secondColumn = TESTIMONIALS.slice(6, 12)
const thirdColumn = TESTIMONIALS.slice(12, 18)

export default function Testimonials() {
    const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2 })

    return (
        <section id="opiniones" className="relative py-20 lg:py-28 bg-brand-dark overflow-hidden">
            <div className="section-divider absolute top-0 left-0 right-0" />

            {/* Background Gradient Fade for Scroll */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
                {/* Section Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-14 lg:mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <span className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
                        Opiniones Reales
                    </span>
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-text mb-4">
                        Lo Que Dicen Nuestros Clientes
                    </h2>

                    {/* Google Rating Badge */}
                    <div className="inline-flex items-center gap-2 bg-brand-card border border-brand-border px-4 py-2 rounded-full mt-4 hover:border-brand-accent/30 transition-colors cursor-default">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                            alt="Google" className="w-5 h-5 object-contain" />
                        <span className="font-bold text-brand-text text-lg">4.9</span>
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            ))}
                        </div>
                        <span className="text-brand-muted text-sm ml-1 font-medium hidden sm:inline">Excelencia en reseñas</span>
                    </div>
                </div>

                {/* Infinite Scroll Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px] overflow-hidden mask-fade-y">
                    <TestimonialsColumn
                        testimonials={firstColumn}
                        duration={90}
                        className="hidden lg:block remove-scrollbar"
                    />
                    <TestimonialsColumn
                        testimonials={secondColumn}
                        duration={110}
                        className="hidden md:block remove-scrollbar"
                    />
                    <TestimonialsColumn
                        testimonials={thirdColumn}
                        duration={100}
                        className="hidden md:block remove-scrollbar"
                    />

                    {/* Mobile Only Column (Shows ALL testimonials) */}
                    <TestimonialsColumn
                        testimonials={TESTIMONIALS}
                        duration={60}
                        className="block md:hidden remove-scrollbar"
                    />
                </div>

                {/* Google Reviews Link */}
                <div className="text-center mt-12 z-20 relative">
                    <a
                        href="https://share.google/NoaIdURoiWFM76tgH"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand-text bg-brand-accent hover:bg-brand-accent-hover px-6 py-3 rounded-xl transition-all font-medium text-sm shadow-lg hover:shadow-brand-accent/20"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Escribir una reseña en Google
                    </a>
                </div>
            </div>
        </section>
    )
}
