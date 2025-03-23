import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addUser, updateUser } from './store/userslice';
import { RootState } from './store/store';

const UserForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const users = useSelector((state: RootState) => state.users.users);

  const [formData, setFormData] = useState({
    id: id ? parseInt(id) : Date.now(),
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  useEffect(() => {
    if (id) {
      const user = users.find((user) => user.id === parseInt(id));
      if (user) setFormData(user);
    }
  }, [id, users]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      dispatch(updateUser(formData));
    } else {
      dispatch(addUser(formData));
    }
    navigate('/users');
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>{id ? 'Edit User' : 'Add User'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <input
        type="text"
        placeholder="Street"
        value={formData.address.street}
        onChange={(e) =>
          setFormData({
            ...formData,
            address: { ...formData.address, street: e.target.value },
          })
        }
      />
      <input
        type="text"
        placeholder="City"
        value={formData.address.city}
        onChange={(e) =>
          setFormData({
            ...formData,
            address: { ...formData.address, city: e.target.value },
          })
        }
      />
      <input
        type="text"
        placeholder="Company Name"
        value={formData.company.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            company: { ...formData.company, name: e.target.value },
          })
        }
      />
      <button type="submit">{id ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default UserForm;