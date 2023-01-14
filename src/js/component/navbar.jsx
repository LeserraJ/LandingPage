import React from "react";



const Navbar =() =>{
    return(

<div className="container-fluid">
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <a className="navbar-brand text-white mr-auto p-2" href="#">Start Boostrap</a>
   
    <ul className="navbar-nav ">
    <li className="nav-item">
        <a className="nav-link text-white te" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">About</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link text-white" href="#">Services</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link text-white" href="#">Contact</a>
      </li>
    </ul>
    
  </nav>
</div>);
};

export default Navbar;