import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { reservationsQuery, reservationQuery } from './queries/queries'
import Reservations from './components/Reservations'
import Reservation from './components/Reservation'
import Form from './components/Form'
import './App.css';

class App extends Component {
  
  state = {
    reservations: [],
    reservation: null,
    resId: "5cd908e855075b1530b6fe46"
  }

  fillReservations = (data, load) => { this.setState({ reservations: data, loading: load }) }
  fillReservation = data => { this.setState({ reservation: data }) }
  initQueryRes = id => { this.setState({ resId: id }) }

  render() {
    return (
      <div>
        <Form />
        <div className="App">
          <Query query={reservationsQuery} 
                 onCompleted={(data, loading) => this.fillReservations(data.reservations, loading)}
          >
            {
              ({ error }) => {
                error&& console.log(error.message)
                return <Reservations data={this.state.reservations} query={this.initQueryRes} />
              }
            }
          </Query>
          
          <hr />
          
          <Query query={reservationQuery}
            onCompleted={(data) => this.fillReservation(data.reservation)}
            variables={ {id: this.state.resId} }
          >
            {
              ({ error }) => {
                error&& console.log(error.message)
                return this.state.reservation&& <Reservation reservation={this.state.reservation} />
              }
            }
          </Query>      
        </div>
      </div>
    );
  }
}

export default App;
