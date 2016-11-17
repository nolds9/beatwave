import React from 'react';
import Track from "./Track"

const Stream = ({ tracks = [] }) => {
  let trackList = tracks.map((track) => {
    return (
      <Track track={track} key={track.id} />
    )
  })
  
  return (
    <div>
      <h1>Hello World</h1>
        {trackList}
    </div>
  )
}

export default Stream
