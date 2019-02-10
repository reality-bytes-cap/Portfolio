import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { withAuthorization } from '../Session';

const amyText = 'Amy has a passion for creative technology and is particularly interested in front-end development. She is really looking forward to the design and aesthetic aspects of the project. Amy hopes to take on more of a leadership role throughout the development process. ';

const bobText = 'Bob is a lifelong learner that always welcomes the opportunity to develop new skills. He is keen to contribute to both the design and functionality of this project. Bob plans to be involved in all aspects of this project during the development process.';


const kenText = 'Ken enjoys problem-solving and finds great satisfaction in learning new skills. He is most interested in integrating the various pieces of this project into a working prototype. During development, Ken w';

const lianiText = 'Liyani loves to code and is very interested in web development and technical programming. He is excited to develop the back-end of the project. Liyani’s main focus will be programming and user interface design. ';


var cStyle = {
  color: 'black',
  fontSize: '20px',
  justifyContent: 'space-between',
  display: 'inline-block'
};

var dStyle = {
  color: 'black',
  fontSize: '15px',
  justifyContent: 'space-between',
  display: 'inline-block',
  height: '100%',
  width: '100%',
  textAlign: "left",
  padding: " 100px",
  display: 'flex', 
  justifyContent: 'center'
};

var logoimg = {
  height: '150px',
  padding: '5em',
  justifyContent: 'center'
  
}

var sStyle = {
  color: 'black',
  fontSize: '15px',
  justifyContent: 'space-between',
  width: '100%',
  display: 'flex', 
  justifyContent: 'center'
};

const HomePage = () => (
  <div>
  <span style={sStyle}><img
   style={{width: '75px', height: '75px', justifyContent: 'center'}}
   src={"/images/Logo2/logo128.png"}
    alt="Logo"
    /></span><br /> 
    
  <span style={sStyle}><h1> Team Reality Bytes </h1></span><br /> 
  
  <span style={sStyle}>
   <Card style={{width: '230px', display: 'inline-block'}}>
      <CardTitle
        avatar={"/images/Amy128.png"}
        title="Amy"
        subtitle="Dear Leader"
      />
      <CardMedia 
        aspectRatio="wide"
        image={"/images/Amy.png"}
      />
      
     <CardText>{amyText}</CardText>
     
    </Card>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
    <Card style={{width: '230px', display: 'inline-block'}}>
        <CardTitle
          avatar={"/images/bob128.png"}
          title="Bob"
          subtitle="Design/Programmer"
        />
        <CardMedia
          aspectRatio="wide"
          image="https://placeimg.com/800/450/nature"
        />
        
        <CardText>{bobText}</CardText>
       
      </Card>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
       <Card style={{width: '230px', display: 'inline-block'}}>
            <CardTitle
              avatar={"/images/ken128.png"}
              title="Ken"
              subtitle="Tester/Programmer"
            />
            <CardMedia
              aspectRatio="wide"
              image="https://placeimg.com/800/450/nature"
            />
            
            <CardText>{kenText}</CardText>
           
          </Card>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
           <Card style={{width: '230px', display: 'inline-block'}}>
                <CardTitle
                  avatar={"/images/Liyani128.png"}
                  title="Liyani"
                  subtitle="UI Design/ programmer"
                />
                <CardMedia
                  aspectRatio="wide"
                  image="https://placeimg.com/800/450/nature"
                />
                
                <CardText>{lianiText}</CardText>
               
              </Card>
              </span>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
