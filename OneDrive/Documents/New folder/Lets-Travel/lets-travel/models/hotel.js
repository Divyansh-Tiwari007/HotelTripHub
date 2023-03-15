const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  hotel_name: {
    type: String,
    required: 'Hotel name is required',
    max:32,
    trim: true
  },
  hotel_description: {
    type:String,
    required: 'Hotel description is required',
    trim: true
  },
  
  image: String,
  Star_rating: {
    type:Number,
    required: 'Hotel Rating is required',
    max: 5
  },

  country: {
    type:String,
    required: 'Country is required',
    trim: true
  },

  costt_per_night: {
    type:Number,
    required: 'Cost per night is required',
  },

  available: {
    type:Boolean,
    required: 'Availability is required',
  }
});

//export model
module.exports= mongoose.model|('Hotel',hotetlSchema);