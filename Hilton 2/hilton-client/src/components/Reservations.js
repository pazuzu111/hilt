import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    width: '50vw',
    overflow: 'auto'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "1.5em",
    textAlign: 'left',
    color: 'beige',
    backgroundColor: '#333',
    cursor: 'pointer'
  },
});

const Reservations = props => {
	return (
    <div className={props.classes.root}>
      <Grid container spacing={8}>
        {props.data.map(x => {
            return (
              <Grid item xs={12} key={x.id} onClick={() => props.query(x.id)}>
                <div className={props.classes.paper}>
                    <h1>Name: {x.name}</h1>
                    <p>Hotel Name: {x.hotelName}</p>
                    <p>arrival Date: {x.arrivalDate}</p>
                    <p>departure Date: {x.departureDate}</p>
                </div>
              </Grid>
            )
          })
        }
      </Grid>
    </div>
	)
}
export default withStyles(styles)(Reservations);