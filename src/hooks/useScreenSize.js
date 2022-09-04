import { useEffect, useState } from 'react'

const useScreenSize = (baseWidth) => {
  const [width, setWidth] = useState(0);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    handleWindowSizeChange();

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return {
    screenSize: width,
    isDesktop: width >= 768,
    isMobile: baseWidth ? width <= baseWidth : width <= 768,
  }
}

export default useScreenSize
