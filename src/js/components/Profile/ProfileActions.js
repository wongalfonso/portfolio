import axios from "axios";


export const getBlogs = (userLogin) => {  
  const kyus = userLogin.kyus
  const password = userLogin.password;
  const username = userLogin.username;
  const id = userLogin._id;
  const isLoggedIn = userLogin.isLoggedIn;
  let blogs = [];
  let userInfo = {}
  const getAllBlogs = axios.get(`/api/kyus/${id}`,)
  return (dispatch) => {
    dispatch({
      type: "GET_ALL_BLOGS",
      payload: 
        getAllBlogs
          .then((res) => {            
            res.data.map((blog) => {
              blogs.push(blog);
            })
            return {blogs, id, kyus, username, password, isLoggedIn} 
          })
    })
  }
}