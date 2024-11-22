import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
     const nav=useNavigate();

     const btnClick01=()=>{
          // 이동
          nav("/user");
     }

     const btnClick02=()=>{
          nav("/admin");
     }

     const btnClick03=()=>{
          nav("/");
     }

     const btnClick04=()=>{
          nav(-1);// 뒤로 가기
     }

     return (
          <div>
            <h1>헤더입니다</h1>
            <Link to={"/"}>Home</Link> &nbsp;&nbsp;
            <Link to={"/user/100"}>User</Link> &nbsp;&nbsp;
            <Link to={"/admin"}>Admin</Link>
          <hr/>

          <a href="/">Home</a> &nbsp;&nbsp;
          <a href="/user/jang">User</a> &nbsp; &nbsp;
          <a href="/admin">Admin</a> &nbsp; &nbsp;

          <hr/>

          <button onClick={btnClick01}>user 로 이동</button>
          <button onClick={btnClick02}>admin 로 이동</button>
          <button onClick={btnClick03}>home 로 이동</button>
          <button onClick={btnClick04}>뒤로가기</button>
          
          </div>
     );
};

export default Header;<Header header></Header>