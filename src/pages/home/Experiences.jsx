import styles from '../../styles/home/experiences.module.scss'
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useTranslation } from 'react-i18next';
import img from '../../images/imgExp.png'
import React, { useEffect, useRef } from "react";
import Carousel from '../../components/Carousel';
export default function Experiences() {
  const { t } = useTranslation();

  return (
    <div className={styles.experiencesBox} >
      <h1 className={styles.title}>Minhas experiências</h1>
      <div className={styles.expContent}>
        <main className={styles.main} id="mainTeste">
          <Carousel />

        </main>
        <div className={styles.imagem}>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}
