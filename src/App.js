
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage     from './Pages/HomePage';
import NavBar from './components/navbar/NavBar';
import NotFoundPage from './Pages/NotFoundPage';
import Projects from './Pages/Projects';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <NavBar />
      <div className="page-body">
        <Routes>
          <Route path="/"                    element={<HomePage />} />
          <Route path="/projects"             element={<Projects />} />
          
          <Route path={"*"} element={<NotFoundPage/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
