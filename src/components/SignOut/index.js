import React from 'react';
import { Button } from 'react-bootstrap';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <Button variant="primary" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);
