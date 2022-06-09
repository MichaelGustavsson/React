import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditVehicle = () => {
  const params = useParams();
  const navigate = useNavigate();

  // State management...
  const [vehicleId, setVehicleId] = useState('');
  const [regNo, setRegNo] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [modelYear, setModelYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchVehicle(params.id);
  }, [params.id]);

  const fetchVehicle = async (id) => {
    const url = `http://localhost:4001/vehicles/${id}`;

    const response = await fetch(url);
    if (response.ok) {
      const vehicle = await response.json();
      setVehicleId(vehicle.id);
      setRegNo(vehicle.regNo);
      setMake(vehicle.vehicleName.split(' ')[0]);
      setModel(vehicle.vehicleName.split(' ')[1]);
      setModelYear(vehicle.modelYear);
      setMileage(vehicle.mileage);
      setImageUrl(vehicle.imageUrl);
      setValue(vehicle.value);
      setDescription(vehicle.description);
    } else {
      console.log('Hoppsan fick ingen bil');
    }
  };

  const onHandleVehicleIdTextChanged = (e) => {
    setVehicleId(e.target.value);
  };

  const onHandleRegNoTextChanged = (e) => {
    console.log(e.target);
    setRegNo(e.target.value);
  };

  const onHandleMakeTextChanged = (e) => {
    setMake(e.target.value);
  };
  const onHandleModelTextChanged = (e) => {
    setModel(e.target.value);
  };
  const onHandleModelYearTextChanged = (e) => {
    setModelYear(e.target.value);
  };
  const onHandleMileageTextChanged = (e) => {
    setMileage(e.target.value);
  };
  const onHandleImageUrlTextChanged = (e) => {
    setImageUrl(e.target.value);
  };
  const onHandleValueTextChanged = (e) => {
    setValue(e.target.value);
  };
  const onHandleDescriptionTextChanged = (e) => {
    setDescription(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const vehicle = {
      regNo,
      vehicleName: `${make} ${model}`,
      modelYear,
      mileage,
      imageUrl,
      value,
      description,
    };

    updateVehicle(vehicle);
  };

  const updateVehicle = async (vehicle) => {
    const url = `http://localhost:4001/vehicles/${vehicleId}`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vehicle),
    });

    if (response.status >= 200 && response.status <= 299) {
      navigate('/vehicles/');
    } else {
      console.log('Det gick inte så bra!');
    }
  };

  return (
    <>
      <h1 className='page-title'>Ändra bilen egenskaper</h1>
      <section className='form-container'>
        <h4>Information om bilen</h4>
        <section className='form-wrapper'>
          <form className='form' onSubmit={onHandleSubmit}>
            <div className='form-control'>
              <input
                onChange={onHandleVehicleIdTextChanged}
                value={vehicleId}
                type='hidden'
                id='vehicleId'
                name='vehicleId'
              />
              <label htmlFor='regNo'>Registreringsnummer</label>
              <input
                type='text'
                name='regNo'
                id='regNo'
                value={regNo}
                onChange={onHandleRegNoTextChanged}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='make'>Tillverkare</label>
              <input
                onChange={onHandleMakeTextChanged}
                value={make}
                type='text'
                id='make'
                name='make'
              />
            </div>
            <div className='form-control'>
              <label htmlFor='model'>Modell</label>
              <input
                onChange={onHandleModelTextChanged}
                value={model}
                type='text'
                id='model'
                name='model'
              />
            </div>
            <div className='form-control'>
              <label htmlFor='modelYear'>Modell År</label>
              <input
                onChange={onHandleModelYearTextChanged}
                value={modelYear}
                type='text'
                id='modelYear'
                name='modelYear'
              />
            </div>
            <div className='form-control'>
              <label htmlFor='mileage'>Antal Km</label>
              <input
                onChange={onHandleMileageTextChanged}
                value={mileage}
                ype='text'
                id='mileage'
                name='mileage'
              />
            </div>
            <div className='form-control'>
              <label htmlFor='imageUrl'>Bild url</label>
              <input
                onChange={onHandleImageUrlTextChanged}
                value={imageUrl}
                type='text'
                id='imageUrl'
                name='imageUrl'
              />
            </div>
            <div className='form-control'>
              <label htmlFor='value'>Pris</label>
              <input
                onChange={onHandleValueTextChanged}
                value={value}
                type='text'
                id='value'
                name='value'
              />
            </div>
            <div className='form-control'>
              <label htmlFor='description'>Beskrivning</label>
              <textarea
                onChange={onHandleDescriptionTextChanged}
                value={description}
                type='text'
                id='description'
                name='description'
              ></textarea>
            </div>
            <div className='buttons'>
              <button type='submit' className='btn'>
                Spara
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default EditVehicle;
