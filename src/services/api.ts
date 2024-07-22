import { User } from "./User";

export const fetchData = async (): Promise<User[]> => {
  const response = await fetch(
    "https://669e3eb09a1bda368005f8d9.mockapi.io/users"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
