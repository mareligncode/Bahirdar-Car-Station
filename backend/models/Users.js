import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false, // security best practice
    },

    role: {
      type: String,
      enum: ["passenger", "driver", "station_admin", "super_admin"],
      required: true,
      index: true,
      default:"passanger"
    },

    emergencyContact: {
      type: String,
      default: null,
    },

    licenseNumber: {
      type: String,
      default: null,
    },

    stationID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Station",
      default: null,
      index: true,
    },

    profileImage: {
      type: String,
      default: null,
    },
refreshToken: {
  type: String,
},

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  { timestamps: true }
);


userSchema.index({ role: 1, isActive: 1 });
export default mongoose.model("User", userSchema);
