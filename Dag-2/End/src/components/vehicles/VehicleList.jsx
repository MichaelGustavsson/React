import { useState, useEffect } from 'react';

import VehicleItem from './VehicleItem';

import './vehicleList.css';

const VehicleList = () => {
  let [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    const url = 'http://localhost:4001/vehicles';

    const response = await fetch(url);

    if (response.ok) {
      setVehicles(await response.json());
      console.log(vehicles);
    } else {
      throw new Error('Oops något gick fel...');
    }
  };

  const deleteVehicle = (id) => {
    console.log(`Du har valt att ta bort bil med id: ${id}`);
  };

  return (
    <>
      <h1 className='page-title'>Hantera bilar</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>RegNummer</th>
            <th>Bilnamn</th>
            <th>Modell år</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <VehicleItem
              key={vehicle.id}
              vehicle={vehicle}
              handleDeleteVehicle={deleteVehicle}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default VehicleList;
