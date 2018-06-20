import axios from "axios"

export const postBlog = () => {
  const post = axios.post("/api/users/login", {})
  return (dispatch, state) => {
    dispatch({
      type: "POST_BLOG",
      payload: 
        post
        .then((res) => {
          return res
        })
    })
  }
  
}