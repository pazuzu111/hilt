"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
exports.ReservationSchema = new mongoose.Schema({
    name: { type: String, require: true },
    hotelName: { type: String, require: true },
    arrivalDate: { type: Date, require: true },
    departureDate: { type: Date, require: true },
}, { discriminatorKey: 'type' });
const Reservation = mongoose.model('Reservation', exports.ReservationSchema);
exports.Reservation = Reservation;
//# sourceMappingURL=reservation.js.map