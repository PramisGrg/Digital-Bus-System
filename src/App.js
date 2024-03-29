import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import BalanceInquiry from "./components/BalanceInquiry";
import Register from "./components/Register";
import Maps from "./components/Maps";
import Admin from "./components/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/balance_inquiry" element={<BalanceInquiry />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin_login" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
