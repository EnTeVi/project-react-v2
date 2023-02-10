import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsService} from "../../services";

const initialState = {
    posts: [],
    errors: null,
    loading: null,
    selectedPost: null,
}

const getAll = createAsyncThunk(
    'postsSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await postsService.getAll();
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'postsSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        setSelectedPosts: (state, action) => {
            state.selectedPost = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
                state.posts = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.selectedPost = action.payload
            })
});

const {reducer: postsReducer, actions: {setSelectedPosts}} = postsSlice;

const postsAction = {
    setSelectedPosts,
    getById,
    getAll
};

export {
    postsReducer,
    postsAction
};