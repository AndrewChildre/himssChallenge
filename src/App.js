import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import Block from './Block'
import Resolve from './Resolve';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <div className='content'>
     <Switch>
       <Route exact path='/'>
          <Home />
       </Route>
       <Route path='/resolve/:id'>
          <Resolve />
       </Route>
         <Route path='/block/:id'>
          <Block />
       </Route>
     </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
