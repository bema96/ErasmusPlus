import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Frontpage/Home';
import MainLayout from './_Layout/MainLayout';


function App() {

  return (
    <Routes>
      {/* Main layout wrapper */}
      <Route path="/" element={<MainLayout />}>
        {/* Home page route */}
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
