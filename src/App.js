import Nav from "./pages/home/Nav";
import styles from "./styles/Home.module.css"
import "./styles/Menu.css"
import { useState } from "react";
import git from "./images/git.svg"
import instagram from "./images/instagram.svg"
import linkedin from "./images/linke.svg"
import { goToGitPage, goToInstaPage, goToLinkedinPage } from "./helper/common"
import { t } from "i18next";

function App() {
  const [menuMobile, setMenuMobile] = useState(false)
  function sectionSwitch(section) {
    setMenuMobile(false)
    const classDom = document.querySelector('.Section')
    if (classDom) classDom.classList.remove('Section')
    const id = document.getElementById(section)
    id.classList.add('Section')
  }

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.mainNavigation} ${menuMobile ? styles.activeMenu : ''}`} id="navBox">
        <div className="menuBox">
          <div className="menuTitleBox">
            <a href="/#WhoIAm" onClick={() => sectionSwitch('whoIAm')} id="whoIAm">{t('menu.whoIAm')}</a>
            <a href="/#Experiences" onClick={() => sectionSwitch('experiences')} id="experiences">{t('menu.experiences')}</a>
            <a href="/#Skills" onClick={() => sectionSwitch('skills')} id="skills">{t('menu.skills')} </a>
            <a href="/#Projects" onClick={() => sectionSwitch('projects')} id="projects">{t('menu.projects')}</a>
            <a href="/#Contact" onClick={() => sectionSwitch('contact')} id="contact">{t('menu.Contact')}</a>
          </div>
          <div className="contatosBox">
            <img src={git} alt="Logo github" onClick={() => goToGitPage()} />
            <img src={instagram} alt="Logo instagram" onClick={() => goToInstaPage()} />
            <img src={linkedin} alt="Logo linkedin" onClick={() => goToLinkedinPage()} />
          </div>
        </div >
      </div >
      < div className={styles.mainContent} >
        <Nav />
      </ div>
      <div div className={`${styles.mainNavigationMobile} ${menuMobile ? styles.active : ''}`
      } onClick={() => setMenuMobile(!menuMobile)}>
        <span></span>
        <span></span>
        <span></span>
      </div >
    </div >
  );
}

export default App;
