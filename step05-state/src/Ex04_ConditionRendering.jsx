import React, { useState } from 'react';

const Ex04_ConditionRendering = () => {
     const[isLogin,setIsLogin]=useState(false);
     return (
          <div>
               <h3>Condition Rendering</h3>
               <button onClick={()=>setIsLogin(!isLogin)}>
                    {isLogin ? "LogOut":"Login"}
               </button>
          </div>
     );
};

export default Ex04_ConditionRendering;