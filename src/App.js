import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import Homepage from './Components/Homepage/Homepage';
import Adminpage from './Components/Adminpage/Adminpage';
import Aboutpage from './Components/Aboutpage/Aboutpage';

function App() {
  return (
    <Router>
      <>
        <Navigationbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/admin' element={<Adminpage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
