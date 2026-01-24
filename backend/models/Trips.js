import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
    {
        origin: String,
        destination: String,
        departureTime: Date,
        arrivalTime: Date,
        price: Number,
        availableSeats: Number,
        totalSeats: Number,
        vehicleID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle",
        },
        driverID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        tripStatus: {
            type: String,
            enum: ["scheduled", "ongoing", "completed", "cancelled", "delayed"],
            default: "scheduled",
        },
        stationID: String,
        routePoints: [String], // ["Bahir Dar", "Debre Tabor", "Addis Ababa"]
        estimatedDuration: Number, // minutes
        notes: String,
    },
    { timestamps: true }
);

export default mongoose.model("Trip", tripSchema);
