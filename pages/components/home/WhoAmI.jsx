import styles from '../../../styles/home/whoAmI.module.scss'
import { MouseParallax, ScrollParallax } from "react-just-parallax";

export default function WhoAmI() {

  return (
    <div className={styles.whoAmIBox} >

      <div className={styles.bomDia}> <MouseParallax><h1>WhoAmI</h1></MouseParallax></div>
    </div>
  )
}
