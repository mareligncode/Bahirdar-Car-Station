import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        amount: Number,
        currency: { type: String, default: "ETB" },
        paymentGateway: {
            type: String,
            enum: ["chapa", "telebirr", "cbe_birr", "cash"],
        },
        transactionID: String,
        paymentStatus: {
            type: String,
            enum: ["pending", "success", "failed", "refunded"],
            default: "pending",
        },
        paymentDate: Date,
        refundDate: Date,
        gatewayResponse: Object,
        receiptURL: String,
    },
    { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
