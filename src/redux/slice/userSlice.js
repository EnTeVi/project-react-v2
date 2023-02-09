import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../../services";

const initialState = {
    users: [],
    errors: null,
    loading: null,
    selectedUser: null
}

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await usersService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await usersService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice', /*імя слайсу */
    initialState, /*початковий стейт*/
    reducers: {
        // getAll: (state, action) => {
        //     state.users = action.payload
        // },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }
    }, /*описуються дії які запускаються при діспатчі*/
    // extraReducers: {
    //     [getAll.fulfilled]: (state, action) => {
    //         state.loading = false
    //         state.users = action.payload
    //     },
    //     [getAll.rejected]: (state, action) => {
    //         state.loading = false
    //         state.errors = action.payload
    //     },
    //     [getAll.pending]: (state) => {
    //         state.loading = true
    //     }
    // }

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.selectedUser = action.payload
            })
});

const {reducer: userReducer, actions: {setSelectedUser}} = userSlice;

const userAction = {
    setSelectedUser,
    getAll,
    getById
}

export {
    userReducer,
    userAction
}