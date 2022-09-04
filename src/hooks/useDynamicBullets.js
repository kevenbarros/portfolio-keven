import { useCallback, useEffect, useState } from 'react'
import useScreenSize from './useScreenSize'



const useDynamicBulltes = (element) => {
  const { screenSize } = useScreenSize()
  const [isShowAllElements, setIsShowAllElements] = useState(false)
  const [showBullets, setShowBullets] = useState(false)
  const [bulletsArray, setBulltes] = useState([])
  const [currentBullet, setCurrentBullet] = useState(0)

  const isInViewport = (childElement, parentElement) => {
    const parentRect = parentElement.getBoundingClientRect()
    const rect = childElement.getBoundingClientRect()

    return { isVisible: rect.left + 10 >= parentRect.left && rect.right - 10 <= parentRect.right, rect }
  }

  const checkVisible = useCallback(() => {
    const childArray = [...element.current.children]
    let childsWidth = 0
    let oldRight = 0
    let left = 0
    let totalSpaceBetween = 0
    childArray.forEach((child, index) => {
      const { isVisible, rect } = isInViewport(child, element.current)
      let spaceDiff = 0
      left = rect.left
      childsWidth += rect.width

      if (oldRight > 0) {
        spaceDiff = left - oldRight
      }

      if (isVisible) {
        setCurrentBullet(index)
      }

      totalSpaceBetween = totalSpaceBetween + spaceDiff
      oldRight = rect.right
    })

    setIsShowAllElements(element.current.clientWidth > childsWidth + totalSpaceBetween)
  }, [element])

  useEffect(() => {
    const generateBullets = () => {
      const childrenList = [...element.current.children]
      const bulltesArray = childrenList.map((_child, index) => {
        return index
      })

      setBulltes(bulltesArray)
    }

    if (element.current) {
      generateBullets()
      checkVisible()
    }
  }, [checkVisible, element])

  useEffect(() => {
    if (screenSize > 0) {
      checkVisible()
    }
  }, [checkVisible, screenSize])

  useEffect(() => {
    if (isShowAllElements) {
      setShowBullets(false)
    } else {
      setShowBullets(true)
    }

  }, [isShowAllElements])

  return { showBullets, currentBullet, checkVisible, bulletsArray }
}

export default useDynamicBulltes
