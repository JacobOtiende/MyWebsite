import React from "react";
import "./NavbarStyles.css"
import "./Styles.css"



function Navbar() {
    const state = { clicked: false}
        console.log(state);
    const handleClick = (e) =>{
      
        const theChange = e.target.id;
        if(theChange === "bars"){
            this.setState({clicked:!this.state.clicked})
        }
        
    }
    return(
        <>
        <nav>
            <a href="index.html">
            <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" className="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" className="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" className="ccompli2" fill="#FFBC7D"></path> </svg>
            </a>
            <div>
                <ul id="navbar">
                    <li className="nav-item"><a className="active" href="index.html">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="blogs">Blogs</a></li>
                    <li><a href="/projects" >Projects</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </div>
            <div id="mobile" onClick={handleClick}>
                <i id="bars" className= "fas fa-times, fas fa-bars"></i>
            </div>
        </nav>
        </>
    )
}
export default Navbar;