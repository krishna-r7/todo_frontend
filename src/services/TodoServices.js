import requests from "./httpService";

const TodoServices = {
  getTodos: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    const url = `/todo/getTodos?${query}`;
    return requests.get(url);

  },
  createTodo: async (body) => {
    return requests.post('/todo/createTodo', body);
  },
  updateTodo: async (id, body) => {
    return requests.put(`/todo/updateTodo/${id}`, body);
  },
  deleteTodo: async (id) => {
    return requests.delete(`/todo/deleteTodo/${id}`);
  },
}
export default TodoServices;
