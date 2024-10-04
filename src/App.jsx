import React, { useEffect, useState } from "react";
import { Header, Container,WeatherComponent, Location as LocationComponent, ErrorComponent } from './Components/index';
import { useDispatch, useSelector } from "react-redux";
import { hideSpinner } from "./features/Spinner/spinnerSlicer";




function App() {
  const { weather, status, error } = useSelector(
    (state) => state.weatherApp
  );
  const [isError,setIsError]=useState(false)
  const [errorMessage,setErrorMessage]=useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    setIsError(false)
    if (weather.cod == 200) {
      dispatch(hideSpinner())
    } else if (weather.cod == 404) {
      setIsError(true)
      setErrorMessage('Please Enter Correct Location')
    } else if(error){
      setErrorMessage('Error 500!')
    }
  }, [weather, status, error]);

  const closeErrorMessage=()=>{
    setIsError(false)
  }

  return (
    
    <div className={`dark:bg-DarkBackgroundWallpaper dark:bg-black bg-LightBackgroundWallpaper bg-white bg-center bg-no-repeat bg-cover`}> 
      <Header />
      <Container>
        {
               isError && <ErrorComponent classname="absolute top-28"  children={errorMessage} closeErrorFunc={closeErrorMessage}/>
        }
      <LocationComponent/>
      <WeatherComponent/>
      </Container>
    </div>

  );
}

export default App;
