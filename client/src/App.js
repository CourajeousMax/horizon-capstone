import { BrowserRouter,Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage"
import Home from "./pages/Home/Home";
import Goals from "./pages/Goals/Goals"
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
