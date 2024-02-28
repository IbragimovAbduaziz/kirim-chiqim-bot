import './css/style.css';
import Registration from './components/Registration/Registration';
import Ombor from './components/Ombor/Ombor';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/ombor" element={<Ombor/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
