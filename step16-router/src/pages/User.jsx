import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
     const params=useParams();
     console.log(params);

     return (
          <div>
               <h1>User {params.id}페이지입니다</h1>     
          </div>
     );
};

export default User;    