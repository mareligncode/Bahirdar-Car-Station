const notificationSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true },
    type: {
        type: String,
        enum: ["booking_confirmation", "trip_update", "payment_success", "admin_alert", "delay_notice"],
        required: true
    },
    channel: { type: String, enum: ["email", "sms", "in_app", "push"], required: true },
    status: { type: String, enum: ["sent", "failed", "pending", "read"], default: "pending" },
    metadata: Object,
    sentAt: Date,
    readAt: Date,
}, { timestamps: true });

notificationSchema.index({ userID: 1 });
notificationSchema.index({ type: 1 });
notificationSchema.index({ status: 1 });
notificationSchema.index({ createdAt: 1 });
notificationSchema.index({ channel: 1 });

export const Notification = mongoose.model("Notification", notificationSchema);
