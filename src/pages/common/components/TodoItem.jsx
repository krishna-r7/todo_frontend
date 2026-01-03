import { Card, Select, Button, Popconfirm } from "antd";
import TodoServices from "@/services/TodoServices";
import useBaseHandler from "@/hooks/useBaseHandler";

const { updateTodo, deleteTodo } = TodoServices;

export default function TodoItem({ todo, refresh }) {

  const {  deleteTodo } = useBaseHandler();

  const changeStatus = async (status, id) => {
    await updateTodo(id, { status });
    refresh();
  };

  const removeTodo = async (id) => {
    await deleteTodo(id);
    refresh();
  };

  return (
    <Card className="bg-white w-full" style={{ marginBottom: 12 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 16,
        }}
      >
        {/* LEFT SECTION */}
        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: 4 }}>{todo.title}</h3>
          <p style={{ color: "#666", marginBottom: 0 }}>
            {todo.description || "No description"}
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 8,
          }}
        >
          <Popconfirm
            title="Delete this todo?"
            onConfirm={() => removeTodo(todo._id)}
          >
            <Button danger size="medium">
              Delete
            </Button>
          </Popconfirm>

          <Select
            value={todo.status}
            onChange={(value) => changeStatus(value, todo._id)}
            style={{ width: 160 }}
            size="medium"
          >
            <Select.Option value="Pending">Pending</Select.Option>
            <Select.Option value="In-Progress">In-Progress</Select.Option>
            <Select.Option value="Completed">Completed</Select.Option>
          </Select>
        </div>
      </div>
    </Card>
  );
}
