

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
