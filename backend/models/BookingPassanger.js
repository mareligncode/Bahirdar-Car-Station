import mongoose from "mongoose";

const bookingPassengerSchema = new mongoose.Schema(
    {
        bookingID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Booking",
            required: true,
        },
        passengerID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("BookingPassenger", bookingPassengerSchema);
