import Nav from './Nav';
import Home from './Home';
import Second from './Second';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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
          <Second />
       </Route>
     </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
