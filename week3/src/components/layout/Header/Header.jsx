import Navigation from "../Navigation/Navigation.jsx";
import LoginForm from "../../container/LoginForm/LoginForm.jsx";

const Header = ({links}) =>{
    
    return (
        <header>
            <Navigation links={links} />
            <LoginForm />
        </header>
    );
}

export default Header;