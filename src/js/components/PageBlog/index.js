import { connect } from "react-redux";
import PageBlog from "./PageBlog";

function mapStoreToProps(state) {  
  return {    
    isLoggedIn: state.userLogin.isLoggedIn,
    user: state.user,
    blog: state.blog
  }
}

export default connect(mapStoreToProps)(PageBlog);