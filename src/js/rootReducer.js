import { combineReducers } from "redux";
import LoginReducer from "./components/Login/LoginReducer"
import PageBlogReducer from "./components/PageBlog/PageBlogReducer"

const rootReducer = combineReducers({
  user: LoginReducer,
  blog: PageBlogReducer
});

export default rootReducer;