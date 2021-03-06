import { useNavigate } from 'react-router-dom';

const VehicleItem = ({ vehicle, handleDeleteVehicle }) => {
  const navigate = useNavigate();
  // console.log(props);

  const onEditClickHandler = () => {
    navigate(`/vehicles/${vehicle.id}`);
  };

  const onDeleteClickHandler = () => {
    handleDeleteVehicle(vehicle.id);
  };

  return (
    <tr>
      <td>
        <span onClick={onEditClickHandler}>
          <i className='fa-solid fa-pencil edit'></i>
        </span>
      </td>
      <td>{vehicle.regNo}</td>
      <td>{vehicle.vehicleName}</td>
      <td>{vehicle.modelYear}</td>
      <td className='delete'>
        <span onClick={onDeleteClickHandler}>
          <i className='fa-solid fa-trash-can'></i>
        </span>
      </td>
    </tr>
  );
};

export default VehicleItem;
