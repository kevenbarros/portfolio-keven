import styles from '../styles/Home.module.css'
import { MouseParallax, ScrollParallax } from "react-just-parallax";

export default function One() {
  function teste(e) {
    alert('oi')
  }
  const handleScroll = () => { alert('oi2') }

  return (
    <div className={styles.one} onScroll={(e) => teste(e)} id="one2">

      <div className={styles.bomDia}> <MouseParallax><h1>oi</h1></MouseParallax></div>
    </div>
  )
}
