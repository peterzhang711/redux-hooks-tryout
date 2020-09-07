import axios from 'axios'

import {GET_IPAD_INFOS_SUCCESS, 
        GET_IPAD_INFOS_FAILED, 
        SHOW_HIDE_CONTENT, 
        RIGHT_CLICK, 
        LEFT_CLICK } from  './actionTypes'

export const fetchSuccessCreator = (res) => ({type: GET_IPAD_INFOS_SUCCESS, payload: res})
export const fetchFailedCreator = (err) => ({type: GET_IPAD_INFOS_FAILED, payload: err})
export const contentCreator = () => ({type: SHOW_HIDE_CONTENT})
export const rightClickCreator = () => ({type: RIGHT_CLICK})
export const leftClickCreator = () => ({type: LEFT_CLICK})

export const fetchIpadmini = () => {
    return (dispatch) => {
        axios.get('./content.json')
          .then(response => {
             const res = response.data
             dispatch(fetchSuccessCreator(res))
          })
          .catch(error => {
             const err = error.message
             dispatch(fetchFailedCreator(err))
             })
    }
}