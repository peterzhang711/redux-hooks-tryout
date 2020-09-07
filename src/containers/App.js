import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Foot from '../components/foot'
import Content from '../components/content'
import '../assets/sass/App.scss'
import { fetchIpadmini } from './../store/actions'

function App () {
  const contentToggle = useSelector(state => state.contentToggle)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchIpadmini())
  }, [])
  
  return (
    <div className='app'>
        <Title />
        <div className={contentToggle ? 'show' : 'hide'}>
          <Content />
        </div>
        <Foot />
    </div>
  )
}

App.PropTypes = {
  contentToggle: PropTypes.bool.isRequired
}

export default App
