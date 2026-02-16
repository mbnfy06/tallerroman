import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

// Configuración de Logos: Local con Fallback Automático a CDN
const BRANDS = [
    {
        name: 'BMW',
        localSrc: '/logos/bmw.svg',
        fallbackSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg'
    },
    {
        name: 'Mercedes-Benz',
        localSrc: '/logos/mercedes.svg',
        fallbackSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg'
    },
    {
        name: 'Audi',
        localSrc: '/logos/audi.svg',
        fallbackSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg'
    },
    {
        name: 'Volkswagen',
        localSrc: '/logos/volkswagen.svg',
        fallbackSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg'
    },
    {
        name: 'Porsche',
        localSrc: '/logos/porsche.svg',
        fallbackSrc: 'https://upload.wikimedia.org/wikipedia/de/2/2d/Porsche_Wappen.svg'
    },
    {
        name: 'Land Rover',
        localSrc: '/logos/Land_Rover_2023.svg.png',
        fallbackSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Land_Rover_Logo.svg/1024px-Land_Rover_Logo.svg.png',
        dark: true
    },
    {
        name: 'Mini',
        localSrc: '/logos/MINI_logo.svg.png',
        fallbackSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Mini_logo.svg/1024px-Mini_logo.svg.png',
        dark: true
    },
    {
        name: 'Volvo',
        localSrc: '/logos/volvo.svg',
        fallbackSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Volvo-Iron-Mark-Black.svg',
        dark: true
    },
    {
        name: 'Seat',
        localSrc: '/logos/SEAT_Logo_from_2017.svg.png',
        fallbackSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Seat_logo.svg/1024px-Seat_logo.svg.png',
        dark: true
    },
]

// Single logo item component
function BrandLogo({ brand, handleImageError }) {
    return (
        <div className="group relative flex flex-col items-center justify-center min-w-[120px] h-24 flex-shrink-0">
            <div className="relative h-14 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-3">
                <img
                    src={brand.localSrc}
                    alt={brand.name}
                    className={`h-full w-auto object-contain max-w-[120px] transition-all duration-500
                        ${brand.dark
                            ? 'filter brightness-0 invert opacity-60 group-hover:opacity-100'
                            : 'filter grayscale brightness-125 opacity-60 group-hover:opacity-100 group-hover:grayscale-0'
                        }`}
                    onError={(e) => handleImageError(e, brand.fallbackSrc)}
                />
            </div>
            <span className="absolute bottom-1 text-xs font-bold text-brand-text/90 tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-center w-full pointer-events-none">
                {brand.name}
            </span>
        </div>
    )
}

export default function TrustBar() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 })

    const handleImageError = (e, fallbackSrc) => {
        if (!e.target.dataset.triedFallback) {
            e.target.dataset.triedFallback = 'true';
            e.target.src = fallbackSrc;
        } else {
            e.target.style.display = 'none';
            const span = e.target.parentNode.nextSibling;
            if (span) {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
                span.style.color = '#888';
            }
        }
    }

    return (
        <section
            ref={ref}
            className="relative bg-brand-dark border-y border-brand-border py-12 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <div className="text-center">
                    <p className="text-brand-muted text-xs font-semibold tracking-[0.2em] uppercase opacity-70">
                        Expertos en Mecánica y Diagnosis Multimarca
                    </p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden py-4">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

                {/* 
                    Infinite Marquee Technique:
                    - Two identical strips placed side by side via flex
                    - Both animate together translating -100% of ONE strip's width
                    - When strip 1 exits left, strip 2 is in its exact position = seamless loop
                    - Using CSS animation on the wrapper, not individual items
                */}
                <div
                    className={`flex w-max transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        animation: 'marquee-scroll 35s linear infinite',
                    }}
                >
                    {/* Strip 1 */}
                    <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24">
                        {BRANDS.map((brand, index) => (
                            <BrandLogo key={`a-${index}`} brand={brand} handleImageError={handleImageError} />
                        ))}
                    </div>
                    {/* Strip 2 (identical copy) */}
                    <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24">
                        {BRANDS.map((brand, index) => (
                            <BrandLogo key={`b-${index}`} brand={brand} handleImageError={handleImageError} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Inline keyframes for pixel-perfect infinite scroll */}
            <style>{`
                @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    )
}
