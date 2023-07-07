import { createSlice } from '@reduxjs/toolkit';
import { getAllProductsThunk } from '../thunkServices';

const initialState = {
    productData: null,
    isLoading: true,
    hasError: null,
}

export const productSlice = createSlice({
    name: 'slices/productSlice',
    initialState,
    reducers: {
        getAllProducts: (state, action) => {
            return{
                productData: state,
            }
        },
    }, 
    extraReducers: (builder) => {
        builder.addCase(getAllProductsThunk.pending, (state, action) => {
            state.productData = null;
            state.isLoading = true;
            state.hasError = null;
        })

        builder.addCase(getAllProductsThunk.fulfilled, (state, action) => {
            state.productData = action.payload;
            state.isLoading = false;
            state.hasError = null;
        })

        builder.addCase(getAllProductsThunk.rejected, (state, action) => {
            state.productData = action.payload;
            state.isLoading = false;
            state.hasError = action.error;
        })

    }
})

// handle action creator
export const { getAllProducts } = productSlice.actions;

// handle reducer to configureStore
export const productsReducer = productSlice.reducer;