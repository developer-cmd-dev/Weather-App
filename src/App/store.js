import {configureStore} from '@reduxjs/toolkit'
import weatherReducer from '../features/Weather/weatherSlice'
import spinnerReducer from '../features/Spinner/spinnerSlicer'
export const store = configureStore({
    reducer:{
        weatherApp:weatherReducer,
        Spinner:spinnerReducer,
    }
})