import { combineReducers } from 'redux';
import LoginReducer from './components/Blog/Login/LoginReducer';
import PageBlogReducer from './components/Blog/PageBlog/PageBlogReducer';
import ProfileReducer from './components/Blog/Profile/ProfileReducer';
import ListEditReducer from './components/Blog/ListEdit/ListEditReducer';

const userReducer = combineReducers({
  userLogin: LoginReducer,
  profile: ProfileReducer,
  blog: PageBlogReducer,
  editUser: ListEditReducer,
  
});

export default userReducer;
