import mail from './assets/images/mail.png';
import location from './assets/images/location.png';
import search from './assets/images/search.png';
import Button from './components/Button';


const ButtonTest = () => {
    return (
        <> 
        <div>
            <Button text={"메일"} img={mail}/>
            <Button text={"위치"} img={location}/>
            <Button text={"검색"} img={search}/>
        </div>
           
        </>
    );
};

export default ButtonTest;