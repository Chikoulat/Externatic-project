import { useCallback } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

export default function useLogin() {
  const { setAuth } = useOutletContext();
  return useCallback(async (credentials) => {
    if (!credentials || typeof credentials !== "object") {
      throw new Error("Missing credentials");
    }
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/login`,
      credentials,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    localStorage.setItem("token", res.data.token);
    setAuth(res.data);
    return res.data;
  }, []);
}
