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
    } else {
      throw new Error('Oops något gick fel...');
    }
  };

  const deleteVehicle = async (id) => {
    const url = `http://localhost:4001/vehicles/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (response.status >= 200 && response.status <= 299) {
      loadVehicles();
    } else {
      console.log('Det gick fel någonstans');
    }
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
