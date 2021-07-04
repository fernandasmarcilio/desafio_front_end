import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import List from './pages/List';

import './global/style.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/list" component={List} />
    </BrowserRouter>
  );
}

export default App;
