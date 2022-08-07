
import style from '../styles/Home.module.css'
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import ReactFullpage from "react-fullpage";
import { SectionsContainer, Section } from 'react-fullpage';
import One from './one';
import Two from './two';
export default function Nav() {
  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
  };
  return (
    <div>
      <SectionsContainer {...options} >
        <Section><One /></Section>
        <Section><Two /></Section>
        <Section>Page 3</Section>
      </SectionsContainer>

    </div >

  )
}
