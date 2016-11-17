import React, { Component } from 'react';
import Track from "./Track"

class Stream extends Component {
  render() {
    let tracks = this.props.tracks.map((track) => {
      return (
        <Track track={track} key={track.id} />
      )
    })

    return (
      <div>
        <h1>Hello World</h1>
          {tracks}
      </div>
    )
  }
}

export default Stream
