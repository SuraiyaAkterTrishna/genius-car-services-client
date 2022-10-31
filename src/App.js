import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import './App.css';
import About from './Pages/About/About';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
