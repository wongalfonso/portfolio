import axios from 'axios';

export const postBlog = (type, name, instructions, thinking, answer, username)=> {

  const postChallenge = axios.post('/api/kyus', {
    type, name, instructions, thinking, answer, username
  });
  return function(dispatch){
    dispatch({
      type: 'POST_BLOG',
      payload:
        postChallenge
          .then(res => res)
    });
  };
};
