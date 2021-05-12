import { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './views/components/Header'
import Home from './views/pages/Home'
import About from './views/pages/About'
import Properties from './views/pages/Properties'
import Privacy from './views/pages/Privacy'
import Contact from './views/pages/Contact'
import Property from './views/pages/Property'
import Profile from './views/pages/Profile'
import PrivateRoute from './views/components/PrivateRoute'
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux'
import { login } from './redux';
import User from './services/user'


function App(props) {

  useEffect(() => {
    if(User.current()) {
      props.login()
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    <ToastContainer position="top-right" />
    <Header />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/properties" component={Properties}/>
      <Route exact path="/properties/:id" component={Property}/>
      <Route exact path="/privacy" component={Privacy}/>
      <Route exact path="/contact" component={Contact}/>
      <PrivateRoute exact path={"/profile"} component={Profile} />
    </Switch>
    </>
  );
}

function mapStateToProps(state) {
  return {
     login: state.login
  };
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login()),
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App)
