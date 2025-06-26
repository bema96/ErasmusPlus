// Import React and necessary hooks
import { Routes, Route } from 'react-router-dom';
// Layout
import MainLayout from './_Layout/MainLayout';
// Pages
import { Home } from './pages/Frontpage/Home';



function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
