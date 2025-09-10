const API = process.env.REACT_APP_API_URL || "http://localhost:4000/api"; // fallback opcional

export async function fetchModels3D() {
  const res = await fetch(`${API}/`);
  if (!res.ok) throw new Error("API error");
  return res.json();
}