import styles from '../styles/components/carousel.module.scss'
import img from '../images/imgExp.png'
import img2 from '../images/avatar.png'
import img3 from '../images/controle.png'
import { useState, useEffect, useRef } from "react";
export default function Carousel() {


  return (
    <div className={styles.boxCarousel}>
      <div className={styles.carousel}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <h2>Dev Front-End</h2>
        <h3>Hurst Capital</h3>
      </div>
    </div>
  )
}
