import React from 'react'

const Track = props => {
  let {track, onPlay} = props
  return (
    <div className="track">
      <h4>{track.origin.title}</h4>
      <button
        type="button"
        onClick={() => onPlay(track) }>
        Play
      </button>
    </div>
  )
}

export default Track
