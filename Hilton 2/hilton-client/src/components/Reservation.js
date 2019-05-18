import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    card: {
      minWidth: 275,
      textAlign: 'left',
      padding: theme.spacing.unit * 2,
    },
    title: {
      fontSize: 14,
      color: '#333'
    },
    pos: {
      marginBottom: 12,
    },
  });
  
const Reservation = props => {
    return (
        <Card className={props.classes.card}>
            <Typography variant="h2" component="h1"> Reservation </Typography>
            <hr />
            <CardContent>
                <Typography variant="h4" component="h2"> {props.reservation.name} </Typography>
                <Typography variant="h5" component="h3">Hotel: {props.reservation.hotelName} </Typography>
                <Typography component="p">Arrival Date: {props.reservation.arrivalDate} </Typography>
                <Typography component="p">Departure Date: {props.reservation.departureDate} </Typography>
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(Reservation);
