'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const AnimatedStatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  
  const [yearsCount, setYearsCount] = useState(0)
  const [sessionsCount, setSessionsCount] = useState(0)

  // Animation function for counting
  const animateValue = (
    start: number,
    end: number,
    duration: number,
    setValue: (value: number) => void
  ) => {
    let startTimestamp: number | null = null
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const currentValue = Math.floor(progress * (end - start) + start)
      setValue(currentValue)
      
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    
    window.requestAnimationFrame(step)
  }

  useEffect(() => {
    if (isInView) {
      // Reset counters to 0 when component comes into view
      setYearsCount(0)
      setSessionsCount(0)
      
      // Start animations
      animateValue(0, 8, 3000, setYearsCount)
      animateValue(0, 500, 3000, setSessionsCount)
    }
  }, [isInView])

  return (
    <div className='w-full bg-teal-800 flex items-center'>
    <div ref={ref} className="w-full max-w-[1400px] py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          {/* Years Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6">
              {yearsCount}+
            </div>
            <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">
              Years Experience
            </h3>
            <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-md mx-auto">
              Providing compassionate and effective Individual and Couples Therapy
            </p>
          </motion.div>

          {/* Individual Client Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6">
              {sessionsCount.toLocaleString()}+
            </div>
            <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">
              Individual Client Sessions
            </h3>
            <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-md mx-auto">
              Helping individuals and couples heal, grow, and find purpose
            </p>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AnimatedStatsSection