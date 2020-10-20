export const GET_TOKEN = "GET_TOKEN"
export const SET_INFO = "SET_INFO"

export const getTokenAction = (token) => {
  return {
    type: GET_TOKEN,
    payload: token
  }
}

export const setInfoAction = (info) => {
  return {
    type: SET_INFO,
    payload: info
  }
}