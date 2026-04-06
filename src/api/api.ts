import axios from "axios";

const API_BASE = "https://api.anywheretrips.in/v1";
const API_KEY = "urWQuAoOFwN2FeQGyXZys5eZzSOWYA9G";

const axiosInstance = axios.create({
  baseURL: API_BASE,
  headers: {
    "x-api-key": API_KEY,
    "Content-Type": "application/json",
  },
});

export const signupUser = async (username: string, password: string) => {
  const response = await axiosInstance.post("/users/create", {
    username,
    password,
  });
  return response.data;
};

export const loginUser = async (username: string, password: string) => {
  const response = await axiosInstance.post("/users/auth/login", {
    username,
    password,
  });
  return response.data;
};

export const getUserProfile = async (token: string) => {
  const response = await axiosInstance.get("/users/me/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const uploadProfilePicture = async (token: string, file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axiosInstance.post(
    "/users/me/upload-profile-picture",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data.data;
};

export const removeProfilePicture = async (token: string) => {
  const response = await axiosInstance.delete(
    "/users/me/remove-profile-picture",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
