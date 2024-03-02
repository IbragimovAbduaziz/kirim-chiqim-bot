import './css/style.css';
import Registration from './components/Register/Register';
import Ombor from './components/Ombor/Ombor';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="register" element={<Registration />} />
          <Route path="ombor" element={<Ombor />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
