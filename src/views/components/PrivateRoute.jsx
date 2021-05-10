import  React from  "react";
import { connect } from 'react-redux'
import { Route, Redirect } from  "react-router-dom";

const PrivateRoute = props => {
    return (
        props.loginState.loggedIn ?
            <Route  path={props.path}  exact={props.exact} component={props.component} />
        :
            <Redirect to="/"  />
    )


};

function mapStateToProps(state) {
    return {
       loginState: state.login
    };
}

export default connect(mapStateToProps)(PrivateRoute)