import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {useNavigate} from 'react-router-dom'

const initialState={
    weather:{},
    status:'idle',
    statusCode:0,
    error:null
}

export const fetchWeather = createAsyncThunk(
    'weatherApp/fetchWeather',
    async(location)=>{
                const response =await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${import.meta.env.VITE_API_KEY}`);
                const data = await response.json();
                return data
    }
)



export const weatherSlice = createSlice({
    name:'weatherApp',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchWeather.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(fetchWeather.fulfilled,(state,action)=>{
            if(action.payload.cod == 200){
                state.status='Success';
                state.statusCode=action.payload.cod
                state.weather=action.payload
                
            }else{
                state.status="Location Error"
                state.statusCode=action.payload.cod
                state.weather = action.payload
                state.error = action.payload.message
            }
       
        })
        .addCase(fetchWeather.rejected,(state,action)=>{
            state.status="failed",
            state.error=action.error.message
            state.statusCode = 505
        })
    }
})

export default weatherSlice.reducer