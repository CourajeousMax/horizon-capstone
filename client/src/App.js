import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Journal from './pages/Journal/Journal';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/journal" element={<Journal />} />
    </Routes>
    </BrowserRouter> 
  );
}

export default App;
