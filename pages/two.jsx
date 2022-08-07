import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useEffect } from 'react';
export default function Two() {
  function teste(e) {
    alert('oi')
  }
  const handleScroll = () => { alert('oi2') }
  useEffect(() => {
    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <div className={styles.two} onScroll={(e) => teste(e)} id="two">


      <div className={styles.bomDia}> <ScrollParallax><h1>bomdia</h1></ScrollParallax></div>

    </div>
  )
}
