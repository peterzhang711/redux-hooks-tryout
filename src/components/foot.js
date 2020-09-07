import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import '../assets/sass/foot.scss'

function Foot () {
 
/* turn page over by click direction btn/send dispatch to change state
 * @param direction
 * @type left/right 
 * condition init pageIndex from state/length of the content array
*/
 
  const dispatch = useDispatch()
  const contentState = useSelector(state => state.ipadInfos)
  const currentPageIndex = useSelector(state => state.currentIndex)
  const contentDetails = contentState?.content
  const contentArrary = contentState?.content 

  const pageChange = (direction) => {
    if (direction === 'left') {
      if (currentPageIndex === 0) {
        console.log('i am 0')
      } else {
        dispatch({ type: 'LEFT_CLICK' })
      }
    } else if (direction === 'right') {
      if (currentPageIndex ===  (contentDetails?.length-1)) {
      } else {
        console.log('contentDetails', contentDetails)
        dispatch({ type: 'RIGHT_CLICK' })
    
      }
    }
  }

  return (
    <div className='footcontainer'>
      <div className='foot'>
        <button onClick={() => pageChange('left')} className='leftarrow'></button>
        <a href='#' onClick={() => pageChange('left')}>
          {
            (currentPageIndex === 0)
              ? 'Prev'
              : contentDetails?.[currentPageIndex - 1]?.title
          }
        </a>
      </div>
      <div className='foot'>
        <a href='#' onClick={() => pageChange('right')}>{(contentDetails && currentPageIndex === (contentDetails && 
        contentDetails.length - 1))? 'Next': contentDetails && contentDetails[currentPageIndex + 1]?.title
        }
        </a>
        <button onClick={() => pageChange('right')} className='rightarrow'></button>
      </div>
    </div>
  )
}

Foot.PropTypes = {
  ipadInfos: PropTypes.object.isRequired,
  currentIndex: PropTypes.number.isRequired
}

export default Foot
