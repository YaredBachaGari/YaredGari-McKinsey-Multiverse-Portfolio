import React, { useEffect, useState } from 'react'
import Posts from './MockData/UsersData'

const InstFraudContext = React.createContext();

const InstFraudProvider=({children})=> {
    const [Auth, setAuth] = useState()
    const [InstUsers, setInstaUsers] = useState([]);
    // const [userPosts, setUserPosts] = useState([])    //mockdata
    const [allPosts, setAllPosts] = useState([]);
    const [postSuccess, setPostSuccess] = useState("");
    const [postDeleted, setPostDeleted] = useState(false);
    const [registerClicked, setRegisterClicked] = useState(false)
    const [isTwittClicked, setIsTwittClicked] = useState(false)
    const [readmoreClicked, setreadmoreClicked] = useState(false) //to toggle read more btn
    const [likeReaction, setLikeReaction] = useState({likes:100, isLiked:false, post_id:0})
    const [likeCliked, setLikedClicked] = useState(false)
    const [imageViewClicked, setImageViewClicked] = useState(false)
    const [viewClickedPost,setViewClickedPost]= useState([])
    const [commentSuccess, setCommentSuccess] = useState(false);
    const [viewComment, setViewComment] = useState(false);


    const toggleReadmoreText=()=>{
        setreadmoreClicked(prevState=>!prevState)
    }
    const viewImagehandler =(PostId) =>{
      const clickedPost =  allPosts.filter((singlepost)=> PostId===singlepost.id)
      console.log(clickedPost)
      setViewClickedPost(clickedPost)
      setImageViewClicked(true)
    }
console.log(allPosts)
    const fetchLikeClickhandeler= (postid)=>{
      // const likes = fetch(`https://inst.com ${postid}`)
      const like =200
      //setLikeReaction({likes:like, isLiked:false, post_id:0})
    }

   const LikeClickhandeler=(id)=>{
     if(likeReaction.isLiked){
      setLikeReaction({likes:likeReaction.likes-1, isLiked:!likeReaction.isLiked, post_id:id})
      //setLikedClicked(false)
    }else{
      setLikeReaction({likes:likeReaction.likes+1, isLiked:!likeReaction.isLiked, post_id:id})
      //setLikedClicked(true)
    }
   }
   
    useEffect(()=>{
      fetchLikeClickhandeler()
    },[])

    
  return (
        <InstFraudContext.Provider value={{
                Auth, 
                setAuth,
                commentSuccess, 
                setCommentSuccess,
                viewComment, 
                setViewComment,
                postDeleted, 
                setPostDeleted,
                InstUsers,
                allPosts, 
                setAllPosts,
                postSuccess, 
                setPostSuccess,
                setInstaUsers,
                registerClicked, 
                setRegisterClicked,
                isTwittClicked,
                setIsTwittClicked,
                readmoreClicked,
                toggleReadmoreText,
                likeReaction,
                setLikeReaction,
                LikeClickhandeler,
                viewImagehandler,
                viewClickedPost,
                imageViewClicked,
                setImageViewClicked,
            }}>
                {children}
        </InstFraudContext.Provider>
  )
}

export {InstFraudContext, InstFraudProvider}