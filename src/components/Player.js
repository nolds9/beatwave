import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { CLIENT_ID } from '../constants/auth'

class Player extends Component {
  componentDidUpdate() {
    const audioElement = ReactDOM.findDOMNode(this.refs.audio)
    if (!audioElement){ return }

    const { activeTrack } = this.props

    if (activeTrack) {
      audioElement.play()
    } else {
      audioElement.pause()
    }
  }

  render() {
    let { activeTrack } = this.props
    return (
      <div>
        {
          activeTrack ?
            <audio
              id="audio"
              ref="audio"
              src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`}>
            </audio>
          : null
        }
      </div>
    )
  }
}

export default Player
