import logo from './logo.svg';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>
    }
  ])
  return (
    <div className="App">
   
    </div>
  );
}

export default App;
