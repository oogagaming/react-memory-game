import React from 'react'
import { Button, Fade, Paper, Grid, makeStyles, ButtonBase } from '@material-ui/core';

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

function Card() {
    const classes = useStyles();

    return (
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
    )
}

export default Card
