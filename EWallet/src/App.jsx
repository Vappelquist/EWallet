import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AddCard from './pages/AddCard'


import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addcard" element={<AddCard/>}></Route>
    </Routes>
  );
}

export default App;
