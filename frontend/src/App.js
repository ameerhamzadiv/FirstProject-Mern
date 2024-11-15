import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Users from './pages/Users';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path='/' element={ <Home />}></Route>
          <Route path='/users' element={ <Users /> }></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
