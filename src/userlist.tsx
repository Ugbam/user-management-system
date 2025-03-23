import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './store/userslice';
import UserCard from './usercard';
import { AppDispatch, RootState } from './store/store';
import { Link } from 'react-router-dom';

const UserList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="user-list">
      <h1>User List</h1>
      <Link to="/add-user" className="add-user-button">Add User</Link>
      <div className="user-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;