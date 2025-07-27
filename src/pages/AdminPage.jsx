import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import { fetchMenuItem, updateMenuItem } from "../firebase/menuService";

const menuTypes = [
  { label: "주말", key: "weekend" },
  { label: "주중", key: "weekday" },
];

const AdminPage = () => {
  const [menuData, setMenuData] = useState({
    weekend: { desc: "", time: "", additional: "", price: "" },
    weekday: { desc: "", time: "", additional: "", price: "" },
  });

  useEffect(() => {
    const fetchData = async () => {
      for (let type of menuTypes) {
        const data = await fetchMenuItem(type.key);
        if (data) {
          setMenuData((prev) => ({ ...prev, [type.key]: data }));
        }
      }
    };
    fetchData();
  }, []);

  const handleChange = (key, field, value) => {
    setMenuData((prev) => ({
      ...prev,
      [key]: { ...prev[key], [field]: value },
    }));
  };

  const handleSave = async (key) => {
    try {
      await updateMenuItem(key, menuData[key]);
      alert(`${key === "weekend" ? "주말" : "주중"} 정보가 저장되었습니다.`);
    } catch (err) {
      console.error(err);
      alert("저장 실패");
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        고기뷔페 정보 수정
      </Typography>

      <Stack spacing={4}>
        {menuTypes.map(({ label, key }) => (
          <Paper key={key} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {label}
            </Typography>

            <TextField
              label="설명 (desc)"
              multiline
              minRows={3}
              fullWidth
              value={menuData[key].desc}
              onChange={(e) => handleChange(key, "desc", e.target.value)}
              sx={{ mb: 2 }}
            />

            <TextField
              label="시간 (time)"
              multiline
              minRows={2}
              fullWidth
              value={menuData[key].time}
              onChange={(e) => handleChange(key, "time", e.target.value)}
              sx={{ mb: 2 }}
            />

            <TextField
              label="추가 정보 (additional)"
              multiline
              minRows={2}
              fullWidth
              value={menuData[key].additional}
              onChange={(e) => handleChange(key, "additional", e.target.value)}
              sx={{ mb: 2 }}
            />

            <TextField
              label="가격 (price)"
              fullWidth
              value={menuData[key].price}
              onChange={(e) => handleChange(key, "price", e.target.value)}
              sx={{ mb: 2 }}
            />

            <Button variant="contained" onClick={() => handleSave(key)}>
              저장
            </Button>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default AdminPage;