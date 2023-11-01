import React,{useEffect, useState} from 'react'
import Title from './Title'
import { connect } from 'react-redux'

function Main({posts}) {
  useEffect(() => {
    console.log(posts);
  }, [])
  
  return (
    <>
    <Title title="PhotoWall" />
    {/* <Photowall posts={posts} onRemovePhoto={removePhoto}/> */}
    </>
  )
}

const mapStateToProps = state=>{
  return{
    posts:state.posts.posts,
  }
}

export default connect(mapStateToProps)(Main)