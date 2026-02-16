import { Phone, MessageCircle, Star } from 'lucide-react'
import { BUSINESS } from '@/data/business'

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-brand-black">
                {/* Noise Texture for Depth */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitching='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                />

                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />

                {/* Gradient mesh effect - Adjusted for depth and mobile performance */}
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] rounded-full bg-brand-accent/5 blur-[60px] md:blur-[120px]" />
                    <div className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[50px] md:blur-[100px]" />
                </div>

                {/* Grid pattern overlay - More subtle */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-brand-accent-subtle border border-brand-accent/20 text-brand-accent px-4 py-1.5 rounded-full text-sm font-medium mb-8 animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                    Taller de confianza en San Sebastián de los Reyes
                </div>

                {/* Social Proof Strategy: Stars visible immediately */}
                <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in text-sm sm:text-base -mt-4">
                    <div className="flex gap-0.5 text-yellow-500 drop-shadow-sm">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    </div>
                    <span className="text-brand-text font-bold">4.9/5</span>
                    <span className="text-brand-muted hidden sm:inline">en reseñas de Google</span>
                </div>

                {/* H1 */}
                <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-brand-text leading-[1.1] mb-6 animate-fade-in-up">
                    Taller Mecánico{' '}
                    <span className="text-brand-accent">Multimarca</span>
                    <br className="hidden sm:block" />
                    <span className="text-brand-muted"> en San Sebastián de los Reyes</span>
                </h1>

                {/* Subtitle */}
                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-brand-muted leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                    Diagnóstico experto, reparación de todas las marcas y el trato cercano que tu coche merece.{' '}
                    <span className="text-brand-text font-medium">Sin sorpresas. Sin letra pequeña.</span>
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <a
                        href={BUSINESS.tel}
                        className="inline-flex items-center gap-3 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-xl hover:shadow-brand-accent/25 hover:scale-[1.02] w-full sm:w-auto justify-center"
                    >
                        <Phone className="w-5 h-5" />
                        Pide tu Cita Ahora
                    </a>
                    <a
                        href={BUSINESS.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-brand-card border border-brand-border hover:border-brand-accent/40 text-brand-text font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:bg-brand-elevated w-full sm:w-auto justify-center"
                    >
                        <MessageCircle className="w-5 h-5 text-green-500" />
                        Escríbenos por WhatsApp
                    </a>
                </div>

                {/* Helper text */}
                <p className="mt-6 text-brand-muted text-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    ☎ Respuesta en menos de 1 hora por WhatsApp
                </p>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent" />
        </section>
    )
}
