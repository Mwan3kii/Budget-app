import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './Auth/RegisterUser';
import loginReducer from './Auth/LoginUser';
import categoriesReducer from './UserCategories/categoriesSlice';
import singleCategoryReducer from './UserCategories/singleCategorySlice';
import transactionReducer from './Transactions/transactionSlice';

const store = configureStore({
    reducer: {
        registereduser: registerReducer,
        loginuser: loginReducer,
        categories: categoriesReducer,
        singleCategory: singleCategoryReducer,
        transactions: transactionReducer,
    }
});

export default store;