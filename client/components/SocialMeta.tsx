import Head from 'next/head'
import React from 'react'

interface PropType {
  title: string,
  description?:string
}

function SocialMeta({ title ="" ,description = ""}: PropType) {
  return (
    <div>
      <Head>
        <title>{title} </title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key={description}
        />
      </Head>
    </div>
  )
}

export default SocialMeta
