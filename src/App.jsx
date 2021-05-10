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

function App() {
  return (
    <>
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

export default App;
