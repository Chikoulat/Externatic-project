import { useCallback } from "react";
import axios from "axios";

export default function useUpdateCompany() {
  return useCallback(async (company, data) => {
    const formatDateString = (dateString) => {
      const date = new Date(dateString);
      return date.toISOString().slice(0, 10);
    };
    const token = localStorage.getItem("token");
    const updatedData = {
      name: company.name,
      image: data.image,
      description: company.description,
      website: company.website,
      establishmentDate: formatDateString(company.establishmentDate),
    };
    const res = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/company`,
      updatedData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  }, []);
}
