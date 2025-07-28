import { doc, getDoc, setDoc, updateDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export const fetchMenuItem = async (type) => {
  try {
    const docRef = doc(db, "menu", type);
    const snapshot = await getDoc(docRef);
    return snapshot.exists() ? snapshot.data() : null;
  } catch (error) {
    console.error("메뉴 불러오기 실패:", error);
    return null;
  }
};

export const updateMenuItem = async (type, data) => {
  try {
    const docRef = doc(db, "menu", type);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      await updateDoc(docRef, data);
    } else {
      await setDoc(docRef, data); // 문서 없으면 새로 생성
    }

    await addDoc(collection(db, "menu_history"), {
      type,
      data,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("메뉴 업데이트 실패:", error);
    throw error;
  }
};