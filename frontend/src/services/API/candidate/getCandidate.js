import axios from "axios";

export default async function getCandidate(token, setType, setUser) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/candidate/`,
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
    console.error("Error fetching candidate data:", error);
    throw error;
  }
}
