import React from 'react'
import Track from "./Track"
import Player from './Player'

const Stream = ({ tracks = [], activeTrack, onAuth, user, onPlay }) => {
  let trackList = tracks.map((track, index) => {
    return (
      <Track track={track} key={index} onPlay={onPlay} />
    )
  })

  return (
    <div>
      <h1>BeatWave</h1>
      <div>
        {
          user ? <p>Welcome {user.username}</p>
          : <button onClick={onAuth} type="button">Login</button>
        }
      </div>
      <br/>
      <div>
        {trackList}
      </div>
      <div>
        <Player activeTrack={activeTrack} />
      </div>
    </div>
  )
}

export default Stream
