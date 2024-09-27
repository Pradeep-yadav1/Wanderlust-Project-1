const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description:{
    type: String,
  },
  image: {
    type : String,
    default:"https://unsplash.com/photos/a-person-standing-on-a-cliff-overlooking-the-ocean-CCl0a7sMXik",
    set : (v) => v === ""? "https://unsplash.com/photos/a-person-standing-on-a-cliff-overlooking-the-ocean-CCl0a7sMXik" : v
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
