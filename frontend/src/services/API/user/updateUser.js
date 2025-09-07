import { useCallback } from "react";
import axios from "axios";

export default function useUpdateUser() {
  return useCallback(async (data, user) => {
    const token = localStorage.getItem("token");
    const updatedData = {
      email: data.email || user.email,
      password: data.password || user.password,
      contactNumber: data.contact_number || user.contact_number,
      smsNotificationActive: data.smsNotificationActive || false,
      emailNotificationActive: data.emailNotificationActive || false,
      image: data.image || user.image,
    };
    const res = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/user`,
      updatedData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  }, []);
}
