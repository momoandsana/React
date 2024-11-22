import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Admin = () => {
     const[params]=useSearchParams();
     console.log(params);



     return (
          <div>
               <h1>Admin 페이지입니다</h1>
               <h3>
                    이름 :{params.get("name")}<br/>
                    나이 : {params.get("age")}
               </h3>
          </div>
     );
};

export default Admin;