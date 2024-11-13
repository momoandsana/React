const JsxTest=()=>{
    const message="jsx 문법 공부하기";

    // student 객체
    const student={
        name:"희정",
        age:20,
        addr:"오리"
    };

    const styleCss={// camelCase 문법으로 작성 css 작성
        color:"white",
        backgroundColor:"orange"

    }
    // 버튼 클릭했을 때 호출될 함수
    const sayHello=()=>{
        console.log("안녕하세요~~");
    }

    return(
        // JSX 문법, if 문이 안 된다. 삼항연산자 사용
        <>
        <h1 style={styleCss}>{message}</h1>
        <h3 className="h3Css">
            이름:{student.name}<br />
            나이:{student.age}<br />
            주소:{student.addr}<br />
        </h3>

        <button onClick={sayHello}>클릭</button>
        {/* sayHello() 로 하면 무조건 호출 */}

        <button onClick={()=>console.log("두 번째 클릭")}>클릭2</button>

        <br/>
        {
            student.age>18 ? <div>성인</div> : <div>미성년자</div>
        }

        <hr/>
        {student.age>18 && <h4 style={{color:"skyblue",textDecoration:"underline"}}>환영합니다</h4>}
        {/* 앞에 조건에서 거짓면 뒤에를 실행 안 하니까 */}

        </>
        
    )
}
// 두 줄 이상 입력하고 싶으면 <> 필수

export default JsxTest;
// main 에서 import 해서 사용

// function JsxTest(){

// }