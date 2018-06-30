import { combineReducers } from "redux";
import LoginReducer from "./components/Login/LoginReducer"
import PageBlogReducer from "./components/PageBlog/PageBlogReducer"
import ProfileReducer from "./components/Profile/ProfileReducer";
import ListEditReducer from "./components/ListEdit/ListEditReducer";

const userReducer = combineReducers({
  userLogin: LoginReducer,
  profile: ProfileReducer,
  blog: PageBlogReducer,
  editUser: ListEditReducer
});

export default userReducer;