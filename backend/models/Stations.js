const stationSchema = new mongoose.Schema({
    stationCode: { type: String, 
        required: true, unique: true },
    stationName: { type: String,
         required: true },
    location: String,
    city: String,
    contactPhone: String,
    contactEmail: String,
    managerID: { type: mongoose.Schema.Types.ObjectId,
         ref: "User" },
    isActive: { type: Boolean, default: true },
    facilities: [String],
}, { timestamps: true });

stationSchema.index({ stationCode: 1 }, 
    { unique: true });
stationSchema.index({ city: 1 });
stationSchema.index({ managerID: 1 });
stationSchema.index({ isActive: 1 });

export const Station = mongoose.model("Station", stationSchema);
