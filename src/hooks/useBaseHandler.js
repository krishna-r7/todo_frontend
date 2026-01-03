
import TodoServices from "@/services/TodoServices";
import { handleResponse } from '@/helpers/api/utils';


const useBaseHandler = () => {  

    const createTodo = async (data) => {
        try {
            const res = await TodoServices.createTodo(data);
            return handleResponse(res);
        } catch (err) {
            return handleResponse(err);
        }
    };

    const deleteTodo = async (id) => {
        try {
            const res = await TodoServices.deleteTodo(id);
            return handleResponse(res);
        } catch (err) {
            return handleResponse(err);
        }
    };

    const updateTodo = async (id, data) => {
        try {
            const res = await TodoServices.updateTodo(id, data);
            return handleResponse(res);
        } catch (err) {
            return handleResponse(err);
        }
    };
  


  
    return {
    createTodo,
    deleteTodo,
    updateTodo
    };
};
export default useBaseHandler;
