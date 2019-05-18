import * as mongoose from 'mongoose';

export interface ReservationInt extends mongoose.Document {
    name: string;
    hotelName: string;
    arrivalDate: Date;
    departureDate: Date;
}

export const ReservationSchema = new mongoose.Schema({
    name: {type: String, require: true},
    hotelName: {type: String, require: true},
    arrivalDate: {type: Date, require: true},
    departureDate: {type: Date, require: true},
}, { discriminatorKey: 'type' } as any)

const Reservation = mongoose.model<ReservationInt>('Reservation', ReservationSchema)

export { Reservation };