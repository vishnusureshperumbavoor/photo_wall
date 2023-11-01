import React,{useEffect, useState} from 'react'
import Title from './Title'
import Photowall from './Photowall'
import AddPhoto from './AddPhoto'


function Main({posts,removePhoto}) {
  return (
    <>
    <Title title="PhotoWall" />
    <Photowall posts={posts} onRemovePhoto={removePhoto}/>
    </>
  )
}

export default Main