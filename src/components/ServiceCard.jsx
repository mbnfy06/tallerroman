import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'

export default function ServiceCard({ service, index, className }) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })
    const Icon = service.icon

    return (
        <div
            ref={ref}
            className={cn(
                "card-hover group bg-brand-card border border-brand-border rounded-2xl p-6 lg:p-8 transition-all duration-500",
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                className
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-brand-accent-subtle flex items-center justify-center mb-5 group-hover:bg-brand-accent/20 transition-colors duration-300">
                <Icon className="w-6 h-6 text-brand-accent" />
            </div>

            {/* Title */}
            <h3 className="font-heading font-bold text-lg text-brand-text mb-3 group-hover:text-brand-accent transition-colors duration-300">
                {service.title}
            </h3>

            {/* Description */}
            <p className="text-brand-muted text-sm leading-relaxed mb-5">
                {service.description}
            </p>

            {/* Service chips */}
            <div className="flex flex-wrap gap-2">
                {service.services.map((s) => (
                    <span
                        key={s}
                        className="inline-block text-xs bg-brand-elevated text-brand-muted px-3 py-1.5 rounded-full border border-brand-border/50"
                    >
                        {s}
                    </span>
                ))}
            </div>
        </div>
    )
}
