import React from 'react';

const Article = (props) => {
    return (
        <>
            <h2>{props.title}</h2>
            <p>이번 여름에 바다가 있는 테마 여행 </p>
            <p>{props.body}</p>
        </>
    );
};

export default Article;