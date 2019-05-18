import { IResolvers } from 'graphql-tools';
import { Reservation, ReservationInt } from '../models/reservation'

export const resolvers: IResolvers = {
    Query: {
        reservations: () => Reservation.find(),
        reservation: async (_: any, {id}: any) => {
            let d = id.toString()
            return await Reservation.findById(d)
        }
    },

    Mutation: {
        createReservation: async (_: any, { name, hotelName, arrivalDate, departureDate}: ReservationInt) => {
            let result = await Reservation.findOne({arrivalDate})

            if(!result) {
                const res = new Reservation({ name, hotelName, arrivalDate, departureDate })
                let data = await res.save()
                return data 
            }
            else {
                console.log('Sorry, reservation already taken')
            }

        }
    }
}
