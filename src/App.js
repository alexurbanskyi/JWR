import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home';
import Repair from './pages/repair';
import Price from './pages/Price';
import Change from './pages/Change'
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='repair' element={<Repair/>}/>
          <Route path='change' element={<Change/>}/>
          <Route path='price' element={<Price/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
