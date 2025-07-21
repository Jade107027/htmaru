import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },        
  description: { type: String },             
  price: { type: Number, required: true },       
  imageUrl: { type: String },                   
  category: { type: String, enum: ['고기뷔페', '브런치'], required: true }, 
  createdAt: { type: Date, default: Date.now },
});

const Menu = mongoose.model('Menu', menuSchema);
export default Menu;