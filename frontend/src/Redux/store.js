import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './Auth/RegisterUser';
import loginReducer from './Auth/LoginUser';
import categoriesReducer from './UserCategories/categoriesSlice';

const store = configureStore({
    reducer: {
        registereduser: registerReducer,
        loginuser: loginReducer,
        categories: categoriesReducer,
    }
});

export default store;