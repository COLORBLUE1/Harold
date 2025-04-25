import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "../pages/Landing";
import Navbar from "../components/Navbar";
import Sobrenosotros from "../pages/Sobrenosotros";
import { MagdalenaPague } from "../pages/MagdalenaPague";
import RecordArbolMaterial from "../pages/RecordArbolMaterial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sobre-nosotros" element={<Sobrenosotros />} />
        <Route path="/Record-Guinness-magdalena" element={<MagdalenaPague />} />
        <Route path="/Arbol-material" element={<RecordArbolMaterial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
