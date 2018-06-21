import { connect } from "react-redux";
import PageBlog from "./PageBlog";

function mapStoreToProps(state) {  
  return {
    user: state.user,
    isLoggedIn: state.user.isLoggedIn,
    blog: state.blog
  }
}

export default connect(mapStoreToProps)(PageBlog);