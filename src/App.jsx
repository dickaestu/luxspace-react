import "./assets/css/app.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import Details from "./pages/Details.jsx";
import Cart from "./pages/Cart.jsx";
import Congratulation from "./pages/Congratulation.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/categories/:idc" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Congratulation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
