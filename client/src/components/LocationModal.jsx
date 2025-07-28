import {useState, useContext} from "react"
import { LocationContext } from "../context/locationContext"
import { RxCrossCircled } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";

const Locations = [
        {name: "Alabama", min:130},
        {name: "Alaska", min:120},
        {name: "Arizona", min:150},
        {name: "Californea", min:110},
        {name: "Colorado", min:140},
        {name: "Florida", min:160},
        {name: "Georgia", min:120},
        {name: "Kansas", min:170},
        {name: "Minnesota", min:120},
        {name: "New York", min:110},
        {name: "Washington", min:130}
    ]
const LocationModal = () => {
    const {
        isOpenModel,
        setSelectedLocation,
        closeModel,
        clearModel
    } = useContext(LocationContext);

    const[searchTerm, setSearchTerm] = useState("");
    const filteredLocations = Locations.filter((loc)=> loc.name.toLowerCase().includes(searchTerm.toLowerCase()))

    if(!isOpenModel) return null;
  return (
    <div className="fixed inset-0 shadow-lg bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[400px] max-h-[90vh] overflow-hidden shadow-lg">
        <div className="flex justify-between items-center p-4 ">
          <div>
            <h2 className="text-lg mb-2 font-semibold">
              Choose your Delivery Location
            </h2>
            <p className="text-sm text-gray-500">
              Enter your address and we will specify the offer for your area.
            </p>
          </div>
          <RxCrossCircled onClick={closeModel} className=" -mt-10 text-gray-500 hover:text-gray-800 text-xl" />
        </div>

        <div className="flex mb-3 items-center rounded-2xl gap-3 px-4 py-3 bg-gray-100">
          <BiSearch />
          <input
            type="text"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            placeholder="Search your area...."
            className="bg-transparent outline-none flex-1 "
          ></input>
        </div>
        <div className="max-h-[300px] overflow-y-auto px-4 py-2 space-y-3">
          <div className="flex justify-between items-center border-b pb-1">
            <span className="font-medium">Select a Location</span>
            <button onClick={clearModel}className="text-xs outline border p-1 rounded-full text-zinc-400 hover:text-sky-500">
              Clear All
            </button>
          </div>
          {filteredLocations.map((loc,idx)=>(
            <div key={idx} onClick={()=>{
                setSelectedLocation(loc);
                closeModel()
            }} className="flex justify-between items-center border-b pb-3 cursor-pointer"
            >
                <span>{loc.name}</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-500">Min:${loc.min}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LocationModal;
