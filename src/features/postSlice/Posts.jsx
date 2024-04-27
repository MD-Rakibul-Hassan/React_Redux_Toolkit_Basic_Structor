

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postSlice';

const Posts = () => {
    const  posts  = useSelector(state => state.posts.post);
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    },[])
    
  return (
    <div>
          <h1>hello </h1>
          <div>
              {
                  posts.map((post) => <div key={post.id}>
                      {post.title}
                  </div>)
              }
          </div>
    </div>
  )
}

export default Posts
