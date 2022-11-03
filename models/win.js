const mongoose = require('mongoose');
const tidy = require('../ulilities/tidy');

//Make a Schema
const winSchema = new mongoose.Schema({
     success: { type: String, required: true  }, 
     satisfaction: Boolean, 
     challenge: Boolean, 
     firstWin: Boolean,      
     longTerm: Boolean, 
     gratitude: Boolean, 
     comments: { type: String, required: false }
}, 
{timestamps: true}
 );
//Make a Model from the Schema
//the Frut model allows us to use the CRUD Create Read Update Destroy in the app

const Win = mongoose.model('win', winSchema);
//making a fruits collection

//Export the Model for Use in the App
module.exports=Win;