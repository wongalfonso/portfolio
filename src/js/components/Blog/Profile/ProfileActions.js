import axios from 'axios';


export const getUserInfo = (id) => {
  const getAllBlogs = axios.get(`/api/kyus/${id}`,);
  return (dispatch) => {
    dispatch({
      type: 'GET_ALL_BLOGS',
      payload:
        getAllBlogs
          .then((res) => {
            if (res.status === 201) {
              return res.data;
            }
            return res;
          })
    });
  };
};
