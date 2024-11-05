import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  totalSeats: {
    type: Number,
    required: true,
  },
  remainingSeats: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Event", eventSchema);
