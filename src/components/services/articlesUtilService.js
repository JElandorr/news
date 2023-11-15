import * as api from "./apiService.js";

const baseUrl = "http://localhost:3030";

export const getAll = async () => await api.requester(`${baseUrl}/data/articles?sortBy=_createdOn%20desc`, "get");

export const getOne = async (id) => await api.requester(`${baseUrl}/data/articles/${id}`, "get");

export const create = async (data) => await api.requester(`${baseUrl}/data/articles`, "post", data);

export const update = async (id, data) => await api.requester(`${baseUrl}/data/articles/${id}`, "put", data);

export const del = async (id) => await api.requester(`${baseUrl}/data/articles/${id}`, "delete");
