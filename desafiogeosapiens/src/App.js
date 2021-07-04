import { BrowserRouter, Route } from 'react-router-dom';

import FormPage from './pages/FormPage';
import AnswerPage from './pages/AnswerPage';

import './global/style.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={FormPage} />
      <Route path="/answer" component={AnswerPage} />
    </BrowserRouter>
  );
}

export default App;
