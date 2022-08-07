import { SectionsContainer, Section } from 'react-fullpage';
import WhoAmI from './components/home/WhoAmI';
import Experiences from './components/home/Experiences';
import Skills from './components/home/Skills';
import Projects from './components/home/Projects';
import Contact from './components/home/Contact';
export default function Nav() {
  let options = {
    anchors: ['WhoAmI', 'Experiences', 'Skills', 'Projects', 'Contact'],
  };
  return (
    <div>
      <SectionsContainer {...options} >
        <Section><WhoAmI /></Section>
        <Section><Experiences /></Section>
        <Section><Skills /></Section>
        <Section><Projects /></Section>
        <Section><Contact /></Section>
      </SectionsContainer>
    </div >

  )
}
