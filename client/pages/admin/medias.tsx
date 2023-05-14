import React from 'react'
import MediaManager from '../../components/MediaManager'
import Authenticated from '../../Layout/Authenticated'

function Media() {
  return (
    <Authenticated>
      <MediaManager />
    </Authenticated>
  )
}

export default Media
