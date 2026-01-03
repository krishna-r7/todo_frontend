import { Form, Input, Button, Card } from "antd";
import useBaseHandler from "@/hooks/useBaseHandler";

export default function TodoForm({ refresh }) {
  const [form] = Form.useForm();
  const { createTodo } = useBaseHandler();

  const onFinish = async (values) => {
    await createTodo(values);
    form.resetFields();
    refresh();
  };

  return (
    <Card
      title="➕ Add Todo"
      bordered={false}
      style={{
        borderRadius: 12,
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
      }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Title is required" }]}
        >
          <Input placeholder="Enter todo title" />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <Input.TextArea
            rows={4}
            placeholder="Optional description"
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          block
        >
          Add Todo
        </Button>
      </Form>
    </Card>
  );
}
