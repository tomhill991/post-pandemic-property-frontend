import useForm from '../../../services/useForm'
import User from '../../../services/user.jsx'

import { connect } from 'react-redux'
import { logout, login } from '../../../redux';

const Login = props => {
    const initialValues = {
        email: "",
        password: ""
    }

    const { values, handleChange, handleSubmit} = useForm({
        initialValues,
        onSubmit: values => login(values.values)
    });

    const login = (finalValues) => {
        User.login(finalValues).then(res => {
            props.login()
        }).catch((err) => {
            console.log(err.message)
		});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="field">
                <input type="email" value={values.email} onChange={handleChange} name="email"/>
            </div>
            <div className="field">
                <input type="password" value={values.password} onChange={handleChange} name="password"/>
            </div>

            <div className="field">
                <button>Submit</button>
            </div>
        </form>
    )
}

function mapStateToProps(state) {
    return {
       login: state.loggedIn
    };
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login()),
		logout: () => dispatch(logout())
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Login)