import { SectionsContainer, Section } from 'react-fullpage';
import WhoAmI from './WhoAmI'
import Experiences from './Experiences'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function Nav() {
  let options = {
    anchors: ['WhoIAm', 'Experiences', 'Skills', 'Projects', 'Contact'],
    arrowNavigation: true,
    navigation: false,
  };
  const handleScroll = () => {
    const timeOut = setTimeout(() => {
      addClass()
    }, 1000);
  }
  function addClass() {
    let path = window.location.hash.replace('#', '')
    path = path[0].toLowerCase() + path.slice(1)
    const section = document.getElementById(path)
    const classDom = document.querySelector('.Section')
    if (classDom) classDom.classList.remove('Section')
    if (section) section.classList.add('Section')
  }
  return (
    <div className="App" onWheel={() => handleScroll()} >
      <SectionsContainer  {...options}>
        <Section >
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
