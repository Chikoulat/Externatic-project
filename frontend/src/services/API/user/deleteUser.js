import { useCallback } from "react";
import axios from "axios";

export default function useDeleteUser() {
  return useCallback(async () => {
    const token = localStorage.getItem("token");
    const res = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  }, []);
}
