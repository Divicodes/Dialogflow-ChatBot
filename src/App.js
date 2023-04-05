import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import ChatbotLanding from './ChatbotLanding';
import HomeLanding from './HomeLanding';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<HomeLanding/>} />
      <Route path="/signup" element={<Register/>} />
      <Route path="/signin" element={<Login/>} />
      <Route path="/chatbotlanding" element={<ChatbotLanding/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
