import styles from '../../styles/home/whoAmI.module.scss'
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useTranslation } from 'react-i18next';
import avatar from '../../images/avatar.png'
import game from '../../images/controle.png'
import Arrow from '../../images/Arrow.svg'
import { useState } from 'react';

export default function WhoAmI() {
  const [modal, setModal] = useState('MyGoals')
  const { t } = useTranslation();
  async function openModal(id) {
    if (id === modal) {
      return
    }
    setModal(id)
  }
  return (
    <div className={styles.whoAmIBox} >
      <div className={styles.whoAmIContent}>
        <main>
          <div className={styles.whoAmIDescripition}>
            <h1 className={styles.titleName}>{t('whoAmI.title')}</h1>
            <h3 className={styles.subTitle}>{t('whoAmI.subTitlePt1')}<br />{t('whoAmI.subTitlePt2')}<span className={styles.subTitleFront}>&nbsp;{t('whoAmI.subTitlePt3')}</span></h3>
          </div>
          <div className={styles.line}></div>
          <div className={styles.chestOfDrawers}>
            <div onClick={() => openModal('MyGoals')}>
              <h4>
                {t('whoAmI.MyGoals.title')}
              </h4>
              <img className={modal === "MyGoals" ? styles.activeArrow : styles.desableArrow} src={Arrow} alt="flexa que abre e fecha meus Objetivos" />
            </div>
            <p className={modal === "MyGoals" ? styles.active : styles.desable}>
              {t('whoAmI.MyGoals.subTitle')}
            </p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.chestOfDrawers}>
            <div onClick={() => openModal('MyHobbies')}>
              <h4>
                {t('whoAmI.MyHobbies.title')}
              </h4>
              <img className={modal === "MyHobbies" ? styles.activeArrow : styles.desableArrow} src={Arrow} alt="flexa que abre e fecha meu hobbies" />
            </div>
            <p className={modal === "MyHobbies" ? styles.active : styles.desable}>
              {t('whoAmI.MyHobbies.subTitle')}
            </p>
          </div>
        </main>
        <div className={styles.imgVarible}>
          <div>
            <ScrollParallax className={styles.teste}><img src={modal === "MyHobbies" ? game : avatar} className={styles.imageIlustration} alt="" srcset="" /></ScrollParallax>
          </div>
        </div>
      </div>
    </div>
  )
}
