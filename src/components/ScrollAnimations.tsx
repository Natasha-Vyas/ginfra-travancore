'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize scroll animations whenever the pathname changes
    const initScrollAnimations = () => {
      // Clean up existing observers
      const existingObservers = (window as any).scrollObservers || []
      existingObservers.forEach((observer: IntersectionObserver) => {
        observer.disconnect()
      })

      // Intersection Observer for scroll animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            // Optional: unobserve after animation to improve performance
            observer.unobserve(entry.target)
          }
        })
      }, observerOptions)

      // Observe all elements with scroll animation classes
      const animateElements = document.querySelectorAll(
        '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
      )
      
      animateElements.forEach(el => observer.observe(el))

      // Parallax effect for hero background elements
      const parallaxElements = document.querySelectorAll('.parallax')
      
      function handleParallax() {
        const scrolled = window.pageYOffset
        const rate = scrolled * -0.5
        
        parallaxElements.forEach(element => {
          (element as HTMLElement).style.transform = `translateY(${rate}px)`
        })
      }

      // Throttled scroll handler for better performance
      let ticking = false
      function requestTick() {
        if (!ticking) {
          requestAnimationFrame(handleParallax)
          ticking = true
          setTimeout(() => { ticking = false }, 16) // ~60fps
        }
      }

      // Remove existing scroll listeners
      window.removeEventListener('scroll', (window as any).scrollHandler)
      
      // Add new scroll listener
      const scrollHandler = requestTick
      window.addEventListener('scroll', scrollHandler)
      ;(window as any).scrollHandler = scrollHandler

      // Counter animation
      function animateCounters() {
        const counters = document.querySelectorAll('.counter')
        
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target') || '0')
          const duration = 2000 // 2 seconds
          const increment = target / (duration / 16) // 60fps
          let current = 0
          
          const updateCounter = () => {
            if (current < target) {
              current += increment
              counter.textContent = Math.ceil(current).toString()
              requestAnimationFrame(updateCounter)
            } else {
              counter.textContent = target.toString()
            }
          }
          
          // Start counter when element is visible
          const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                updateCounter()
                counterObserver.unobserve(entry.target)
              }
            })
          }, { threshold: 0.5 })
          
          counterObserver.observe(counter)
        })
      }

      // Initialize counter animations
      animateCounters()

      // Smooth reveal for cards and sections
      const revealElements = document.querySelectorAll('.reveal-on-scroll')
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            revealObserver.unobserve(entry.target)
          }
        })
      }, { threshold: 0.2 })

      revealElements.forEach(el => {
        revealObserver.observe(el)
      })

      // Store observers for cleanup
      ;(window as any).scrollObservers = [observer, revealObserver]
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initScrollAnimations, 100)

    return () => {
      clearTimeout(timer)
      // Cleanup on unmount
      const observers = (window as any).scrollObservers || []
      observers.forEach((observer: IntersectionObserver) => {
        observer.disconnect()
      })
      if ((window as any).scrollHandler) {
        window.removeEventListener('scroll', (window as any).scrollHandler)
      }
    }
  }, [pathname]) // Re-run when pathname changes

  return null // This component doesn't render anything
}