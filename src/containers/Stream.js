import { connect } from 'react-redux'
import Stream from "../components/Stream"

function mapStateToProps(state) {
  const tracks = state.track
  return {
    tracks,
  }
}

export default connect(mapStateToProps)(Stream)
