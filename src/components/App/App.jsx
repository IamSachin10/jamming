import { useState, useCallback } from "react";
import Searchbar from "../Searchbar/Searchbar";


function App() {


  return (
    <>
      <h1 className="text-white bg-black text-4xl capitalize text-center py-2 font-medium">
        ja<span className=" text-red-500">mmm</span>ing
      </h1>
      <div className=" bg-back-Img  min-h-screen bg-no-repeat bg-cover">
        <Searchbar  />
  
      </div>
    </>
  );
}

export default App;
