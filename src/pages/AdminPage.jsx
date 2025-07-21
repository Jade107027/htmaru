import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Button,
} from "@mui/material";

const AdminPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [editedPrices, setEditedPrices] = useState({});

  // 메뉴 불러오기
  useEffect(() => {
    axios.get("http://localhost:5050/api/menu")
      .then((res) => setMenuItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  // 가격 변경 저장
  const handleSave = (id) => {
    const updatedPrice = editedPrices[id];
    if (updatedPrice === undefined) return;

    axios.patch(`http://localhost:5050/api/menu/${id}`, {
      price: updatedPrice,
    })
    .then(() => {
      setMenuItems((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, price: updatedPrice } : item
        )
      );
      alert("가격이 저장되었습니다.");
    })
    .catch((err) => {
      console.error(err);
      alert("저장 실패");
    });
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        관리자 메뉴 관리
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>메뉴</TableCell>
            <TableCell>설명</TableCell>
            <TableCell>가격</TableCell>
            <TableCell>수정</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menuItems.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  size="small"
                  defaultValue={item.price}
                  onChange={(e) =>
                    setEditedPrices({
                      ...editedPrices,
                      [item._id]: Number(e.target.value),
                    })
                  }
                />
              </TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => handleSave(item._id)}>
                  저장
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default AdminPage;