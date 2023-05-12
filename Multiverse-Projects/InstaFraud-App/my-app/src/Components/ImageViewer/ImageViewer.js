import React, { useRef } from 'react'
import './ImageViewerStyle.css'
import { InstFraudContext } from '../../Context/Context'
import PostReaction from '../PostReaction/PostReaction'
import CloseIcon from '@mui/icons-material/Close';


function ImageViewer() {
    const { viewClickedPost,setImageViewClicked }=React.useContext(InstFraudContext)

  return (<>
     {
        viewClickedPost?.map((clikedpost)=>{
        return <div className='fullviewContainer' key={clikedpost.id}>
                    <div className='fullViewModal'>
                        <div className='post-img'>
                          <CloseIcon className='close-btn' onClick = {()=>setImageViewClicked(false)}/>
                          <img src={`${clikedpost.PostImage}`} alt="" />   
                        </div>
                        <div className='reaction'>
                        <div className='pp'>
                          <PostReaction/> 
                        </div>
                          
                        </div>
                    </div>
                </div>
        })
      }
      </>    
  )
}

export default ImageViewer