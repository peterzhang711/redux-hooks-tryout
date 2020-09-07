import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import '../assets/sass/title.scss'

function Title () {
  const contentState = useSelector(state => state.ipadInfos)
  const contentToggle = useSelector(state => state.contentToggle)
  const dispatch = useDispatch()
  return (
    <div className='top'>
      <h1>{contentState.title}</h1>
      <div>
        <div 
        className='top__icon' 
        onClick={() => dispatch({ type: 'SHOW_HIDE_CONTENT' })}
        />
      </div>
    </div>
  )
}

Title.PropTypes = {
  ipadInfos: PropTypes.object.isRequired
}

export default Title
