import './App.css';
import Login from './Components/Login';
import Registration from './Components/Registration';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ < Login /> }/>
        <Route path='/registration' element={ <Registration /> }/>
        <Route path='/dashboard' element={ <Dashboard /> }/>
        
      </Routes>
      
      
    </div>
  );
}

export default App;
