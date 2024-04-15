'use client'
import React from 'react'
import mock1 from '@/app/ui/components/Common/MultimediaContent3/mock'
import styles from '@/app/ui/components/Common/MultimediaContent3/multimedia-content.module.css'
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
export const mockMultimediaContent3 = mock1
export type MultimediaContentType3 = {
  title: string
  video: string
}

function MultimediaContent3({ video, title }: MultimediaContentType3) {
  return (
    <>
      <h2 className={styles.h2}>{title}</h2>
      <section className={styles.MultimediaContent_wrapper}>
        <div className={styles.MultimediaContent_video}>
          <LiteYouTubeEmbed 
            id="zKRj-SAvhFg"
            title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
          />
        </div>
      </section>
    </>
  )
}

export default MultimediaContent3
