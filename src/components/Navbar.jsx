import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { NAV_LINKS, BUSINESS } from '@/data/business';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const scrolled = useScroll(10);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 mx-auto w-full max-w-6xl border-b border-transparent md:rounded-2xl md:border transition-all ease-out duration-300',
                {
                    'bg-brand-black/80 supports-[backdrop-filter]:bg-brand-black/50 border-brand-border/50 backdrop-blur-xl md:top-4 md:max-w-5xl md:shadow-2xl shadow-brand-black/50':
                        scrolled && !open,
                    'bg-brand-black/95': open,
                    'top-0': !scrolled
                },
            )}
        >
            <nav
                className={cn(
                    'flex h-16 w-full items-center justify-between px-4 md:px-6 transition-all ease-out',
                    {
                        'md:px-6': scrolled,
                    },
                )}
            >
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group flex-shrink-0" onClick={() => setOpen(false)}>
                    <img
                        src="/logo.png"
                        alt="Taller Roman"
                        className="h-9 w-auto logo-dark object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </a>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-1 md:flex">
                    {NAV_LINKS.map((link, i) => (
                        <a
                            key={i}
                            className={cn(buttonVariants({ variant: 'ghost' }), "text-brand-muted hover:text-brand-text text-sm font-medium hover:bg-brand-elevated/50")}
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="w-px h-5 bg-brand-border mx-2 opacity-50" />

                    <Button variant="outline" className="hidden lg:inline-flex border-brand-accent/30 text-brand-accent hover:bg-brand-accent hover:text-white h-9" asChild>
                        <a href={BUSINESS.tel}>Llamar</a>
                    </Button>

                    <Button className="h-9 shadow-lg shadow-brand-accent/10" asChild>
                        <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <Button size="icon" variant="ghost" onClick={() => setOpen(!open)} className="md:hidden text-brand-text hover:bg-brand-card">
                    <MenuToggleIcon open={open} className="size-6" duration={300} />
                </Button>
            </nav>

            {/* Mobile Menu Overlay - Portaled to escape Header stacking context */}
            {typeof document !== 'undefined' && createPortal(
                <div
                    className={cn(
                        'fixed top-16 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden bg-brand-black/95 backdrop-blur-xl border-t border-brand-border md:hidden transition-all duration-300 touch-none',
                        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
                    )}
                >
                    <div
                        className={cn(
                            'flex h-full w-full flex-col justify-start gap-y-4 p-6',
                            open ? 'animate-in slide-in-from-top-2' : ''
                        )}
                    >
                        <div className="grid gap-y-1">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    className={cn(
                                        buttonVariants({ variant: 'ghost', className: 'justify-start text-lg py-6' }),
                                        "text-brand-muted hover:text-brand-text hover:bg-brand-elevated/30"
                                    )}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3 mt-auto mb-8 border-t border-brand-border/30 pt-6">
                            <Button variant="outline" className="w-full py-6 text-lg border-brand-accent/50 text-brand-accent hover:bg-brand-accent hover:text-white" asChild>
                                <a href={BUSINESS.tel}>Llamar Ahora</a>
                            </Button>

                            <Button className="w-full py-6 text-lg shadow-lg shadow-brand-accent/20" asChild>
                                <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            </Button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </header>
    );
}
