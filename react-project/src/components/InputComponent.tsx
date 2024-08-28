import { Form, Input, DatePicker, Select, Button } from "antd";
import "../Styeles/Input.scss";
import {AddTodo} from "../features/Todo"
import { useDispatch } from "react-redux";
import { Dispatch } from "../ReduxStore/store";

const { TextArea } = Input;
const { Option } = Select;

export default function InputComponent() {
    const dispatch = useDispatch<Dispatch>()
  const [form] = Form.useForm();

  const handleAddTodo = (e: any) => {
    const now = new Date;
    const AddDetails = {
        ...e,id:Math.random(),
        completed:false,
        createdAt:now.toDateString(),
        deleted:false,
        pending:false,
        dueDate:e.dueDate.toISOString(),


    }
    dispatch(AddTodo(AddDetails))
    form.resetFields();
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
        <DatePicker className="ant-picker" style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item name="time" label="time">
        <Input type="time" className="ant-input" placeholder="Enter title" />
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
