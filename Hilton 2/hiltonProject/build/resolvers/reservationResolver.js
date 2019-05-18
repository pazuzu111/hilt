"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const reservation_1 = require("../models/reservation");
exports.resolvers = {
    Query: {
        reservations: () => reservation_1.Reservation.find(),
        reservation: (_, { id }) => __awaiter(this, void 0, void 0, function* () {
            let d = id.toString();
            return yield reservation_1.Reservation.findById(d);
        })
    },
    Mutation: {
        createReservation: (_, { name, hotelName, arrivalDate, departureDate }) => __awaiter(this, void 0, void 0, function* () {
            let result = yield reservation_1.Reservation.findOne({ arrivalDate });
            if (!result) {
                const res = new reservation_1.Reservation({ name, hotelName, arrivalDate, departureDate });
                let data = yield res.save();
                return data;
            }
            else {
                console.log('Sorry, reservation already taken');
            }
        })
    }
};
//# sourceMappingURL=reservationResolver.js.map