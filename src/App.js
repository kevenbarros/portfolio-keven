import { useEffect } from "react";
import Nav from "./pages/home/Nav";
import MenuIcon from "./components/icons/Menu";
import styles from "./styles/Home.module.css"
import { useState } from "react";
function App() {
  const [menuMobile, setMenuMobile] = useState(false)
  useEffect(() => {
    mouseEdit()
  }, [])
  function mouseOverNav() {
    const cursorRounded = document.getElementById('cursorBox');
    const cursorBoxinternal = document.getElementById('cursorBoxinternal')
    if (cursorRounded) {
      cursorRounded.style.borderColor = '#ffff';
      cursorBoxinternal.style.backgroundColor = '#ffff';
    }
  }
  function mouseOutNav() {
    const cursorRounded = document.getElementById('cursorBox');
    const cursorBoxinternal = document.getElementById('cursorBoxinternal')
    if (cursorRounded) {
      cursorRounded.style.borderColor = '#061A30';
      cursorBoxinternal.style.backgroundColor = '#061A30';
    }
  }
  function mouseEdit() {
    const cursorRounded = document.getElementById('cursorBox');

    const moveCursor = (e) => {
      let mouseY = e.clientY - 15;
      let mouseX = e.clientX - 15;
      if (cursorRounded) {
        cursorRounded.style.top = `${mouseY}px`
        cursorRounded.style.left = `${mouseX}px`
      }
    }
    window.addEventListener('mousemove', moveCursor)
  }

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.mainNavigation} ${menuMobile ? styles.activeMenu : ''}`} onMouseOver={mouseOverNav} id="navBox">
      </div>
      <div className={styles.mainContent} onMouseOver={mouseOutNav}>
        <Nav />
      </div>
      <div className={styles.cursorBox} id="cursorBox">
        <div className={styles.cursorBoxinternal} id="cursorBoxinternal">
        </div>
      </div>
      <div className={styles.mainNavigationMobile} onClick={() => setMenuMobile(!menuMobile)}>
        <MenuIcon fill={menuMobile ? '#fff' : '#061A30'} />
      </div>
    </div >
  );
}

export default App;
