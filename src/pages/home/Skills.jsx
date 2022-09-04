import styles from '../../styles/home/skills.module.scss'
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import notbook from '../../images/notbook.png'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Skills() {
  const [html, setHtml] = useState(0)
  const [typeScript, setTypeScript] = useState(0)
  const [javaScript, setJavaScript] = useState(0)
  const [react, setReact] = useState(0)
  const [vue, setVue] = useState(0)
  const [git, setGit] = useState(0)
  const skills = [
    {
      title: "HTML/CSS",
      percentage: 80,
    },
    {
      title: "TypeScript",
      percentage: 32,
    },
    {
      title: "JavaScript",
      percentage: 80,
    },
    {
      title: "React",
      percentage: 70,
    },
    {
      title: "Vue",
      percentage: 80,
    },
    {
      title: "Git",
      percentage: 85,
    },
  ]
  let path = window.location.hash
  function initialValue(skill, percentage) {
    if (skill === 'HTML/CSS') {
      for (let o = 0; o <= percentage; o++) {
        setTimeout(() => {
          setHtml(o)
        }, 8 * o)
      }
    }
    if (skill === 'TypeScript') {
      for (let o = 0; o <= percentage; o++) {
        setTimeout(() => {
          setTypeScript(o)
        }, 8 * o)
      }
    }
    if (skill === 'JavaScript') {
      for (let o = 0; o <= percentage; o++) {
        setTimeout(() => {
          setJavaScript(o)
        }, 8 * o)
      }
    }
    if (skill === 'React') {
      for (let o = 0; o <= percentage; o++) {
        setTimeout(() => {
          setReact(o)
        }, 8 * o)
      }
    }
    if (skill === 'Vue') {
      for (let o = 0; o <= percentage; o++) {
        setTimeout(() => {
          setVue(o)
        }, 8 * o)
      }
    }
    if (skill === 'Git') {
      for (let o = 0; o <= percentage; o++) {
        setTimeout(() => {
          setGit(o)
        }, 8 * o)
      }
    }
  }
  useEffect(() => {
    if (path === "#Skills") {
      skills.map((skill) => {
        initialValue(skill.title, skill.percentage)
      })
    } else {
      setGit(0)
      setHtml(0)
      setJavaScript(0)
      setReact(0)
      setTypeScript(0)
      setVue(0)
    }
  }, [path])

  return (
    <div className={styles.skillsBox} >
      <div className={styles.skillContent}>
        <main className={styles.skill}>
          <h1 className={styles.title}>skill</h1>
          <div className={styles.skillCard}>
            <div className={styles.skillTitle}>
              <h2>HTML/CSS</h2>
              <p>{html}%</p>
            </div>
            <div>
              <div className={styles.barBack}>
                <div className={styles.barFront}
                  style={{ width: `${html}%` }}></div>
              </div>
            </div>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillTitle}>
              <h2>TypeScript</h2>
              <p>{typeScript}%</p>
            </div>
            <div>
              <div className={styles.barBack}>
                <div className={styles.barFront}
                  style={{ width: `${typeScript}%` }}></div>
              </div>
            </div>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillTitle}>
              <h2>JavaScript</h2>
              <p>{javaScript}%</p>
            </div>
            <div>
              <div className={styles.barBack}>
                <div className={styles.barFront}
                  style={{ width: `${javaScript}%` }}></div>
              </div>
            </div>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillTitle}>
              <h2>React js</h2>
              <p>{react}%</p>
            </div>
            <div>
              <div className={styles.barBack}>
                <div className={styles.barFront}
                  style={{ width: `${react}%` }}></div>
              </div>
            </div>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillTitle}>
              <h2>Vue js</h2>
              <p>{vue}%</p>
            </div>
            <div>
              <div className={styles.barBack}>
                <div className={styles.barFront}
                  style={{ width: `${vue}%` }}></div>
              </div>
            </div>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillTitle}>
              <h2>Git/GitHub</h2>
              <p>{git}%</p>
            </div>
            <div>
              <div className={styles.barBack}>
                <div className={styles.barFront}
                  style={{ width: `${git}%` }}></div>
              </div>
            </div>
          </div>

        </main>
        <div className={styles.imageBox}>
          <div></div>
          <div className={styles.imageContent}>
            <ScrollParallax>
              <img src={notbook} alt="" srcset="" />
            </ScrollParallax>
          </div>
        </div>
      </div>
    </div>
  )
}
