import * as api from "./apiService.js";

const baseUrl = "http://localhost:3030/users";

export const login = async (data) =>
  await api.requester(`${baseUrl}/login`, "post", data);

export const register = async (data) =>
  await api.requester(`${baseUrl}/register`, "post", data);

export const logout = async () =>
  await api.requester(`${baseUrl}/logout`, "get");

export const getUser = async () =>
    await api.requester(`${baseUrl}/me`, "get");
    