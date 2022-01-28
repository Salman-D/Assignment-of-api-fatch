import React from 'react';
import Api1 from './Components/Api1';
import Api2 from './Components/Api2';
import Api3 from './Components/Api3';

export default function App() {
  return(
    <div>
        <h1 className="text-center bg-warning text-white">First Api Fatch </h1>
      <Api1/>
         <h1 className="text-center bg-success text-white">Second Api Fatch </h1>
      <Api2/>
        <h1 className="text-center bg-success text-white">Third Api Fatch </h1>
      <Api3/>

    </div>
  )
}
