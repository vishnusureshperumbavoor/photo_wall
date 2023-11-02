import React from 'react'

function Comments() {
  return (
    <div className='comment'>
        <form action="" className='comment-form'>
            <input type="text" placeholder='comment' /><br /><br />
            <input type="submit" hidden />
        </form>
    </div>
  )
}

export default Comments