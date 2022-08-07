import styles from '../../styles/home/skills.module.scss'
import { MouseParallax, ScrollParallax } from "react-just-parallax";

export default function Skills() {

  return (
    <div className={styles.skillsBox} >

      <div className={styles.bomDia}> <MouseParallax><h1>Skills</h1></MouseParallax></div>
    </div>
  )
}
