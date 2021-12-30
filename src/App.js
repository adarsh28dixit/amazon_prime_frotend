import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home';
import MovieDetail from './pages/movieDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail/:id" element={<MovieDetail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
