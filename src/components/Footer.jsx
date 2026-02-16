import { BUSINESS } from '@/data/business'
import { TextHoverEffect } from './TextHoverEffect'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-brand-black border-t border-brand-border pt-16 pb-8 overflow-hidden">
            {/* Background gradient effect */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(125% 125% at 50% 10%, #0F0F1166 50%, #E639461A 100%)",
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Main Footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img
                                src="/logo.png"
                                alt="Taller Roman Multimarca"
                                className="h-10 w-auto object-contain logo-dark"
                            />
                        </div>
                        <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
                            Tu taller de confianza en San Sebastián de los Reyes. Especialistas en mecánica general, diagnosis y mantenimiento multimarca.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-brand-text font-bold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-sm text-brand-muted">
                            <li><a href="#servicios" className="hover:text-brand-accent transition-colors">Servicios</a></li>
                            <li><a href="#por-que-elegirnos" className="hover:text-brand-accent transition-colors">Por Qué Elegirnos</a></li>
                            <li><a href="#proceso" className="hover:text-brand-accent transition-colors">Nuestro Proceso</a></li>
                            <li><a href="#opiniones" className="hover:text-brand-accent transition-colors">Opiniones</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-brand-text font-bold mb-4">Contacto</h4>
                        <ul className="space-y-2 text-sm text-brand-muted">
                            <li><a href={BUSINESS.tel} className="hover:text-brand-accent transition-colors">{BUSINESS.phone}</a></li>
                            <li><a href={`mailto:${BUSINESS.email}`} className="hover:text-brand-accent transition-colors">{BUSINESS.email || 'info@tallerroman.es'}</a></li>
                            <li><a href={BUSINESS.whatsapp} className="hover:text-brand-accent transition-colors">WhatsApp Directo</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Location */}
                    <div>
                        <h4 className="text-brand-text font-bold mb-4">Ubicación</h4>
                        <p className="text-sm text-brand-muted mb-2">{BUSINESS.address.street}</p>
                        <p className="text-sm text-brand-muted mb-2">{BUSINESS.address.postalCode} {BUSINESS.address.city}</p>
                        <p className="text-sm text-brand-text font-semibold mt-4">Horario:</p>
                        <p className="text-sm text-brand-muted">L-V: {BUSINESS.hours.weekdays}</p>
                    </div>
                </div>

                {/* Text Hover Effect (Large Footer Branding) */}
                <div className="w-full flex items-center justify-center h-[60px] sm:h-[80px] md:h-[110px] select-none opacity-80 mt-8 mb-2">
                    <TextHoverEffect text="ROMAN" />
                </div>

                {/* Divider */}
                <div className="border-t border-brand-border/50 my-8" />

                {/* Bottom Bar: Copyright & MBNify Promo */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-muted pb-8 md:pb-0">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                        <p>© {currentYear} {BUSINESS.name}. Todos los derechos reservados.</p>
                        <div className="hidden md:block w-1 h-1 bg-brand-muted/30 rounded-full" />

                        {/* MBNify Promo Badge - Moved to left/center to avoid floating button overlap */}
                        <a
                            href="https://mbnify.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-card border border-brand-border/50 hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-all duration-300"
                        >
                            <span className="text-brand-muted/70 group-hover:text-brand-muted transition-colors">Designed & Developed by</span>
                            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-muted group-hover:from-brand-accent group-hover:to-white transition-all duration-300">
                                MBNify
                            </span>
                        </a>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="hover:text-brand-text transition-colors">Aviso Legal</a>
                        <a href="#" className="hover:text-brand-text transition-colors">Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
