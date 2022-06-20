import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Part1 } from './components/FormParts/Part1';
import { Part2 } from './components/FormParts/Part2';
import { Part3 } from './components/FormParts/Part3';
import { Part4 } from './components/FormParts/Part4(end)';

function App() {
  const [page, setPage] = useState(1);

  const handlePageChange = () => {
    setPage(page + 1);
  }

  return (
    <div className="App">
      {console.log(page)}
      {page === 1 && <Part1 />}     
      {page === 2 && <Part2 />}
      {page === 3 && <Part3 />}
      {page >= 4 && <Part4 />}

      {page !== 4 && <button onClick={() => handlePageChange()}>Continuar</button>}
    </div>
  );
}

export default App;