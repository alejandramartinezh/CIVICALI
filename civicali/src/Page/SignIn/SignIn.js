
import React, { Component } from 'react';

import { Button, Container, Grid, TextField } from "@material-ui/core";
import '../Style.css';
import * as ROUTES from '../../Constants/routes';

import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import Imagen from '../../images/mesa_trabajo2.png';
  
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingTop: 10,
      alignItems: 'center',
    },
    paper: {
    },
    imagesD: {
      height: '80%',
      width: '80%',
    },
    buttonPrin: {
    },
    control: {
      padding: theme.spacing(2),
    },
    primary: {
      background: 'green'
    },
  }));

// Main component
function SignIn() {
    const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <div className="button-container">
              <img src={Imagen} className="imagesD" height="700vh"/>
              <SignUpFormBase />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

// Sub components
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    const roles = {};

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set(
          {
            username,
            email,
            roles,
          },
          { merge: true },
        );
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div className="form-container-B">
        <Grid container>
          <form onSubmit={this.onSubmit}>
            <TextField
              id="username"
              name="username"
              label="Full Name"
              value={username}
              onChange={this.onChange}
              autoComplete="username"
              margin="normal"
              variant="outlined"
              fullWidth
              autoFocus
              required
            />
            <TextField
              id="email"
              name="email"
              label="Email Address"
              value={email}
              onChange={this.onChange}
              autoComplete="email"
              margin="normal"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              id="passwordOne"
              name="passwordOne"
              label="Password"
              type="password"
              value={passwordOne}
              onChange={this.onChange}
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              id="passwordTwo"
              name="passwordTwo"
              label="Confirm Password"
              type="password"
              value={passwordTwo}
              onChange={this.onChange}
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              fullWidth
              required
            />
            <label
             className="Black"
            >
              <input
                name="isAdmin"
                type="checkbox"
                onChange={this.onChangeCheckbox}
                color="primary"
              />
              Acepto recibir información acerca de esta aplicación
            </label>
            <Button
              className="form-button-container"
              disabled={isInvalid}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              component={Link} to={ROUTES.HOME}
            >
              Sign Up
            </Button>

            {error && <p>{error.message}</p>}
          </form>
        </Grid>
      </div>
    );
  }
}

export default SignIn;