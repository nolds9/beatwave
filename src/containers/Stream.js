import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Stream from "../components/Stream"

function mapStateToProps(state) {
  const { user } = state.auth
  const tracks = state.track
  return {
    user,
    tracks,
  }
}

function mapDispatchToProps(dispatch){
  return {
    onAuth: bindActionCreators(actions.auth, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream)
