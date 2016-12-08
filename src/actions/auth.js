import SC from 'soundcloud'
import * as actionTypes from '../constants/actionTypes'

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

export const auth = () => {
  return dispatch => {
    SC.connect().then(session => {
      dispatch(fetchMe(session))
    })
  }
}
