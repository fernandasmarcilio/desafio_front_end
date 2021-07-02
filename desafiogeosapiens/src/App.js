import { BrowserRouter, Router } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Router exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
