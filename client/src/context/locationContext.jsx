import { createContext, useState } from "react";

export const LocationContext = createContext();

const LocationContextProvider = ({children})=> {

    const[selectedLocation, setSelectedLocation] = useState(null)
    const[isOpenModel, setIsModelOpen] = useState(false)
    const openModel = () => {
        setIsModelOpen(true)
    }
    const closeModel = () => {
        setIsModelOpen(false)
    }
    const clearModel = () => {
        setSelectedLocation(null)
    }

    return(
        <LocationContext.Provider value={{
            selectedLocation,
            setSelectedLocation,
            isOpenModel,
            closeModel,
            clearModel,
            openModel,
            
        }}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationContextProvider