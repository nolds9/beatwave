import SC from 'soundcloud'
import * as actionTypes from '../constants/actionTypes'
import { setTracks } from './track'

const setMe = user => {
  return {
    type: actionTypes.ME_SET,
    user,
  }
}

const fetchMe = session => {
  return dispatch => {
    fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
      .then(response => response.json())
      .then(data => {
        dispatch(setMe(data))
      })
  }
}

const fetchStream = session => {
  return dispatch => {
    fetch(`//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`)
      .then(response => response.json())
      .then(data => {
        dispatch(setTracks(data.collection))
      })
  }
}

export const auth = () => {
  return dispatch => {
    SC.connect().then(session => {
      dispatch(fetchMe(session))
      dispatch(fetchStream(session)) // TODO: account for race condition
    })
  }
}
