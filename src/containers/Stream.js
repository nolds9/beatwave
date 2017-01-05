import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Stream from "../components/Stream"

function mapStateToProps(state) {
  const { user } = state.auth
  const { tracks, activeTrack } = state.track
  return {
    user,
    tracks,
    activeTrack
  }
}

function mapDispatchToProps(dispatch){
  return {
    onAuth: bindActionCreators(actions.auth, dispatch),
    onPlay: bindActionCreators(actions.playTrack, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream)
