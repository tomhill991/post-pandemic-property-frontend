import { Switch, Route } from 'react-router-dom'
import Header from './views/components/Header'
import Home from './views/pages/Home'
import About from './views/pages/About'
import Properties from './views/pages/Properties'
import Privacy from './views/pages/Privacy'
import Contact from './views/pages/Contact'
import Property from './views/pages/Property'
import User from './views/pages/User'

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
      <Route exact path="/user/:id" component={User}/>
    </Switch>
    </>
  );
}

export default App;
