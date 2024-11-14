import React from 'react';
import { useState } from 'react';

// Ex03_form2라는 함수형 컴포넌트를 정의합니다.
const Ex03_form2 = () => {
    // profile이라는 상태와 이를 업데이트할 setProfile 함수를 정의합니다.
    // profile은 name, age, email 속성을 가지는 객체로 초기화됩니다.
    const [profile, setProfile] = useState({
        name: "",
        age: "",
        email: "",
    });

    // inputUpdate 함수는 입력값이 변경될 때마다 호출됩니다.
    // e.target에서 name과 value를 추출하여 console에 출력하고 상태를 업데이트합니다.
    const inputUpdate = (e) => {
        const { name, value } = e.target; // 이벤트 타겟에서 name과 value를 구조 분해하여 가져옵니다.
        console.log(name, value); // 현재 입력 필드의 name과 입력값을 콘솔에 출력합니다.

        // profile 상태를 업데이트합니다. 기존 상태는 복사하고, 현재 입력 필드에 해당하는 속성만 갱신합니다.
        setProfile({
            ...profile, // 기존 profile 상태를 그대로 복사합니다.
            [name]: value, // name에 해당하는 필드에 새로운 value를 설정합니다.
        });
    };

    // 컴포넌트의 JSX 반환값입니다.
    return (
        <div>
            <h2>폼 입력값</h2> {/* 제목을 표시합니다. */}
            {/* 이름 입력 필드: profile.name과 연결되며, 값이 변경되면 inputUpdate가 호출됩니다. */}
            이름:
            <input
                type="text"
                name="name"
                value={profile.name}
                onChange={inputUpdate}
            />
            <br />

            {/* 나이 입력 필드: profile.age와 연결되며, 값이 변경되면 inputUpdate가 호출됩니다. */}
            나이:
            <input
                type="text"
                name="age"
                value={profile.age}
                onChange={inputUpdate}
            />
            <br />

            {/* 이메일 입력 필드: 오타를 수정해 name="email"로 변경하고 profile.email과 연결합니다. */}
            이메일:
            <input
                type="text"
                name="email" // 오타를 수정했습니다.
                value={profile.email}
                onChange={inputUpdate}
            />
            <br />
        </div>
    );
};

export default Ex03_form2; // Ex03_form2 컴포넌트를 모듈의 기본값으로 내보내 다른 파일에서 사용할 수 있도록 설정합니다.
