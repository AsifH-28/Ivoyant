import { Form, Input, Select, Button } from "antd";
import "../Styeles/Input.scss";
import { AddTodo } from "../features/Todo";
import { useDispatch } from "react-redux";
import { Dispatch } from "../ReduxStore/store";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;
const { Option } = Select;

export default function InputComponent() {
  const today = new Date().toISOString().split('T')[0];
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const openNotification = (Title: string) => {
    notification.open({
      message: `${Title}`,
      description: "Above Todo is Added click to see",
      onClick: () => {
        navigate("all-tasks");
      },
    });
  };

  const handleAddTodo = (e: any) => {
    const now = new Date();
    const AddDetails = {
      ...e,
      id: Math.random() + 1,
      completed: false,
      createdAt: now.toDateString(),
      deleted: false,
      pending: false,
      dueDate: e.dueDate as Date,
    };
    dispatch(AddTodo(AddDetails));
    form.resetFields();

    openNotification(e.title);
  };
  return (
    <Form
      form={form}
      onFinish={handleAddTodo}
      layout="vertical"
      style={{ maxWidth: "400px", margin: "0 auto" }}
      className="todo-form"
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Please enter the title" }]}
      >
        <Input className="ant-input" placeholder="Enter title" />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <TextArea
          className="ant-input"
          placeholder="Enter description (optional)"
          rows={4}
        />
      </Form.Item>

      <Form.Item name="dueDate" label="Due Date">
        <Input type="date" className="ant-picker" style={{ width: "100%" }} min={today} />
      </Form.Item>

      <Form.Item
        name="priority"
        label="Priority"
        rules={[{ required: true, message: "Please select priority" }]}
      >
        <Select className="ant-select-selector" placeholder="Select priority">
          <Option value="low">Low</Option>
          <Option value="medium">Medium</Option>
          <Option value="high">High</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button
          className="ant-btn-primary"
          type="primary"
          htmlType="submit"
          block
        >
          Add Todo
        </Button>
      </Form.Item>
    </Form>
  );
}
