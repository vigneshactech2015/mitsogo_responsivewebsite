import React from 'react'
import {FiMoreVertical} from "react-icons/fi"
function ProductVideo() {
  return (
    <div>
    <div className='statistics_title'>
    <h5>Product Video</h5>
    <h3><FiMoreVertical/></h3>
    </div>
    <video src="youtu.be/Oy6hk6Y7VHQ&t=2s" width="280" height="280" controls={true} poster="./videothumbnail.png">
    Your browser does not support the video tag.
  </video> 
    </div>
  )
}

export default ProductVideo