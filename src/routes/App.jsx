import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "../pages/Landing";
import Navbar from "../components/Navbar";
import Sobrenosotros from "../pages/Sobrenosotros";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sobre-nosotros" element={<Sobrenosotros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
