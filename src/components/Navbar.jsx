import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { BUSINESS, NAV_LINKS } from '@/data/business'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = () => setIsOpen(false)

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-brand-black/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-brand-border'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group flex-shrink-0">
                        <img
                            src="/logo.png"
                            alt="Taller Roman Multimarca"
                            className="h-10 lg:h-12 w-auto object-contain logo-dark"
                        />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-brand-muted hover:text-brand-text transition-colors duration-200 font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href={BUSINESS.tel}
                            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-accent/25"
                        >
                            <Phone className="w-4 h-4" />
                            <span>{BUSINESS.phone}</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-brand-muted hover:text-brand-text transition-colors"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-brand-dark/95 backdrop-blur-md border-t border-brand-border px-4 py-4 space-y-1">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="block px-4 py-3 text-brand-muted hover:text-brand-text hover:bg-brand-card rounded-lg transition-all duration-200 font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="pt-3 border-t border-brand-border">
                        <a
                            href={BUSINESS.tel}
                            className="flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-5 py-3 rounded-lg transition-all duration-200 w-full"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Llamar al {BUSINESS.phone}</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
