import Nav from './Nav';
import Home from './Home';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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
     
     </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
