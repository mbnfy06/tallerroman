import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'
import { Check, ArrowRight } from 'lucide-react'

export default function ServiceCard({ service, index, variant = 'default', className }) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })
    const Icon = service.icon

    // Variants styles
    const isLarge = variant === 'large' // col-span-2
    const isFull = variant === 'full'   // col-span-3

    return (
        <div
            ref={ref}
            className={cn(
                "group relative overflow-hidden rounded-3xl transition-all duration-500",
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                // Base styles for all cards
                "bg-brand-card border border-brand-border hover:border-brand-accent/30",
                // Mobile Carousel Styles
                "w-[85vw] md:w-auto min-w-[300px] md:min-w-0 snap-center flex-shrink-0",
                // Large Variant Styles (Diagnosis)
                isLarge && "md:col-span-2 bg-gradient-to-br from-brand-card via-brand-card to-brand-elevated/50",
                // Full Variant Styles (Bottom Banner)
                isFull && "md:col-span-3 bg-gradient-to-r from-brand-elevated to-brand-card border-brand-accent/20",
                className
            )}
            style={{ transitionDelay: `${index * 50}ms` }}
        >
            {/* Background Decor for Large Cards */}
            {(isLarge || isFull) && (
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-accent/10 transition-colors" />
            )}

            <div className={cn("relative z-10 p-5 sm:p-8", isFull && "flex flex-col md:flex-row md:items-center gap-8")}>

                {/* Header Section */}
                <div className={cn("flex-1", isFull && "md:max-w-xl")}>
                    {/* Icon */}
                    <div className={cn(
                        "rounded-2xl flex items-center justify-center transition-all duration-300 mb-6",
                        isLarge ? "w-16 h-16 bg-brand-accent text-white shadow-lg shadow-brand-accent/20" :
                            "w-12 h-12 bg-brand-elevated text-brand-accent group-hover:bg-brand-accent group-hover:text-white"
                    )}>
                        <Icon className={cn("transition-transform duration-300 group-hover:scale-110", isLarge ? "w-8 h-8" : "w-6 h-6")} />
                    </div>

                    {/* Title */}
                    <h3 className={cn(
                        "font-heading font-bold text-brand-text mb-3",
                        (isLarge || isFull) ? "text-2xl lg:text-3xl" : "text-xl"
                    )}>
                        {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-brand-muted text-sm sm:text-base leading-relaxed mb-6">
                        {service.description}
                    </p>

                    {/* Action for Full Card */}
                    {isFull && (
                        <div className="hidden md:flex items-center gap-2 text-brand-accent font-semibold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                            <span>Solicitar Servicio</span>
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    )}
                </div>

                {/* Content Section (Services List) */}
                <div className={cn(
                    "mt-4",
                    isLarge ? "w-full pt-4 border-t border-brand-border/50" : "",
                    isFull ? "md:mt-0 md:border-l md:border-brand-border/50 md:pl-8 flex-1" : ""
                )}>
                    {(isLarge || isFull) ? (
                        // Grid Layout for promoted cards
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.services.map((s) => (
                                <div key={s} className="flex items-center gap-2 text-sm text-brand-muted group-hover:text-brand-text transition-colors">
                                    <Check className="w-4 h-4 text-brand-accent flex-shrink-0" />
                                    <span>{s}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Tags Layout for standard cards
                        <div className="flex flex-wrap gap-2">
                            {service.services.map((s) => (
                                <span
                                    key={s}
                                    className="inline-block text-xs font-medium bg-brand-black/50 text-brand-muted px-3 py-1.5 rounded-lg border border-brand-border/30 group-hover:border-brand-border transition-colors"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Visual bottom bar for standard cards */}
            {!isLarge && !isFull && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-accent/0 group-hover:bg-brand-accent transition-colors duration-300" />
            )}
        </div>
    )
}
