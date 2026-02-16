import {
    Cpu,
    Wrench,
    ShieldCheck,
    CircleDot,
    Thermometer,
    Zap,
} from 'lucide-react'

export const SERVICE_CATEGORIES = [
    {
        id: 'diagnostico',
        title: 'Mecánica General y Diagnóstico',
        description:
            'Identificamos el problema exacto con tecnología de diagnóstico avanzada. Reparamos averías mecánicas y eléctricas de cualquier marca para que vuelvas a la carretera con total seguridad.',
        icon: Cpu,
        services: [
            'Diagnóstico de motores',
            'Averías eléctricas',
            'Diagnosis electrónica avanzada',
            'Propulsores',
            'Transmisión',
        ],
    },
    {
        id: 'frenos',
        title: 'Frenos, Suspensión y Dirección',
        description:
            'Tu seguridad es lo primero. Revisamos y reparamos el sistema de frenado, amortiguación y dirección para que conduzcas con total control.',
        icon: ShieldCheck,
        services: [
            'Frenos',
            'Reparación de suspensión y dirección',
        ],
    },
    {
        id: 'mantenimiento',
        title: 'Mantenimiento Preventivo y Pre-ITV',
        description:
            'Evita averías caras y pasa la ITV a la primera. Revisiones completas, cambios de aceite, filtros, correas y todo lo que tu coche necesita.',
        icon: Wrench,
        services: [
            'Pre-ITV',
            'Cambio de aceite',
            'Cambio de filtros de aire',
            'Correa de distribución',
            'Revisión general de mantenimiento',
        ],
    },
    {
        id: 'neumaticos',
        title: 'Neumáticos y Calibración',
        description:
            'Neumáticos nuevos o reparaciones, con calibración profesional para un desgaste uniforme y una conducción segura.',
        icon: CircleDot,
        services: [
            'Neumáticos',
            'Calibración de ruedas',
        ],
    },
    {
        id: 'climatizacion',
        title: 'Climatización y Confort',
        description:
            'Viaja siempre a la temperatura perfecta. Cargamos, reparamos y mantenemos el sistema de aire acondicionado, además de limpieza y desinfección completa.',
        icon: Thermometer,
        services: [
            'Aire acondicionado',
            'Baterías',
            'Limpieza y desinfección del vehículo',
        ],
    },
    {
        id: 'mecanica-rapida',
        title: 'Mecánica Rápida',
        description:
            '¿Necesitas una solución rápida? Intervenciones ágiles sin cita para imprevistos del día a día.',
        icon: Zap,
        services: [
            'Mecánica rápida',
        ],
    },
]
