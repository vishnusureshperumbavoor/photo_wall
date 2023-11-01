export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'

export const addPost = (post)=>{
    return{
        type:ADD_POST,
        payload:post,
    }
}

export const deletePost = (postId)=>{
    return{
        type:DELETE_POST,
        payload:postId,
    }
}