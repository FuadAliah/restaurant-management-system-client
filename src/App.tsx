import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DrawerLayout from './layouts/DrawerLayout/DrawerLayout';
import FullPageLayout from './layouts/FullPageLayout/FullPageLayout';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<FullPageLayout />} />
        <Route path="/drawer" element={<DrawerLayout />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
