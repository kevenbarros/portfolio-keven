import styles from '../../styles/home/experiences.module.scss'
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useTranslation } from 'react-i18next';
import img from '../../images/imgExp.png'
import React, { useEffect, useRef } from "react";
import ScrollBox from '../../components/scrollBox'
import useScreenSize from '../../hooks/useScreenSize';
export default function Experiences() {
  const divRef = useRef(null)
  const { screenSize } = useScreenSize()
  const { t } = useTranslation();
  const assetsListArray = [
    'HCP__JUDICIAL',
    'HCP__REAL_STATE',
    'HCP__WORKS_OF_ART',
    'HCP__CORPORATE',
    'HCP__MUSICAL_ROYALTIES',
    'HCP__CRYPTO',
    'HCP__CRYPTO',
  ]
  useEffect(() => {
    const dom = document.getElementById("mainTeste")
    const width = dom.offsetWidth + 820;
    const diff = (width - screenSize) / 2
    const spaceLess = diff

    if (screenSize <= 1440 && screenSize >= 1060) {
      if (divRef.current) {
        divRef.current.style.width = `calc(100% - ${190 - spaceLess}px)`
      }
    }
  }, [screenSize])
  return (
    <div className={styles.experiencesBox} >
      <div className={styles.expContent}>
        <main className={styles.main} id="mainTeste">
          <div className={styles.oi} ref={divRef}>
            <ScrollBox>
              {assetsListArray.map((elAs, index) => (
                <div
                  className={styles.div}
                  key={index}
                >
                  <div className="text-[24px] text-p-ultra-dark leading-[153%] mt-[15px] mb-[11px] tablet:text-[16px]">
                  </div>
                  <div className="text-[14px] text-p-ultra-dark leading-[150.5%] tablet:text-[14px]">
                    {t(`HCP_ASSETS_DESCRIPTION.${elAs}`)}
                  </div>
                </div>
              ))}
            </ScrollBox>
          </div>

        </main>
        <div>
          {/* <img src={img} alt="" /> */}
        </div>
      </div>
    </div>
  )
}
