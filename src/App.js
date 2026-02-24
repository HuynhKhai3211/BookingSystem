
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ListUser from './components/ListUser';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ListUser/>} />
    </Routes>
  );
}

export default App;
