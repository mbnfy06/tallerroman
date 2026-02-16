import { Phone, MessageCircle } from 'lucide-react'
import { BUSINESS } from '@/data/business'

export default function MobileBottomBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            {/* Gradient fade above the bar */}
            <div className="h-4 bg-gradient-to-t from-brand-black to-transparent" />

            <div className="bg-brand-black/95 backdrop-blur-md border-t border-brand-border px-4 py-3 flex gap-3">
                <a
                    href={BUSINESS.tel}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-3 rounded-xl transition-all duration-200 text-sm"
                >
                    <Phone className="w-4 h-4" />
                    Llamar
                </a>
                <a
                    href={BUSINESS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-all duration-200 text-sm"
                >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                </a>
            </div>
        </div>
    )
}
