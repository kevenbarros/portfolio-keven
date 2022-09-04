import styles from '../../styles/home/projects.module.scss'
import useScreenSize from '../../hooks/useScreenSize';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollBox from '../../components/scrollBox'
import rick from '../../images/rick.png'
import moon from '../../images/moon.png'
import faceDogs from '../../images/faceDogs.png'
import batalha from '../../images/batalha.png'
import flappyBird from '../../images/flappyBird.png'
import letMeAsk from '../../images/letMeAsk.png'

export default function Projects() {
  const divRef = useRef(null)
  const { screenSize } = useScreenSize()
  const { t } = useTranslation();
  const assetsListArray = [
    { title: 'Moon', subTitle: 'A Moon é um software feito em react js, com o intuito de gerenciar as dívidas pessoais.', url: 'qualquer', img: moon, color: 'black' },
    { title: 'FaceDogs', subTitle: 'Uma rede social de doginhos, feita em React js', url: 'qualquer', img: faceDogs, color: 'black' },
    { title: 'Letmeask', subTitle: 'Letmeask é um chat de perguntas ao vivo, feito com react js e firebase ', url: 'qualquer', img: letMeAsk, color: 'white' },
    { title: 'Rick and Morty', subTitle: 'Inspirado no desenho Rick and morty, esse projeto é feito com puro html e css', url: 'qualquer', img: rick, color: 'white' },
    { title: 'Batalha espacial', subTitle: 'Um jogo de nave espacial, feito com Javascript', url: 'qualquer', img: batalha, color: 'white' },
    { title: 'Flappy bird', subTitle: 'o clássico jogo Flappy bird, feito com Javascript', url: 'qualquer', img: flappyBird, color: 'white' },
  ]
  useEffect(() => {
    const dom = document.getElementById("mainTeste")
    const width = dom.offsetWidth + 70;
    const diff = (width - screenSize) / 2
    const spaceLess = diff
    if (screenSize <= 1440 && screenSize >= 1060) {
      if (divRef.current) {
        divRef.current.style.width = `calc(100% - ${190 - spaceLess}px)`
      }
    }
  }, [screenSize])
  return (
    <div className={styles.projectsBox} >

      <div className={styles.projectsContent}>
        {/* <MouseParallax><h1>Projects</h1></MouseParallax> */}
        <main className={styles.ProjectsBoxCarousel}>
          <div className={styles.ProjectsContentCarousel}>
            <ScrollBox>
              {assetsListArray.map((projeto, index) => (
                <div
                  className={styles.card}
                  key={index}
                  style={{ backgroundImage: `url(${projeto.img})` }}
                >
                  <div className={styles.contentTextCard} >
                    <div className={styles.textCard} onT>
                      <h3 className={projeto.color == "white" && styles.colorWhite}>{projeto.title}</h3>
                      <h4 className={projeto.color == "white" && styles.colorWhite}>{projeto.subTitle}</h4>
                    </div>
                  </div>

                </div>
              ))}
            </ScrollBox>
          </div>
        </main>
      </div >
    </div >
  )
}
