const defaultState = {
  blog: [],
  rejectResponse: '',
  responseCode: ''
};

export default function PageBlogReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'POST_BLOG_PENDING': {
      return { loading: true };
    }
    case 'POST_BLOG_FULFILLED': {
      return Object.assign(
        {}, ...state,
        { blog: payload.data, loading: false, responseCode: payload.status }
      );
    }
    case 'POST_BLOG_REJECTED': {
      return Object.assign(
        {}, ...state, { loading: false, rejectedResponse: payload }
      );
    }
    default: {
      return state;
    }
  }
}
