import React from 'react'
import PropTypes from 'prop-types'
import '../assets/sass/content.scss'
import { useSelector } from 'react-redux'
import ipadmini from '../assets/images/ipad-mini.jpg'


function Content () {
 
  const contentState = useSelector(state => state.ipadInfos)
  const currentPageIndex = useSelector(state => state.currentIndex)
  const contentDetails = contentState?.content && 
  contentState?.content[currentPageIndex]

  return (
    <div className='content'>
      {contentState.content?.[0]?.thumbnail ? <img src={ipadmini} className='photo'/> : null }
      <div className = 'content-text' dangerouslySetInnerHTML={{ __html: contentDetails && contentDetails?.description }} />
     </div>
  )
}

Content.PropTypes = {
  ipadInfos: PropTypes.object.isRequired,
  currentIndex: PropTypes.number.isRequired
}

export default Content
