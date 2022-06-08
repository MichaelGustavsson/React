const VehicleItem = ({ vehicle, handleDeleteVehicle }) => {
  // console.log(props);

  const onEditClickHandler = () => {
    console.log(`Du vill ändra på bilen ${vehicle.vehicleName}`);
  };

  const onDeleteClickHandler = () => {
    console.log(`Du är i VehicleItem`);
    handleDeleteVehicle(vehicle.vehicleId);
  };

  return (
    <tr>
      <td>
        <span onClick={onEditClickHandler}>
          <i className='fa-solid fa-pencil'></i>
        </span>
      </td>
      <td>{vehicle.regNo}</td>
      <td>{vehicle.vehicleName}</td>
      <td>{vehicle.modelYear}</td>
      <td>
        <span onClick={onDeleteClickHandler}>
          <i className='fa-solid fa-trash-can'></i>
        </span>
      </td>
    </tr>
  );
};

export default VehicleItem;
