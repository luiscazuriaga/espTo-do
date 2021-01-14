import { ADD_TASK, DELETE_TASK } from "./actionsType.js";

export const addTask = (values: object) => ({ type: ADD_TASK, value: values })

export const deleteTask = (values: object) => ({ type: DELETE_TASK, value: values })

