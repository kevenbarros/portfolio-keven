import styles from '../../styles/home/experiences.module.scss'
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useTranslation } from 'react-i18next';

export default function Experiences() {
  const { t } = useTranslation();

  return (
    <div className={styles.experiencesBox} >
      <div className={styles.contactBox} >
        <div className={styles.contactContent}>
          <form action="" className={styles.formBox}>
            <h3>{t('contact.titleForm')}</h3>
            <div>
              <label htmlFor=""></label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor=""></label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor=""></label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

          </form>
          <div>
            <img src='' alt="" className={styles.coffe} />
          </div>
        </div>
      </div>
    </div>
  )
}
