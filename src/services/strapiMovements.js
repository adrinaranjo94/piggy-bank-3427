import axios from "axios";

const getMovements = () => axios.get("http://localhost:1337/movements");

const getMovementById = (id) =>
  axios.get(`http://localhost:1337/movements/${id}`);

const deleteMovementById = (id) =>
  axios.delete(`http://localhost:1337/movements/${id}`);

export { getMovements, getMovementById, deleteMovementById };
