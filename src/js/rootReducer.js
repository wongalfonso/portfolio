import { combineReducers } from "redux";
import LoginReducer from "./components/Login/LoginReducer"
import PageBlogReducer from "./components/PageBlog/PageBlogReducer"
import ProfileReducer from "./components/Profile/ProfileReducer";

const rootReducer = combineReducers({
  user: LoginReducer,
  blog: PageBlogReducer
});

export default rootReducer;