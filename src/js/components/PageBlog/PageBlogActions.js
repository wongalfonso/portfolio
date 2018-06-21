import axios from "axios"

export const postBlog = (type, name, instructions, thinking, answer, username) => {
  
  const postChallenge = axios.post("/api/kyus", {type, name, instructions, thinking, answer, username})
  return (dispatch, state) => {
    dispatch({
      type: "POST_BLOG",
      payload: 
        postChallenge
        .then((res) => {
          console.log(res);       
          return res
        })        
    })
  }
  
}