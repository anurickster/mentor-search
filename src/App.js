import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Addmentor from './Components/Addmentor/Addmentor';
import Aboutpage from './Components/Aboutpage/Aboutpage';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/addmentor' element={<Addmentor />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
