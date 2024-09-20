import React, {useState} from "react";

import ShimmerUi from "./components/ShimmerUi";
import { useDispatch } from "react-redux";
import { addInfo, removeInfo, clearInfo } from "./store/slices/contactSlice";

const App = () => {

  const dispatch = useDispatch();
  const [address, setAddress] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    if (address.trim().length > 0 ){
      dispatch(addInfo(address));
      setAddress('')
    }
  }
  
  return (
    <>
      <form onSubmit={submitHandler}>
        <label>Add New Address</label>
        <input 
          type="text" 
          value={address} 
          placeholder="Enter Address" 
          onChange={(e) => {setAddress(e.target.value)}}
        />
        <br/>
        <button>Add</button>
      </form>
      <br/>
      <button onClick={() => {
        dispatch(removeInfo())
      }}>
        Remove Address
      </button>
      <br/>
      <button onClick={() => {
        dispatch(clearInfo())
      }}>
        Clear All Addresses
      </button>
      <ShimmerUi/>
    </>
  );
}

export default App;