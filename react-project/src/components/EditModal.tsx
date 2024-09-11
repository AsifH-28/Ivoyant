import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { UpdateTodo } from "../features/Todo";
import { Dispatch } from "../ReduxStore/store";
import { useFetch } from "./useFetch";

const { TextArea } = Input;
const { Option } = Select;
interface id {
  id: string;
}
const EditModal: React.FC<id> = ({ id }) => {
  const today = new Date().toISOString().split('T')[0];
  const { todo } = useFetch(id);

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch<Dispatch>();
  const [form] = Form.useForm();
  useEffect(() => {
    if (todo) {
      form.setFieldsValue({
        title: todo.title,
        description: todo.description,
        dueDate: todo.dueDate ? todo.dueDate.toISOString : null,
        priority: todo.priority,
      });
    } else {
      form.setFieldsValue({
        title: "",
        description: "",
        status: "",
        dueDate: "",
      });
    }
  }, [todo]);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    setOpen(false);
  };
  const handleAddTodo = (e: any) => {
    const now = new Date();
    const AddDetails = {
      ...e,
      id: id,
      completed: false,
      createdAt: now.toDateString(),
      deleted: false,
      pending: false,
      dueDate: e.dueDate,
    };
    dispatch(UpdateTodo(AddDetails));
    setOpen(false);
  };

  return (
    <>
      <Button type="default" onClick={showModal} icon={<EditOutlined />}>
        Edit
      </Button>
      <Modal
        open={open}
        onCancel={handleCancel}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
      >
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
            <Input
            type="Date"
              className="ant-picker"
              style={{ width: "100%" }}
              required
              min={today}
            />
          </Form.Item>

          <Form.Item
            name="priority"
            label="Priority"
            rules={[{ required: true, message: "Please select priority" }]}
          >
            <Select
              className="ant-select-selector"
              placeholder="Select priority"
            >
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
              Update Todo
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditModal;
