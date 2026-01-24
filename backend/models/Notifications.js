import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        message: { type: String, required: true },
        type: {
            type: String,
            enum: [
                "booking_confirmation",
                "trip_update",
                "payment_success",
                "admin_alert",
                "delay_notice",
            ],
        },
        channel: {
            type: String,
            enum: ["email", "sms", "in_app", "push"],
        },
        status: {
            type: String,
            enum: ["sent", "failed", "pending", "read"],
            default: "pending",
        },
        metadata: Object, // tripID, bookingID, etc.
        sentAt: Date,
        readAt: Date,
    },
    { timestamps: true }
);

export default mongoose.model("Notification", notificationSchema);
