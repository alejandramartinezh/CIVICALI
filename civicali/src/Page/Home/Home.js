import React from 'react';
import '../Style.css';
import * as ROUTES from '../../Constants/routes';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Imagen2 from '../../images/mesa_trabajo3.png';
  
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
function Home() {
    const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <div className="button-container">
              <img src={Imagen2} className="imagesD" height="700vh"/>
              <Button component={Link} to={ROUTES.PERSONAJES} variant="contained" color="primary" className="Home-button-container-A">
                  Jugar
              </Button>
              <br/>
              <Button component={Link} to={ROUTES.RANKING} variant="contained" color="secundary" className="Home-button-container-B">
                  Ranking
              </Button>
              <br/>
              <Button component={Link} to={ROUTES.TIENDA} variant="contained" color="secundary" className="Home-button-container-C">
                  Tienda
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;