import React from 'react';
import '../Style.css';
import * as ROUTES from '../../Constants/routes';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Imagen2 from '../../images/mesa_trabajo13.png';
  
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

function add() {
  var puntaje = sessionStorage.getItem("puntaje");
  puntaje = parseFloat(puntaje) + 1;

  // alert(`Su puntaje! ${puntaje}`);

  sessionStorage.setItem("puntaje", puntaje);
}

// Main component
function QuintaPregunta() {
    const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <div className="button-container">
              <img src={Imagen2} className="imagesD" height="700vh"/>
              <Button component={Link} to={ROUTES.PUNTAJE} variant="contained" color="secundary" size="small" className="levels-button-container-A">
                Te coleas
              </Button>
              <Button onClick={add} component={Link} to={ROUTES.PUNTAJE} variant="contained" color="secundary" size="small" className="levels-button-container-B">
                Esperas en la fila
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default QuintaPregunta;