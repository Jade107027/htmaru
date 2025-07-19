// routes/menuRoutes.js
import express from 'express';
import Menu from '../models/Menu.js';

const router = express.Router();

// 전체 메뉴 조회
router.get('/', async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ error: '서버 오류: 메뉴를 불러올 수 없습니다.' });
  }
});

// 단일 카테고리 메뉴 조회 (예: 고기뷔페 or 브런치)
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const items = await Menu.find({ category });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: '카테고리별 메뉴 조회 실패' });
  }
});

// 메뉴 추가 (관리자용)
router.post('/', async (req, res) => {
  try {
    const newItem = new Menu(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: '메뉴 추가 실패' });
  }
});

// 메뉴 수정
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Menu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: '메뉴 수정 실패' });
  }
});

// 메뉴 삭제
router.delete('/:id', async (req, res) => {
  try {
    await Menu.findByIdAndDelete(req.params.id);
    res.json({ message: '삭제 완료' });
  } catch (err) {
    res.status(400).json({ error: '삭제 실패' });
  }
});

export default router;