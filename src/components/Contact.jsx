import { MapPin, Phone, Clock, MessageCircle, Navigation } from 'lucide-react'
import { BUSINESS } from '@/data/business'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function Contact() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

    return (
        <section id="contacto" className="relative py-20 lg:py-28 bg-brand-black">
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-14 lg:mb-20">
                    <span className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
                        Contacto
                    </span>
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-text mb-4">
                        Contacto y Ubicación
                    </h2>
                    <p className="text-brand-muted text-lg max-w-xl mx-auto">
                        Estamos en el centro de San Sebastián de los Reyes. ¡Ven a visitarnos!
                    </p>
                </div>

                <div
                    ref={ref}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    {/* Contact Info */}
                    <div className="space-y-6">
                        {/* Address */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-accent-subtle flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-brand-accent" />
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-brand-text mb-1">Dirección</h3>
                                <p className="text-brand-muted">{BUSINESS.address.full}</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-accent-subtle flex items-center justify-center">
                                <Phone className="w-6 h-6 text-brand-accent" />
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-brand-text mb-1">Teléfono</h3>
                                <a
                                    href={BUSINESS.tel}
                                    className="text-brand-muted hover:text-brand-accent transition-colors font-medium"
                                >
                                    {BUSINESS.phone}
                                </a>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-accent-subtle flex items-center justify-center">
                                <Clock className="w-6 h-6 text-brand-accent" />
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-brand-text mb-1">Horario</h3>
                                <div className="text-brand-muted space-y-1 text-sm">
                                    <p>
                                        <span className="text-brand-text font-medium">Lunes a Viernes:</span>{' '}
                                        {BUSINESS.hours.weekdays}
                                    </p>
                                    <p>
                                        <span className="text-brand-text font-medium">Sábado:</span>{' '}
                                        {BUSINESS.hours.saturday}
                                    </p>
                                    <p>
                                        <span className="text-brand-text font-medium">Domingo:</span>{' '}
                                        {BUSINESS.hours.sunday}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <a
                                href={BUSINESS.tel}
                                className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-accent/25"
                            >
                                <Phone className="w-4 h-4" />
                                Llamar Ahora
                            </a>
                            <a
                                href={BUSINESS.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-brand-card border border-brand-border hover:border-green-500/40 text-brand-text font-semibold px-6 py-3 rounded-xl transition-all duration-200"
                            >
                                <MessageCircle className="w-4 h-4 text-green-500" />
                                WhatsApp
                            </a>
                            {BUSINESS.googleMaps && (
                                <a
                                    href={BUSINESS.googleMaps}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-brand-card border border-brand-border hover:border-blue-500/40 text-brand-text font-semibold px-6 py-3 rounded-xl transition-all duration-200"
                                >
                                    <Navigation className="w-4 h-4 text-blue-400" />
                                    Cómo Llegar
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Map */}
                    <div className="relative rounded-2xl overflow-hidden border border-brand-border bg-brand-card min-h-[320px] lg:min-h-[400px] h-full group">
                        {/* Dark Mode Overlay Map */}
                        <iframe
                            title="Ubicación Taller Roman Multimarca"
                            src="https://maps.google.com/maps?q=Taller+Roman+Multimarca+San+Sebastian+de+los+Reyes&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '320px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="map-dark-red w-full h-full absolute inset-0"
                        />

                        {/* Custom Overlay for better aesthetics */}
                        {/* Custom Overlay for better aesthetics - Clickable */}
                        <a
                            href={BUSINESS.googleMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-4 left-4 right-4 bg-brand-black/80 backdrop-blur-sm p-4 rounded-xl border border-brand-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-2 hover:bg-brand-black/90"
                        >
                            <Navigation className="w-4 h-4 text-brand-accent animate-pulse" />
                            <p className="text-xs text-brand-muted font-medium">Ir a Taller con Google Maps</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
