import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const selectAll=()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((result)=>{
      console.log(result);
      result.data.map((user)=>console.log(user.id+" | "+user.name+" | "+user.address.street ))
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  const selectById=()=>{
    axios(
      {
        url:"https://jsonplaceholder.typicode.com/users/3",
        method:"get",
        //data:, //서버에서 보낼 파라미터 정보
      })
    .then((result)=>{
      console.log(result);
    })
    .catch((err)=>{
      console.log(err);
    });

  }

  //////////////////////////////

  const insertUser=()=>{
    axios(
      {
        url:"http://localhost:9000/user",
        method:"post",
        data:{name:"hoseok",email:"jang@naver.com",age:200}, //서버에서 보낼 파라미터 정보
      })
    .then((result)=>{
      console.log(result);
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  const deleteUser=()=>{
    axios(
      {
        url:"http://localhost:9000/user/3",
        method:"delete",
        //data:{id:1}, //서버에서 보낼 파라미터 정보
      })
    .then((result)=>{
      console.log(result);
    })
    .catch((err)=>{
      console.log("------")
      console.log(err.response.data.title+" | "+err.response.data.detail);
    });
  
  }

  const updateUser=()=>{
    axios(
      {
        url:"http://localhost:9000/user/3",
        method:"put",
        data:{name:"hoseok1",email:"jang@naver.com",age:200}, //서버에서 보낼 파라미터 정보
      })
    .then((result)=>{
      console.log(result);
    })
    .catch((err)=>{
      console.log("------")
      console.log(err.response.data.title+" | "+err.response.data.detail);
    });
  }

  const getbyId=()=>{
    axios(
      {
        url:"http://localhost:9000/user/3",
        method:"get",
        //data:{name:"hoseok1",email:"jang@naver.com",age:200}, //서버에서 보낼 파라미터 정보
      })
    .then((result)=>{
      console.log(result.data);
    })
    .catch((err)=>{
      console.log("------")
      console.log(err.response.data.title+" | "+err.response.data.detail);
    });
  }

  const getUsers=()=>{
    axios(
      {
        url:"http://localhost:9000/user",
        method:"get",
        //data:{name:"hoseok1",email:"jang@naver.com",age:200}, //서버에서 보낼 파라미터 정보
      })
    .then((result)=>{
      console.log(result.data);
    })
    .catch((err)=>{
      console.log("------")
      console.log(err.response.data.title+" | "+err.response.data.detail);
    });
  }



  return (
    <>
      <h1>Axios Test</h1>  
      <button onClick={selectAll}>get - selectAll</button>
      <button onClick={selectById}>get- selectById</button>

      <h3>Spring boot 연동하기</h3>
      <button onClick={insertUser}>post - user 등록</button>
      <button onClick={deleteUser}>delete - user 삭제</button>
      <button onClick={updateUser}>put - user 수정</button>
      <button onClick={getbyId}>get - user 부분 조회</button>
      <button onClick={getUsers}>get - user 삭제</button>
    </>
  )
}

export default App
