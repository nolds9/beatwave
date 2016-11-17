import * as actionTypes from '../constants/actionTypes'

const initialState = []

export default function (state = initialState, action){
  switch (action.type) {
    case actionTypes.TRACK_SET:
      return setTrack(state, action)
    default:
      return state
  }
}

function setTracks(state, action){
  const { tracks } = action
  return [
    ...state,
    ...tracks,
  ]
}
