import axios from "axios";

export default async function getCompany(token, setType, setUser) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/company/`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
    setUser(response.data[0]);
    setType(response.data[1]);
    return response.data;
  } catch (error) {
    console.error("Error fetching company data:", error);
    throw error;
  }
}
