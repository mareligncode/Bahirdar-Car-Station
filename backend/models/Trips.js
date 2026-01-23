const tripSchema = new mongoose.Schema({
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    price: { type: Number, required: true },
    availableSeats: { type: Number, required: true },
    totalSeats: { type: Number, required: true },
    vehicleID: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle", required: true },
    driverID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tripStatus: {
        type: String,
        enum: ["scheduled", "ongoing", "completed", "cancelled", "delayed"],
        default: "scheduled"
    },
    stationID: { type: mongoose.Schema.Types.ObjectId, ref: "Station", required: true },
    routePoints: [String],
    estimatedDuration: Number, // in minutes
    notes: String,
}, { timestamps: true });

tripSchema.index({ vehicleID: 1 });
tripSchema.index({ driverID: 1 });
tripSchema.index({ departureTime: 1 });
tripSchema.index({ origin: 1 });
tripSchema.index({ destination: 1 });
tripSchema.index({ tripStatus: 1 });
tripSchema.index({ stationID: 1 });

export const Trip = mongoose.model("Trip", tripSchema);
