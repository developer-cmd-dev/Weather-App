import { createSlice } from "@reduxjs/toolkit";



export const SpinnerSlice = createSlice({
    name:"Spinner",
    initialState:{
        spinners:{
            forManualLocation:false,
            forAutoLocation:false
        }
      
    },
    reducers:{
        showSpinner:(state,action)=>{
            const component = action.payload
            state.spinners[component]=true
        },
        hideSpinner:(state,action)=>{   
            state.spinners.forAutoLocation = false
            state.spinners.forManualLocation = false
        }
     
    }
})

export const {showSpinner,hideSpinner} = SpinnerSlice.actions;
export default SpinnerSlice.reducer; 