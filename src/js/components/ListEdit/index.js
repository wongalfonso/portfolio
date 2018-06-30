import { connect } from "react-redux"
import ListEdit from "./ListEdit";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLoggedIn: state.userLogin.isLoggedIn
  }
}

export default connect(mapStateToProps)(ListEdit);