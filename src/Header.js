
import React from "react";
import {Button} from "react-bootstrap"
import './App.css';


const  header =() =>{
  return (
    <nav class="navbar navbar-light bg-light justify-content:space- between align-items:center padding:1px ">
    <a class="navbar-brand">Logo</a>
    
      <center><input className="form-control mr-sm-3" type="search" placeholder="Search" aria-label="Search"></input></center>
  <Button className="bg-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>Checkout(200)</Button> 
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   User Admin</button> 
  </nav> 


    
      
  
      
  
  );
}

export default header;