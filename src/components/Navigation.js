import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import BellIcon from 'react-bell-icon';
import Avatar from 'react-avatar';
import avatar from '../pngegg.png'


const Styles = styled.div`
  .navbar { background-color: #222; height: 150px }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 80%;
    right: 20%;
    top: 1.2em; 
  }
  .form-center-here {
    position: absolute !important;
    left: 65%;
    right: 15%;

  }
  .form-left {
    position: absolute !important;
    left: 5%;
    right: 95%;
  }
`;


const Expo = () => {

   const d = new Date()
   const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
   const months = ["January", "Feburary", "Mar", "April", "May", "June", "July", "August", "September", "october", "November", "December"]
   
   const day = weekDay[d.getDay()]
   const month = months[d.getMonth()]
   const date = d.getDate()
   const year = d.getFullYear()

   return(
     <span style={{color:"#0C76E5"}} >{day},<span style={{color:"#F9F9F9"}}> {date} {month} {year}</span></span>
   )

}

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-left col-sm-2 col-md-2">
      <h3 style={{color:'white', fontWeight:"inherit"}}>Dashboard</h3>
      <div > {Expo()}</div>
       
      </Form>
      <Form className="form-center col-sm-2 col-md-2" >
       <div className="row" style={{marginBottom:"20px"}}>
          <div className="col-sm-3" ><BellIcon width='20' active={true} animate={false} color="white"/></div>
          <div className="col-sm-6"><p style={{color:"whitesmoke", textAlign:'center', marginTop:"8px"}}>John Bayer</p></div>
          <div className="col-sm-3"><Avatar src={avatar} size="40" round={true} /></div>
        </div>
        </Form>
        <Form className="form-center-here col-sm-6 col-md-4" style={{marginTop:"100px"}} >
       <div className="row" >
       <div className="col-sm-4">
        <button className="btn btn-primary"style={{fontSize:"12px", width:"80px"}}>+Add</button>
       </div>
       <div class="col-sm-8">
        <FormControl type="text" placeholder="Search for Application here" className="" style={{marginRight:"20px", height:"30px", backgroundColor:"#222", color:"whitesmoke", fontSize:"15px", border:"1px solid #565051"}} />
        </div>
       </div>
       </Form>
     
    </Navbar>
  </Styles>
)

 