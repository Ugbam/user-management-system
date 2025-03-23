import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from './store/userslice';
import { User } from './store/userslice';
import { Link } from 'react-router-dom';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(user.id));
    }
  };

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
      <p>Company: {user.company.name}</p>
      <div className="button-container">
        <Link to={`/edit-user/${user.id}`} className="edit-button">
          Edit
        </Link>
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;