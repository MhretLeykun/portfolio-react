import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Link to='/about'>about</Link>
    </div>
  );
}

export default App;
