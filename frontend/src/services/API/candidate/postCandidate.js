import { useCallback } from "react";
import axios from "axios";

export default function usePostCandidate() {
  return useCallback(async (data) => {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/candidate`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return res.data;
  }, []);
}
