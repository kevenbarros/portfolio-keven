import styles from '../../../styles/home/experiences.module.scss'
import { MouseParallax, ScrollParallax } from "react-just-parallax";

export default function Experiences() {

  return (
    <div className={styles.experiencesBox} >

      <div className={styles.bomDia}> <MouseParallax><h1>Experiences</h1></MouseParallax></div>
    </div>
  )
}
