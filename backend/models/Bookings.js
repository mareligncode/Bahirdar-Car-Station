const bookingSchema = new mongoose.Schema({
    passengerID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tripID: { type: mongoose.Schema.Types.ObjectId, ref: "Trip", required: true },
    vehicleID: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle", required: true },
    seatNumber: { type: Number, required: true },
    bookingDate: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ["confirmed", "cancelled", "pending", "refunded"],
        default: "pending"
    },
    cancellationReason: String,
    refundAmount: Number,
    ticketNumber: { type: String, unique: true, required: true },
    boardingPass: String, // QR code URL
    specialRequests: String,
}, { timestamps: true });

bookingSchema.index({ passengerID: 1 });
bookingSchema.index({ tripID: 1 });
bookingSchema.index({ vehicleID: 1 });
bookingSchema.index({ status: 1 });
bookingSchema.index({ bookingDate: 1 });
bookingSchema.index({ ticketNumber: 1 }, { unique: true });

export const Booking = mongoose.model("Booking", bookingSchema);
