import { useRef } from 'react'
import useScrollHorizontallyMomentum from '../hooks/useScrollHorizontally'
import useDynamicBulltes from '../hooks/useDynamicBullets'
import styles from '../styles/components/scrollbox.module.scss'
import { useEffect } from 'react'

const ScrollBoxContainer = ({ children }) => {
  const divRef = useRef(null)
  const { isGrabbing } = useScrollHorizontallyMomentum(divRef)
  const { checkVisible, currentBullet, showBullets, bulletsArray } = useDynamicBulltes(divRef)
  function grab() {
    if (!isGrabbing) {
      return 'grab'
    }
    return 'grabbing'
  }
  return (
    <div style={{ width: '100%' }}>
      <div
        ref={divRef}
        onMouseOver={() => checkVisible()}
        onMouseOut={() => checkVisible()}
        style={{ cursor: grab() }}
        className={styles.box}
      >
        {children}
      </div>
      {
        showBullets && (
          <div className={styles.bulletBox}>
            <div className={styles.bulletContent}>
              {bulletsArray.map((elb) => (
                <div>
                  <div
                    className={elb === currentBullet ? styles.bulletActive : styles.bulletInative}
                    key={elb}
                  >
                    &nbsp;
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      }
    </div >
  )
}

export default ScrollBoxContainer
