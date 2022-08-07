import styles from '../../../styles/home/projects.module.scss'
import { MouseParallax, ScrollParallax } from "react-just-parallax";

export default function Projects() {

  return (
    <div className={styles.projectsBox} >

      <div className={styles.bomDia}> <MouseParallax><h1>Projects</h1></MouseParallax></div>
    </div>
  )
}
