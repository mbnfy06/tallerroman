# DIGITAL OPTIMIZATION REPORT
**Proyecto:** Taller Roman Multimarca
**Fecha:** 16 de Febrero, 2026
**Versión:** 1.0 - Auditoría Inicial
**Agencia:** MBN!FY (Simulada)

---

## 1️⃣ ANÁLISIS GENERAL DE LA WEB ACTUAL

### 🧐 Primera Impresión Visual
La web actual tiene una **base técnica correcta** (React + Vite + Tailwind) y una intención de diseño "Dark Mode" que encaja con el sector automotriz moderno. Sin embargo, la ejecución visual sufre de lo que llamamos "efecto desarrollador": se nota que ha sido construida primando la funcionalidad sobre la finura estética.

*   **Claridad del Mensaje:** El H1 es claro, pero la propuesta de valor visual se diluye. Falta impacto inmediato.
*   **Jerarquía Visual:** Correcta en textos, pero débil en elementos gráficos. El fondo del Hero es demasiado genérico (patrones CSS) y falta "humanidad" o "máquina" (coches reales, mecánicos, taller).
*   **Profesionalidad Percibida:** 7/10. Los "hacks" de CSS (como invertir colores en logotipos o mapas) restan puntos de calidad premium. Una marca de alto nivel no usa filtros para corregir colores, usa los assets correctos.
*   **Sensación de Confianza:** Media. Faltan elementos de autoridad inmediata (logos de marcas, fotos reales del taller, badges de garantías) "above the fold" (antes de hacer scroll).

### 🚦 Semáforo de Estado
*   ✅ **Funciona:** Paleta de colores masculina (Negro/Rojo), velocidad de carga (Vite), estructura SPA.
*   ⚠️ **Se ve amateur:** El tratamiento del logotipo (`.logo-dark` con filtros), las animaciones CSS manuales en lugar de librerías fluidas, el mapa con filtro rojo agresivo.
*   ❌ **Resta calidad:** La falta de fotografía real o de alta calidad. El uso de componentes estándar que no "respiran" identidad propia.

---

## 2️⃣ AUDITORÍA UX / UI (User Experience & Interface)

### 🎨 Diseño y Componentes
*   **Espaciados (Spacing):** El sistema de espaciado es inconsistente en mobile vs desktop. Algunas secciones (como `Services`) se sienten apretadas en pantallas pequeñas.
*   **Contraste y Color:** El rojo acento (`#E63946`) es bueno, pero se abusa de él en bordes y sombras (`box-shadow`), creando un efecto "neón barato" en lugar de "tecnología premium".
*   **Tipografía:** La combinación `Outfit` (Headings) + `Inter` (Body) es excelente. Sin embargo, los `font-weight` son tímidos.
    *   *Mejora:* Usar `Outfit Black (800)` para titulares gigantes y `Inter Light (300)` para textos descriptivos para crear contraste editorial.
*   **Experiencia Móvil:**
    *   El menú móvil desplaza el contenido (layout shift). Debería ser un **Overlay (capa superior)** con fondo `backdrop-blur`.
    *   Los botones en móvil a veces ocupan demasiado ancho o muy poco. Necesitan estandarización (altura mínima 48px para pulgares).

### 💡 Propuesta de Elevación Visual (2026 Standards)
*   **Bento Grids:** Abandonar las "Cards" idénticas. Usar un grid asimétrico para los Servicios (destacar Diagnóstico sobre Cambio de Aceite).
*   **Micro-Interacciones:**
    *   Botones con efecto *magnetic* al acercar el cursor.
    *   Bordes con gradientes sutiles que rotan (`conic-gradient`) en lugar de bordes sólidos rojos.
*   **Scroll Reveal:** Sustituir las clases CSS manuales (`animate-on-scroll`) por **Framer Motion**. La entrada de elementos debe ser "elástica" y escalonada (staggered), no lineal.

---

## 3️⃣ AUDITORÍA SEO (Search Engine Optimization)

### 🔍 On-Page & Local
*   **Estructura H1-H3:**
    *   *Actual:* "Taller Mecánico Multimarca..." (Bien).
    *   *Fallo:* Poca densidad de palabras clave secundarias en los párrafos. Faltan términos como "electromecánica", "inyección", "pre-ITV" en los encabezados H3.
*   **SEO Local:**
    *   Falta un bloque dedicado a las zonas de servicio (Alcobendas, Sanse, Fuente del Fresno).
    *   El mapa es visual, pero no interactivo para "Cómo llegar" directamente desde la API de Google sin salir de la web (o abrir la app nativa en móvil).
*   **Schema Markup:**
    *   ✅ Detectado `AutoRepair`.
    *   ⚠️ Faltan propiedades como `aggregateRating` (estrellas en Google) y `priceRange` específico.

### 📝 Oportunidades de Contenido
*   **Reescribir H2:**
    *   De: "Servicios de Reparación"
    *   A: "Soluciones Integrales para tu Vehículo en Sanse"
*   **Bloque SEO:** Añadir al final un acordeón de preguntas frecuentes (FAQ) con Schema `FAQPage`.
    *   "¿Hacéis carga de aire acondicionado en San Sebastián de los Reyes?"
    *   "¿Tenéis coche de sustitución?"

---

## 4️⃣ CRO – CONVERSIÓN (Conversion Rate Optimization)

### 📉 Fugas de Conversión Detectadas
1.  **Falta de Prueba Social Inmediata:** El usuario aterriza y no ve estrellas ni opiniones hasta bajar mucho.
    *   *Solución:* Insertar "⭐️ 4.9/5 en Google (120+ Reseñas)" justo debajo del H1 o encima de los botones del Hero.
2.  **Formulario Inexistente:** La web confía 100% en que el usuario llame o escriba por WhatsApp.
    *   *Error:* Hay usuarios (especialmente en horario laboral) que prefieren "Pedir Presupuesto" vía formulario rápido. Perder este lead es crítico.
3.  **CTA Genérico:** "Pide tu cita ahora".
    *   *Mejora:* "Diagnostica tu coche hoy" o "Reserva tu hora sin esperas".
4.  **Urgencia:** No hay sensación de disponibilidad limitada o tiempos de respuesta.
    *   *Mejora:* Añadir un indicador "🟢 Taller Abierto - Respondemos en < 15 min".

---

## 5️⃣ RENDIMIENTO Y ESTRUCTURA TÉCNICA

### 🛠️ Código & Performance
*   **React + Vite:** La elección es perfecta para una web rápida.
*   **Exceso de CSS Personalizado:** `index.css` contiene muchas animaciones (`@keyframes`) que engordan el CSS critico.
    *   *Acción:* Migrar animaciones a `tailwind.config.js` o usar librerías de animación JS (Motion) que se limpian tras la ejecución.
*   **Manejo de Imágenes:**
    *   El logotipo se manipula con filtros CSS costosos para el navegador (`filter: invert(1)...`).
    *   *Solución:* Servir imágenes WebP optimizadas y en el color correcto desde el diseño.
*   **Lazy Loading:** Verificar que el mapa y los componentes pesados (Testimonios) carguen solo cuando entran en el viewport (observado uso de `IntersectionObserver`, correcto, pero mejorable con librerías dedicadas).

---

## 6️⃣ PROPUESTA DE REDISEÑO ESTRATÉGICO

**Concepto:** "Ingeniería Alemana, Trato de Barrio".

### 📐 Nueva Estructura Ideal
1.  **Top Bar (Negra):** Urgencia ("Citas disponibles para hoy") + Teléfono.
2.  **Hero Section:**
    *   Fondo: Video loop muy oscuro de un motor ensamblándose o mecánico con luz de trabajo (cinemático).
    *   Titular gigante + Social Proof + 2 Botones (Llamar / WhatsApp).
3.  **Marquee de Marcas:** Tira infinita con logos de BMW, Audi, Mercedes, Seat, Ford... en gris monocromo (Autoridad).
4.  **Bento Grid de Servicios:**
    *   Bloque grande: Diagnosis Avanzada.
    *   Bloques medios: Mantenimiento, Frenos.
    *   Bloques pequeños: Aire Acondicionado, Neumáticos.
5.  **Sección "Mecánica Honesta":** (Diferenciación)
    *   Foto del dueño/equipo real.
    *   Copy sobre transparencia y sin sorpresas.
6.  **Garantías:** Iconografía moderna (Escudo, Check, Reloj).
7.  **Footer SEO:** Enlaces a servicios específicos y zonas.

---

## 7️⃣ PRIORIDAD DE CAMBIOS

| Nivel | Acción | Justificación |
| :--- | :--- | :--- |
| 🔴 **URGENTE** | **Logotipo & Branding:** Eliminar filtros CSS, usar assets reales. | Imagen de marca pobre actualmente. |
| 🔴 **URGENTE** | **Prueba Social en Hero:** Añadir estrellas/valoraciones arriba. | Aumenta confianza en < 3 seg. |
| 🟠 **ALTA** | **Migración a Framer Motion:** Suavizar todas las animaciones. | Experiencia "Premium" y fluida. |
| 🟠 **ALTA** | **Rediseño Servicios (Bento):** Romper la monotonía del grid actual. | Modernidad visual 2026. |
| 🟢 **MEDIA** | **Sección Marcas:** Añadir carrusel de logos de coches. | Autoridad visual. |
| 🟢 **BAJA** | **Micro-interacciones:** Hover effects avanzados. | "Delight" para el usuario. |

---

**Siguiente Paso Recomendado:**
Comenzar por la **Fase de Pulido Visual (Branding & Assets)** antes de reestructurar el código, para asegurar que la base gráfica acompañe a la calidad técnica.
