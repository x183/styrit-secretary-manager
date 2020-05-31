import {connect} from "react-redux";

import Admin from "./Admin";

const mapStateToProps = state => ({
    passwordVerified: state.root.PasswordReducer.passwordVerified
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
