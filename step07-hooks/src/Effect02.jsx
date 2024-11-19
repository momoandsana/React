import React from 'react';
import { useState } from 'react';
import Timer from './components/Timer';

const Effect02 = () => {
     const [showTimer,setShowTimer]=useState(false);
     return (
          <div>
              <h3>Effect - 자원 해지</h3>
               {showTimer && <Timer/>}
               <button onClick={()=>setShowTimer(!showTimer)}>Toggle Btn</button>
          </div>
     );
};

export default Effect02;