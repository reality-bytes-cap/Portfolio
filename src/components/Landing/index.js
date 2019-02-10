import React from 'react';
import DateCountdown from 'react-date-countdown-timer';


var dStyle = {
  color: 'black',
  fontSize: '15px',
  justifyContent: 'space-between',
  
  height: '1000px',
  width: '1000px',
  textAlign: "left",
  padding: " 100px",
  display: 'flex', 
  justifyContent: 'center'
};

var sStyle = {
  color: 'black',
  fontSize: '15px',
  justifyContent: 'space-between',
  width: '100%',
  display: 'flex', 
  justifyContent: 'center'
};

const Landing = () => (

     
     <div> 
    <span style={sStyle}>
    <img
     style={{width: '75px', height: '150px', justifyContent: 'center'}}
     src={"/images/logo/treetrees.png"}
      alt="Logo"
      />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img
       style={{width: '225px', height: '75px', justifyContent: 'center', marginTop: 50}}
       src={"/images/logo/Camosun.png"}
        alt="Logo"
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img
         style={{width: '75px', height: '75px', justifyContent: 'center', marginTop: 50}}
         src={"/images/Logo2/logo128.png"}
          alt="Logo"
          />
      </span><br /> 
    <span style={sStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h1>Team Reality Bytes</h1></span><br />
    <span style={sStyle}><p>End of Camosun Winter Term</p></span><br />
        
    <span style={sStyle}><DateCountdown dateTo='April 13, 2019 00:00:00 GMT+03:00' callback={()=>alert('Hello')}  /></span>
    
      </div>
          );

export default Landing;
