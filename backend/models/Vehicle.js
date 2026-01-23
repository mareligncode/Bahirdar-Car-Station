const vehicleSchema = new mongoose.Schema({
    plateNumber: { type: String, required: true, unique: true, trim: true },
    carType: {
        type: String,
        enum: ["coaster", "bus", "aba dulla", "minibus"],
        required: true
    },
    totalCapacity: { type: Number, required: true },
    currentStatus: {
        type: String,
        enum: ["active", "maintenance", "inactive", "on_trip"],
        default: "inactive"
    },
    driverID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    stationID: { type: mongoose.Schema.Types.ObjectId, ref: "Station", required: true },
    year: Number,
    color: String,
    insuranceExpiry: Date,
    maintenanceLog: [{ date: Date, description: String, cost: Number }],
}, { timestamps: true });

vehicleSchema.index({ plateNumber: 1 }, { unique: true });
vehicleSchema.index({ driverID: 1 });
vehicleSchema.index({ stationID: 1 });
vehicleSchema.index({ currentStatus: 1 });
vehicleSchema.index({ carType: 1 });

export const Vehicle = mongoose.model("Vehicle", vehicleSchema);
