import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RoutesTest from './components/RouteTest';

import Diary from './pages/Diary';
import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        <RoutesTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
