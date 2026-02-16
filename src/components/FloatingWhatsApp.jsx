import { MessageCircle } from 'lucide-react'
import { BUSINESS } from '@/data/business'

export default function FloatingWhatsApp() {
    return (
        <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 hidden md:flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-500 text-white rounded-full shadow-lg shadow-green-600/30 hover:shadow-green-500/40 transition-all duration-300 hover:scale-110 animate-pulse-glow group"
            aria-label="Contactar por WhatsApp"
            style={{ '--tw-shadow-color': 'rgba(22, 163, 74, 0.3)' }}
        >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 bg-brand-card border border-brand-border text-brand-text text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                ¡Escríbenos por WhatsApp!
            </span>
        </a>
    )
}
