import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        passengerID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        tripID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Trip",
            required: true,
        },
        vehicleID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle",
            required: true,
        },
        seatNumber: Number,
        bookingDate: { type: Date, default: Date.now },
        status: {
            type: String,
            enum: ["confirmed", "cancelled", "pending", "refunded"],
            default: "pending",
        },
        cancellationReason: String,
        refundAmount: Number,
        ticketNumber: { type: String, unique: true },
        boardingPass: String, // QR code URL
        specialRequests: String,
    },
    { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
