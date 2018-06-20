import { connect } from "react-redux";
import BlogPage from "./BlogPage";

const mapStateToProps = (state) => {  
  return {
    user: state.user,
    isLoggedIn: state.user.isLoggedIn
  }
}

export default connect(mapStateToProps)(BlogPage);