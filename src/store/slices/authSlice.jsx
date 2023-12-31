import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token: null,
	},
	reducers: {
		setCredentials: (state, action) => {
			state.token = action.payload;
		},

		logOut: (state) => {
			state.token = null;
		},
	},
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;