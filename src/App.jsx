import './css/style.css';
import Registration from './components/Registration/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/register" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
