import React from 'react';
import { connect } from 'react-redux'
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

function mapStateToProps(state) {
  const tracks = state.track
  return {
    tracks,
  }
}

export default connect(mapStateToProps)(Stream)
