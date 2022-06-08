import Navbar from './components/navbar/Navbar';
import VehicleList from './components/vehicles/VehicleList';

import './app.css';

// Vår första komponent
const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <VehicleList />
      </main>
    </>
  );
};

export default App;
