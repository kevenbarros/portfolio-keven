import styles from '../../styles/home/contact.module.scss'
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import Button from '../../components/Button';
import coffe from '../../images/coffe.svg'
import { useTranslation } from 'react-i18next';
export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className={styles.contactBox} >
      <div className={styles.contactContent}>
        <form action="https://api.staticforms.xyz/submit" method="POST" className={styles.formBox}>
          <input type="hidden" name="accessKey" value="a652af61-d092-4dce-85ff-b90bf4d0af65" />
          <input type="hidden" name="redirectTo" value="https://portfolio-keven.vercel.app/" />
          <h3>{t('contact.titleForm')}</h3>
          <div>
            <label htmlFor="">{t("contact.lableName")}</label>
            <input type="text" name="name" placeholder={t("contact.placeholder.name")} />
          </div>
          <div>
            <label htmlFor="">{t("contact.labeleEmail")}</label>
            <input type="text" name="email" placeholder={t("contact.placeholder.email")} />
          </div>
          <div>
            <label htmlFor="">{t("contact.lableMessage")}</label>
            <textarea name="message" id="" maxlength="30" cols="30" rows="4" placeholder={t("contact.placeholder.description")}></textarea>
          </div>
          <button className={styles.button} >{t('contact.button')}</button>
        </form>
        <div>
          <img src={coffe} alt="" className={styles.coffe} />
        </div>
      </div>
    </div>
  )
}
