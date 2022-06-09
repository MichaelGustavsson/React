import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import VehicleList from './components/vehicles/VehicleList';
import Home from './components/home/Home';
import AddVehicle from './components/vehicles/AddVehicle';
import EditVehicle from './components/vehicles/EditVehicle';

import './app.css';

// Vår första komponent
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/vehicles' element={<VehicleList />} />
            <Route path='/vehicles/add' element={<AddVehicle />} />
            <Route path='/vehicles/:id' element={<EditVehicle />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default App;
