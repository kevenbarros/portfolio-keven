import { useEffect, useState } from 'react'


const useScrollHorizontally = (element) => {
  const [isGrabbing, setIsGrabbing] = useState(false)

  useEffect(() => {
    const current = element.current

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    // Momentum
    let velX = 0
    let momentumID = 0
    const mouseTouchDownFunction = (e) => {
      const targetElement = e
      isDown = true
      setIsGrabbing(true)
      startX = targetElement.changedTouches[0].pageX - current.offsetLeft
      scrollLeft = current.scrollLeft
      cancelMomentumTracking()
    }
    const mouseDownFunction = (e) => {
      const targetElement = e
      isDown = true
      setIsGrabbing(true)
      startX = targetElement.pageX - current.offsetLeft
      scrollLeft = current.scrollLeft
      cancelMomentumTracking()
    }
    const mouseTouchLeaveFunction = () => {
      isDown = false
      setIsGrabbing(false)
    }
    const mouseLeaveFunction = () => {
      isDown = false
      setIsGrabbing(false)
    }
    const mouseTouchUpFunction = () => {
      isDown = false
      setIsGrabbing(false)
      beginMomentumTracking()
    }
    const mouseUpFunction = () => {
      isDown = false
      setIsGrabbing(false)
      beginMomentumTracking()
    }
    const mouseTouchFunction = (e) => {
      const targetElement = e

      if (!isDown) return
      // targetElement.preventDefault()
      const x = targetElement.changedTouches[0].pageX - current.offsetLeft
      const walk = (x - startX) * 3 //scroll-fast
      let prevScrollLeft = current.scrollLeft
      current.scrollLeft = scrollLeft - walk
      velX = current.scrollLeft - prevScrollLeft
    }

    const mouseMoveFunction = (e) => {
      const targetElement = e

      if (!isDown) return
      targetElement.preventDefault()
      const x = targetElement.pageX - current.offsetLeft
      const walk = (x - startX) * 3 //scroll-fast
      let prevScrollLeft = current.scrollLeft
      current.scrollLeft = scrollLeft - walk
      velX = current.scrollLeft - prevScrollLeft
    }

    // Momentum
    const wheelFunction = () => {
      cancelMomentumTracking()
    }

    const beginMomentumTracking = () => {
      cancelMomentumTracking()
      momentumID = requestAnimationFrame(momentumLoop)
    }

    const cancelMomentumTracking = () => {
      cancelAnimationFrame(momentumID)
    }

    const momentumLoop = () => {
      current.scrollLeft += velX
      velX *= 0.95
      if (Math.abs(velX) > 0.5) {
        momentumID = requestAnimationFrame(momentumLoop)
      }
    }

    current.addEventListener('mousedown', mouseDownFunction)
    current.addEventListener('mouseleave', mouseLeaveFunction)
    current.addEventListener('mouseup', mouseUpFunction)
    current.addEventListener('mousemove', mouseMoveFunction)
    current.addEventListener('wheel', wheelFunction)
    current.addEventListener('touchmove', mouseTouchFunction)
    current.addEventListener('touchend', mouseTouchUpFunction)
    current.addEventListener('touchstart', mouseTouchDownFunction)
    current.addEventListener('touchcancel', mouseTouchLeaveFunction)


    return () => {
      current.removeEventListener('mousedown', mouseDownFunction)
      current.removeEventListener('mouseleave', mouseLeaveFunction)
      current.removeEventListener('mouseup', mouseUpFunction)
      current.removeEventListener('mousemove', mouseMoveFunction)
      current.removeEventListener('wheel', wheelFunction)
      current.removeEventListener('touchmove', mouseTouchFunction)
      current.removeEventListener('touchend', mouseTouchUpFunction)
      current.removeEventListener('touchstart', mouseTouchDownFunction)
      current.removeEventListener('touchcancel', mouseTouchLeaveFunction)
    }
  }, [element])

  return { isGrabbing }
}

export default useScrollHorizontally
