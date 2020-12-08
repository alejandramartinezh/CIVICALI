import React from 'react';
import '../Style.css';
import * as ROUTES from '../../Constants/routes';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Imagen2 from '../../images/mesa_trabajo1.png';
  
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
function Personajes() {
    const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <div className="button-container">
              <img src={Imagen2} className="imagesD" height="700vh"/>
              <Button component={Link} to={ROUTES.DIANA} variant="contained" color="primary" className="Home-button-container-A">
                Mujer
              </Button>
              <br/>
              <Button component={Link} to={ROUTES.NICOLAS} variant="contained" color="secundary" className="Home-button-container-B">
                Hombre
              </Button>
              <br/>
              <Button component={Link} to={ROUTES.HOME} variant="contained" color="primary" className="Ranking-button-container-C">
                Regresar
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Personajes;