import mongoose from "mongoose";

const maintenanceSchema = new mongoose.Schema({
    date: Date,
    description: String,
    cost: Number,
});

const vehicleSchema = new mongoose.Schema(
    {
        plateNumber: { type: String, required: true, unique: true },
        carType: {
            type: String,
            enum: ["coaster", "bus", "aba dulla", "minibus"],
        },
        totalCapacity: Number,
        currentStatus: {
            type: String,
            enum: ["active", "maintenance", "inactive", "on_trip"],
            default: "active",
        },
        driverID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        stationID: String,
        year: Number,
        color: String,
        insuranceExpiry: Date,
        maintenanceLog: [maintenanceSchema],
    },
    { timestamps: true }
);

export default mongoose.model("Vehicle", vehicleSchema);
