import React, { Component } from 'react'
import {reservationMutation} from '../queries/queries'
import { Mutation } from 'react-apollo';

class Form extends Component {
  state = {
    name: '',
    hotelName: '',
    arrivalDate: '',
    departureDate: ''
  }

  render() {
    const { name, hotelName, arrivalDate, departureDate } = this.state
    
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="name"
          />
          <input
            value={hotelName}
            onChange={e => this.setState({ hotelName: e.target.value })}
            placeholder="hotel name"
          />
          <input
            type="date"
            value={arrivalDate}
            onChange={e => this.setState({ arrivalDate: e.target.value })}
            placeholder="2022-02-26"
          />
          <input
            type="date"
            value={departureDate}
            onChange={e => this.setState({ departureDate: e.target.value })}
            placeholder="20-02-26"
          />
        </div>

        <Mutation mutation={reservationMutation} variables={{ name, hotelName, arrivalDate, departureDate }}>
            {(createReservation) => (
                <button onClick={createReservation}>
                    Create Reservation
                </button>
            )}
        </Mutation>
      </div>
    )
  }
}

export default Form;