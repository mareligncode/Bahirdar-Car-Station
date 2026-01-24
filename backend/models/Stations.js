import mongoose from "mongoose";

const stationSchema = new mongoose.Schema(
    {
        stationCode: { type: String, required: true, unique: true }, // "BD-STATION-01"
        stationName: { type: String, required: true },
        location: String,
        city: String,
        contactPhone: String,
        contactEmail: String,
        managerID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        isActive: { type: Boolean, default: true },
        facilities: [String], // ["waiting_area", "cafeteria", "restrooms"]
    },
    { timestamps: true }
);

export default mongoose.model("Station", stationSchema);
