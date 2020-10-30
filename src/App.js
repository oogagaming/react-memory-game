import './App.css';
import { Button, Fade, Paper, Grid, makeStyles, ButtonBase } from '@material-ui/core';
import { useState } from 'react';
import Card from './Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '200px',
    width: '40vh',
  },
}));

function App() {
  const classes = useStyles();

  const [shown, setShown] = useState(false);

  const change = () => {
    if (shown) 
    { 
      setShown(false)
    }else {
      setShown(true)
    }
  }
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <Fade in={shown}>
      <Grid container spacing={3}>
        <Button>
          <Card className="card"/>
        </Button>
        <ButtonBase>
          <Card className="card"/>
        </ButtonBase>
        <ButtonBase>
          <Card className="card"/>
        </ButtonBase>
        <ButtonBase>
          <Card className="card"/>
        </ButtonBase>
        <ButtonBase>
          <Card className="card"/>
        </ButtonBase>
        <ButtonBase>
          <Card className="card"/>
        </ButtonBase>
        <ButtonBase>
          <Card className="card"/>
        </ButtonBase>
        <ButtonBase>
          <Card className="card"/>
        </ButtonBase>
      </Grid>
      </Fade>
      <div className="button">
      <Button className="Button" color="primary" variant="contained" onClick={change}>test</Button>
      </div>
    </div>
  );
}

export default App;
