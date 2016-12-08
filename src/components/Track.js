import React from 'react'

const Track = props => {
  let {track} = props
  return (
    <div>
      <h2>{track.origin.title}</h2>
    </div>
  )
}

export default Track
