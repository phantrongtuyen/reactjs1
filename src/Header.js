import React from "react";
import './styles/style.css'



function Header(props) {
    const name = props.name;
    const age = props.age
    return ( 
        <div className="app-header">
            <h1>Day la header : {name}</h1>
        </div>
    );
}

export default Header;