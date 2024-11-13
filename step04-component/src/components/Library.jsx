
import Book,{Book2} from './Book'

const Library = () => {
    return (
        <>
            <Book name="Spring" numPage={100}/>
            <Book2 name="jsp" numPage={300}/>
        </>
    );
};

export {Library};