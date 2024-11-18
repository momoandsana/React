import React from 'react';
import Comment from './Comment';

const CommentList = () => {
     const comments=[
          {
               name:"장희정",
               comment:"안녕"
          },
          {
               name:"이가현",
               comment:"리액트"
          },
          {
               name:"이찬범",
               comment:"리액트리액트"
          }
     ];

     return (
          <div>
               {
                    comments.map((com,index)=>{
                         return <Comment key={index} name={com.name} text={com.comment} />;
                    })
               }
          </div>
     );
};

export default CommentList;