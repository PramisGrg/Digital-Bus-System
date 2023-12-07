import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './components/About';
import BalanceInquiry from './components/BalanceInquiry';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/balance_inquiry' element={<BalanceInquiry/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
