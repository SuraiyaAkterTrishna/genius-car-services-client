import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Services from './Pages/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Experts from './Pages/Experts/Experts';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
        <Route path='/service/:id' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/expert' element={<Experts></Experts>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
