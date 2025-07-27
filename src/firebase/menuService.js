import { doc, getDoc, updateDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export const fetchMenuItem = async (type) => {
  const docRef = doc(db, "menu", type); // 'weekend' or 'weekday'
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? snapshot.data() : null;
};

export const updateMenuItem = async (type, data) => {
  const docRef = doc(db, "menu", type);
  await updateDoc(docRef, data);

  // 기록 남기기
  await addDoc(collection(db, "menu_history"), {
    type,               // 주말 or 주중
    data,               // 변경된 메뉴 데이터
    updatedAt: serverTimestamp() // 서버 타임스탬프
  });
};