import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const BRANDS = [
    'Audi', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Porsche',
    'Toyota', 'Ford', 'Renault', 'Peugeot', 'Seat',
    'Hyundai', 'Kia', 'Volvo', 'Nissan', 'Honda',
    'Fiat', 'Citroën', 'Mini', 'Land Rover', 'Jeep'
]

export default function BrandsCarousel() {
    return (
        <section className="py-10 bg-brand-black border-y border-brand-border overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
                <p className="text-sm font-medium text-brand-muted uppercase tracking-widest">
                    Servicio Técnico Especializado en Todas las Marcas
                </p>
            </div>

            <div className="relative flex overflow-hidden mask-fade-x">
                {/* Left/Right Fade Masks (implemented via CSS class mask-fade-x) */}

                <div className="flex animate-marquee whitespace-nowrap py-4">
                    {/* Loop 1 */}
                    {BRANDS.map((brand, index) => (
                        <BrandItem key={`brand-1-${index}`} name={brand} />
                    ))}
                    {/* Loop 2 (Duplicate for seamless scroll) */}
                    {BRANDS.map((brand, index) => (
                        <BrandItem key={`brand-2-${index}`} name={brand} />
                    ))}
                </div>

                <div className="flex animate-marquee2 whitespace-nowrap absolute top-0 py-4">
                    {BRANDS.map((brand, index) => (
                        <BrandItem key={`brand-3-${index}`} name={brand} />
                    ))}
                    {BRANDS.map((brand, index) => (
                        <BrandItem key={`brand-4-${index}`} name={brand} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function BrandItem({ name }) {
    return (
        <div className="mx-8 lg:mx-12 flex items-center justify-center min-w-[100px] opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default">
            <span className="text-xl lg:text-2xl font-bold font-heading text-brand-text/50 hover:text-brand-accent transition-colors">
                {name}
            </span>
        </div>
    )
}
