import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../types';
import { userApi } from '../../../utils/API';

export interface UserState {
    usersList: User[],
    filterQuery: string
}

// Create initial state with the response from the user API
const createInitialState = async () => {
    let users: User[] = [];
    try { users = await userApi.getAllUserDetails() } catch (e) {
        console.error(e);
    }
    
    return {
        usersList: users,
        filterQuery: ""
    }
}
const initialState: UserState = await createInitialState();


// Define state, reducers and actions here - redux-toolkit
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            switch (action.type) {
                case "users/setUsers":
                    state.usersList = action.payload
                    break;
                default:
                    break;
            }
        },
        setSelectedFilterQuery: (state, action: PayloadAction<string>) => {
            switch (action.type) {
                case "users/setSelectedFilterQuery":
                    state.filterQuery = action.payload
                    break;
                default:
                    break;
            }
        }
    }
});

// Export actions and reducer
export const { setUsers, setSelectedFilterQuery } = usersSlice.actions;
export default usersSlice.reducer;