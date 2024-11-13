import Ex01_Sub2, { Ex01_Sub3, num, name } from './components/Ex01_Sub2';

const Ex01_Export = () => {
    return (
        <div>
            <Ex01_Sub2 />
            <Ex01_Sub2 />
            <Ex01_Sub3 />
            <hr />
            num: {num}/name: {name}
        </div>
    );
};

export default Ex01_Export;
