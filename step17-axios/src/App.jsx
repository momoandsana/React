// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import axios from 'axios'

// function App() {
//   const selectAll=()=>{
//     axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((result)=>{
//       console.log(result);
//       result.data.map((user)=>console.log(user.id+" | "+user.name+" | "+user.address.street ))
//     })
//     .catch((err)=>{
//       console.log(err);
//     });
//   }

//   const selectById=()=>{
//     axios(
//       {
//         url:"https://jsonplaceholder.typicode.com/users/3",
//         method:"get",
//         //data:, //서버에서 보낼 파라미터 정보
//       })
//     .then((result)=>{
//       console.log(result);
//     })
//     .catch((err)=>{
//       console.log(err);
//     });

//   }

//   //////////////////////////////

//   const insertUser=()=>{
//     axios(
//       {
//         url:"http://localhost:9000/user",
//         method:"post",
//         data:{name:"hoseok",email:"jang@naver.com",age:200}, //서버에서 보낼 파라미터 정보
//       })
//     .then((result)=>{
//       console.log(result);
//     })
//     .catch((err)=>{
//       console.log(err);
//     });
//   }

//   const deleteUser=()=>{
//     axios(
//       {
//         url:"http://localhost:9000/user/3",
//         method:"delete",
//         //data:{id:1}, //서버에서 보낼 파라미터 정보
//       })
//     .then((result)=>{
//       console.log(result);
//     })
//     .catch((err)=>{
//       console.log("------")
//       console.log(err.response.data.title+" | "+err.response.data.detail);
//     });
  
//   }

//   const updateUser=()=>{
//     axios(
//       {
//         url:"http://localhost:9000/user/3",
//         method:"put",
//         data:{name:"hoseok1",email:"jang@naver.com",age:200}, //서버에서 보낼 파라미터 정보
//       })
//     .then((result)=>{
//       console.log(result);
//     })
//     .catch((err)=>{
//       console.log("------")
//       console.log(err.response.data.title+" | "+err.response.data.detail);
//     });
//   }

//   const getbyId=()=>{
//     axios(
//       {
//         url:"http://localhost:9000/user/3",
//         method:"get",
//         //data:{name:"hoseok1",email:"jang@naver.com",age:200}, //서버에서 보낼 파라미터 정보
//       })
//     .then((result)=>{
//       console.log(result.data);
//     })
//     .catch((err)=>{
//       console.log("------")
//       console.log(err.response.data.title+" | "+err.response.data.detail);
//     });
//   }

//   const getUsers=()=>{
//     axios(
//       {
//         url:"http://localhost:9000/user",
//         method:"get",
//         //data:{name:"hoseok1",email:"jang@naver.com",age:200}, //서버에서 보낼 파라미터 정보
//       })
//     .then((result)=>{
//       console.log(result.data);
//     })
//     .catch((err)=>{
//       console.log("------")
//       console.log(err.response.data.title+" | "+err.response.data.detail);
//     });
//   }



//   return (
//     <>
//       <h1>Axios Test</h1>  
//       <button onClick={selectAll}>get - selectAll</button>
//       <button onClick={selectById}>get- selectById</button>

//       <h3>Spring boot 연동하기</h3>
//       <button onClick={insertUser}>post - user 등록</button>
//       <button onClick={deleteUser}>delete - user 삭제</button>
//       <button onClick={updateUser}>put - user 수정</button>
//       <button onClick={getbyId}>get - user 부분 조회</button>
//       <button onClick={getUsers}>get - user 삭제</button>
//     </>
//   )
// }

// export default App

import React from "react";
import axios from "axios";
import { useState } from "react";


function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [pathId, setPathId] = useState("");
  const [images, setImages] = useState([]);

  // 하드코딩된 Bearer 토큰
  const BEARER_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJuaWNrbmFtZSI6Iu2YleynlSIsImlkIjoyOSwiaWF0IjoxNzMyMzYyNzAyLCJleHAiOjE3MzIzNjU3MDJ9.h-sfMmZduN3-YAxHLHwsidvw4urSQR8zhjCL8EFnXpo";

  const handleFileChange = (e) => {
    setImages(e.target.files); // 여러 파일 선택 가능
  };

  const createPost = async () => {
    const formData = new FormData();

    // FormData 구성
    formData.append("title", title);
    formData.append("content", content);
    formData.append("tag", tag);
    formData.append("pathId", pathId);

    // 파일 추가
    Array.from(images).forEach((file) => {
      formData.append("images", file);
    });

    try {
      const response = await axios.post("http://localhost:8080/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${BEARER_TOKEN}`, // Bearer 토큰 추가
        },
        withCredentials: true, // 인증 필요 시 추가
      });

      console.log("Post created successfully:", response.data);
    } catch (error) {
      console.error("Error creating post:", error.response ? error.response.data : error);
    }
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // 기본 폼 제출 방지
          createPost();
        }}
      >
        <div>
          <label>Title:</label>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tag:</label>
          <input
            type="text"
            placeholder="Tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </div>
        <div>
          <label>Path ID:</label>
          <input
            type="number"
            placeholder="Path ID"
            value={pathId}
            onChange={(e) => setPathId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Images:</label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;

