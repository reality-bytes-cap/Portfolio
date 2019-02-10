import React from 'react';
import { Link } from 'react-router-dom';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';



import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';
var pStyle = {
  color: 'white',
  fontSize: '20px',
  justifyContent: 'space-between',
  display: 'inline-block'
};

var divStyle = {
  width: '1500px'
};

const Navigation = () => (
  <div style={divStyle}>
  <AppBar position="static">
  <Toolbar>
  
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
    </Toolbar>
      </AppBar>
  </div>
);

const NavigationAuth = () => (
  <span>
  
      <p style={pStyle}><Link to={ROUTES.LANDING}>Landing</Link></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
      <p style={pStyle}><Link to={ROUTES.HOME}>Home</Link></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
      <p style={pStyle}><Link to={ROUTES.ACCOUNT}>Account</Link></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
      <p style={pStyle}><Link to={ROUTES.ADMIN}>Admin</Link></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
      <p><SignOutButton /></p>
   </span>
);

const NavigationNonAuth = () => (
  <span>
      <p style={pStyle}><Link to={ROUTES.LANDING}>Landing</Link></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
      <Link to={ROUTES.SIGN_IN}><Button variant="primary">Sign In</Button></Link>
   </span>
);

export default Navigation;
