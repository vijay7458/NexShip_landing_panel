
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/page/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route pathname='/home' element={Dashboard} />
      </Routes>
    </div>
  );
}

export default App;
