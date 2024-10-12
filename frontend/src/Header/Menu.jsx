import './Header.css';
import { Link }from 'react-router-dom';


const Menu = () => {

    return (
        <header className="header-top">
            <div className="header-firstdiv">
                <img className="header-img" width="30" height="20" alt="Logo"/>
                <span className="header-span">|</span>
                <h2 className="header-h2">BudgetPlan</h2>
            </div>
            <div className="header-seconddiv">
                    <button className="header-listing" >Show Listing</button>
            </div>
        </header>
    );
}

export default Menu;