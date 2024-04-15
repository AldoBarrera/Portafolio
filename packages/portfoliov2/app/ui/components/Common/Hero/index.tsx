import React from 'react'
import mock1 from '@/app/ui/components/Common/Hero/mock'
import Button, { ButtonType } from '@/app/ui/components/Common/Button'
import styles from '@/app/ui/components/Common/Hero/hero.module.css'
export const mockHero = mock1
export type HeroType = {
  title: string
  description?: string
  video?: string
  button: ButtonType
}

const highlightWords = (text: string) => {
  const regex = /{([^{}]*)}/g;
  const parts = text.split(regex);
  
  return parts.map((part, index) => {
    if (index % 2 === 0) {
      return part;
    } else {
      return <span key={index} className={styles.span}>{`{${part}}`}</span>;
    }
  });
};
function Hero({ video, title, description, button }: HeroType) {
  return (
    <div className={styles.Hero_wrapper}>
      <video autoPlay muted loop className={styles.Hero_video}>
        <source src={video} type="video/mp4" />
      </video>
      <section className={styles.Hero_content}>
        <h1 className={styles.h1}>{highlightWords(title)}</h1>
        <p className={styles.p}>{description}</p>
        <Button url={button.url} label={button.label} />
      </section>
    </div>
  )
}

export default Hero
