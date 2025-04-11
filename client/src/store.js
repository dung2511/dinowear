import { configureStore } from '@reduxjs/toolkit';
import ReducerRoot from './Redux/Reducer/ReducerRoot';

const store = configureStore({
    reducer: ReducerRoot,
});

export default store;
