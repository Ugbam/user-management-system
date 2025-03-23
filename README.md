## User Management System

This is a react-based application used for managing users. The features include fetching user data from an API, adding, updating, and deleting users, and global state management using Redux Toolkit.

### Features
- View Users: Fetch and display a list of users from an API.
- Add User: Add a new user to the list.
- Edit User: Update an existing user's details.
- Delete User: Remove a user from the list.
- Responsive Design: Works on all screen sizes.

### What was used (softwares)
- React: Frontend library for building user interfaces.
- Redux Toolkit: State management for managing global state.
- React Router: Navigation and routing.
- Axios: HTTP client for fetching data from the API.
- TypeScript: Static typing for JavaScript.
- CSS: Styling for the application.

### How to set it up

1. Clone the Repository
```bash
git clone https://github.com/your-username/user-management-system.git
cd user-management-system
```
2. Install Dependencies
```bash
npm install
```
3. Run the Application
```bash
npm start
```

### Code examples
Redux slice (userslice.ts)
```bash
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface UserState {
  users: User[];
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  loading: false,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      });
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
```

### Contributing
1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature-name.
3. Commit your changes: git commit -m "Add your feature".
4. Push to the branch: git push origin feature/your-feature-name.
5. Submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
