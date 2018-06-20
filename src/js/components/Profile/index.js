import { connect } from "react-redux"
import Profile from "./Profile";


const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user,
    isLoggedIn: state.user.isLoggedIn
  }
}

export default connect(mapStateToProps)(Profile);