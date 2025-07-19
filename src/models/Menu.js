// models/Menu.js
import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },        // 예: 삼겹살
  description: { type: String },                 // 예: 신선한 국내산 삼겹살
  price: { type: Number, required: true },       // 예: 13800
  imageUrl: { type: String },                    // 예: /uploads/samgyeopsal.jpg
  category: { type: String, enum: ['고기뷔페', '브런치'], required: true }, // 카테고리 선택
  createdAt: { type: Date, default: Date.now },
});

const Menu = mongoose.model('Menu', menuSchema);
export default Menu;