import { useCallback } from "react";
import axios from "axios";

export default function usePostExperience() {
  return useCallback(async (data) => {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/experience`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return res.data;
  }, []);
}
