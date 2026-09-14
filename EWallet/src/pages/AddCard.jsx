import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cardAdded } from '../reducers/cardsSlice';
import Header from '../components/Header';
import Card from '../components/Card';
import CardForm from '../components/CardForm';
function AddCard() {
  const [formData, setFormData] = useState({
    number: '',
    holder: '',
    expiry: '',
    vendor: '',
  });


    const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(cardAdded({ id: Date.now(), ...formData }));
    navigate('/'); 
  };

  return(
    <div>
        <Header Title="Add a new bank card"/>
            <Card{...formData} label="New card" placeholder />
            <cardForm
            formData ={formData}
            onChange={setFormData}
            onSubmit={handleSubmit}
            />
    </div>
  );
}

export default AddCard;