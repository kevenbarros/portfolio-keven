import styles from '../../styles/home/skills.module.scss'
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import notbook from '../../images/notbook.png'
import { useEffect } from 'react';
import { useState } from 'react';
import { Line } from 'rc-progress';

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
      percentage: 75,
    },
    {
      title: "React",
      percentage: 70,
    },
    {
      title: "Vue",
      percentage: 75,
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
        }, 12 * o)
      }
    }
    if (skill === 'TypeScript') {
      for (let o = 0; o <= percentage; o++) {
        setTimeout(() => {
          setTypeScript(o)
        }, 12 * o)
      }
    }
    if (skill === 'JavaScript') {
      for (let o = 0; o <= percentage; o++) {
        setTimeout(() => {
          setJavaScript(o)
        }, 12 * o)
      }
    }
    if (skill === 'React') {
      for (let o = 0; o <= percentage; o++) {
        setTimeout(() => {
          setReact(o)
        }, 12 * o)
      }
    }
    if (skill === 'Vue') {
      for (let o = 0; o <= percentage; o++) {
        setTimeout(() => {
          setVue(o)
        }, 12 * o)
      }
    }
    if (skill === 'Git') {
      for (let o = 0; o <= percentage; o++) {
        setTimeout(() => {
          setGit(o)
        }, 12 * o)
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
    <div className={styles.skillsBox}>
      <div className={styles.skillContent}>
        <main className={styles.skill}>
          <h1 className={styles.title}>skill</h1>
          <div className={styles.skillCard}>
            <div className={styles.skillTitle}>
              <h2>HTML/CSS</h2>
              <p>80%</p>
            </div>
            <Line percent={html} trailWidth={1} strokeWidth={1} trailColor="#C4C4C4" strokeColor="#fff" strokeLinecap="round" />
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillTitle}>
              <h2>TypeScript</h2>
              <p>32%</p>
            </div>
            <div>
              <Line percent={typeScript} trailWidth={1} strokeWidth={1} trailColor="#C4C4C4" strokeColor="#fff" strokeLinecap="round" />
            </div>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillTitle}>
              <h2>JavaScript</h2>
              <p>75%</p>
            </div>
            <div>
              <Line percent={javaScript} trailWidth={1} strokeWidth={1} trailColor="#C4C4C4" strokeColor="#fff" strokeLinecap="round" />
            </div>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillTitle}>
              <h2>React js</h2>
              <p>70%</p>
            </div>
            <div>
              <Line percent={react} trailWidth={1} strokeWidth={1} trailColor="#C4C4C4" strokeColor="#fff" strokeLinecap="round" />
            </div>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillTitle}>
              <h2>Vue js</h2>
              <p>75%</p>
            </div>
            <div>
              <Line percent={vue} trailWidth={1} strokeWidth={1} trailColor="#C4C4C4" strokeColor="#fff" strokeLinecap="round" />
            </div>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillTitle}>
              <h2>Git/GitHub</h2>
              <p>85%</p>
            </div>
            <div>
              <Line percent={git} trailWidth={1} strokeWidth={1} trailColor="#C4C4C4" strokeColor="#fff" strokeLinecap="round" />
            </div>
          </div>

        </main>
        <div className={styles.imageBox}>
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
