import axios from "axios";
import config from "../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/regions`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const getById = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/regions/${id}`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/regions/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/regions`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const update = async (id, payload) => {
  try {
    const result = await axios.put(`${config.domain}/regions/${id}`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const functionAll = {
  list,
  deleted,
  create,
  update,
  getById,
};

export default functionAll;
