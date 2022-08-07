import styles from '../../styles/home/contact.module.scss'
import { MouseParallax, ScrollParallax } from "react-just-parallax";

export default function Contact() {

  return (
    <div className={styles.contactBox} >

      <div className={styles.bomDia}> <MouseParallax><h1>Contact</h1></MouseParallax></div>
    </div>
  )
}
