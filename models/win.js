const mongoose = require('mongoose');

//Make a Schema
const winSchema = new mongoose.Schema({
     field1: { type: String, required: true }, 
     field2: { type: String, required: true }, 
     field3: { type: Number, required: true }, 
     field4: { type: String, required: true },      
     field5: { type: String, required: true }, 
     field6: { type: String, required: true }, 
     field7: { type: String, required: true }
}, {timestamps: true}
 );
//Make a Model from the Schema
//the Frut model allows us to use the CRUD Create Read Update Destroy in the app

const Win = mongoose.model('Strain', winSchema);
//making a fruits collection

//Export the Model for Use in the App
module.exports=Win;