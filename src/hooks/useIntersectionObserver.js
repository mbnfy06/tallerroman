import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for scroll-triggered animations using IntersectionObserver.
 * Returns a ref to attach to the element and a boolean indicating visibility.
 *
 * @param {Object} options
 * @param {number} options.threshold - Percentage of element visible to trigger (0-1)
 * @param {string} options.rootMargin - Margin around root element
 * @param {boolean} options.triggerOnce - Only trigger once (default: true)
 */
export function useIntersectionObserver({
    threshold = 0.15,
    rootMargin = '0px 0px -40px 0px',
    triggerOnce = true,
} = {}) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (triggerOnce) {
                        observer.unobserve(element)
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false)
                }
            },
            { threshold, rootMargin }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [threshold, rootMargin, triggerOnce])

    return [ref, isVisible]
}

/**
 * Hook to apply scroll animation class to multiple children with stagger.
 * Attach the returned ref to a container element.
 */
export function useStaggerAnimation({
    threshold = 0.1,
    rootMargin = '0px 0px -20px 0px',
    staggerDelay = 100,
} = {}) {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = containerRef.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Set stagger index CSS variable on each child
                    const children = element.children
                    Array.from(children).forEach((child, index) => {
                        child.style.setProperty('--stagger-index', index)
                        child.style.transitionDelay = `${index * staggerDelay}ms`
                    })
                    observer.unobserve(element)
                }
            },
            { threshold, rootMargin }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [threshold, rootMargin, staggerDelay])

    return [containerRef, isVisible]
}
