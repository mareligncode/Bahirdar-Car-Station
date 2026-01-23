const paymentSchema = new mongoose.Schema({
    bookingID: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true },
    passengerID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    currency: { type: String, default: "ETB" },
    paymentGateway: { type: String, enum: ["chapa", "telebirr", "cbe_birr", "cash"], required: true },
    transactionID: { type: String, unique: true, required: true },
    paymentStatus: { type: String, enum: ["pending", "success", "failed", "refunded"], default: "pending" },
    paymentDate: { type: Date, default: Date.now },
    refundDate: Date,
    gatewayResponse: Object,
    receiptURL: String,
}, { timestamps: true });

paymentSchema.index({ bookingID: 1 }, { unique: true }); // for successful payments
paymentSchema.index({ transactionID: 1 }, { unique: true });
paymentSchema.index({ passengerID: 1 });
paymentSchema.index({ paymentStatus: 1 });
paymentSchema.index({ paymentDate: 1 });

export const Payment = mongoose.model("Payment", paymentSchema);
