import styles from '../../styles/home/contact.module.scss'
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import Button from '../../components/Button';
import { useTranslation } from 'react-i18next';
export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className={styles.contactBox} >

      <div className={styles.bomDia}><Button /> <MouseParallax><h1>{t("teste1")}</h1></MouseParallax></div>
    </div>
  )
}
