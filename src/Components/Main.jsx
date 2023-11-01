import React from 'react'
import Title from './Title'
import { connect } from 'react-redux'
import PhotoWall from './Photowall'

function Main({posts}) {
  return (
    <>
    <Title title="PhotoWall" />
    <PhotoWall posts={posts}/>
    </>
  )
}

const mapStateToProps = state=>{
  return{
    posts:state.posts.posts,
  }
}

export default connect(mapStateToProps)(Main)