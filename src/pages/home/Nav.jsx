import { SectionsContainer, Section } from 'react-fullpage';
import WhoAmI from './WhoAmI'
import Experiences from './Experiences'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
function Nav() {
  let options = {
    anchors: ['WhoAmI', 'Experiences', 'Skills', 'Projects', 'Contact'],
    arrowNavigation: true,
    navigation: false
  };
  return (
    <div className="App">
      <SectionsContainer {...options}>
        <Section>
          <WhoAmI />
        </Section>
        <Section>
          <Experiences />
        </Section>
        <Section>
          <Skills />
        </Section>
        <Section>
          <Projects />
        </Section>
        <Section>
          <Contact />
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default Nav;
