

// Book 컴포넌트
const Book = (pr) => {
    console.log(pr); // props 확인
    return (
        <>
            <h1>이 책은 {pr.name} 책입니다</h1>
            <h1>이 책의 총 페이지 수는 {pr.numPage}</h1>
        </>
    );
};


const Book2 = ({ name, numPage }) => {  // props를 구조분해 할당
    console.log(name); // props 확인
    console.log(numPage); // props 확인
    return (
        <>
            <h1>이 책은 {name} 책입니다</h1>
            <h1>이 책의 총 페이지 수는 {numPage}</h1>
        </>
    );
};

//export { Book, Book2};  // 여러 컴포넌트 export
export default Book; //
export {Book2};
