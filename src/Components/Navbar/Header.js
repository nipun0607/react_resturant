import './Header.css';


function Header(){
    return(
       <header  className="header_navbar">
        <div className="navbar_first">
            <img src="https://flowbite.com/docs/images/logo.svg" className="logo"/>
            <h4>GeekFoods</h4>
        </div>
        <div className="navbar_second">
            <ul className="navbar_list">
                <li style={{color:"blue"}}>Home</li>
                <li>Quote</li>
                <li>Resturants</li>
                <li>Foods</li>
                <li>Contact</li>
            </ul>
            
        </div>
        <div className="navbar_btn">
        <button id ="Get_started" >Get started</button> 
     </div>
        </header>

    );

}

export default Header;