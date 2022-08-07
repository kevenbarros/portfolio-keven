
import styles from '../styles/Home.module.css'
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import ReactFullpage from "react-fullpage";
import { SectionsContainer, Section } from 'react-fullpage';
import One from './one';
import Two from './two';
import style from "../styles/Home.module.css"
import Nav from './nav';
export default function Home() {
  let options = {
    sectionClassName: 'section',
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
    navigation: false
  };
  return (
    <div className={style.r}>
      <div className={style.nav}>

      </div>
      <div className={style.dalhe}>
        <Nav />
      </div>
    </div>


  )
}
