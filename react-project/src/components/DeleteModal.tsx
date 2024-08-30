import React, { ReactNode } from 'react';
import Icon, { DeleteFilled, DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { useDispatch } from 'react-redux';
import {DeleteTodo} from "../features/Todo"
import { Dispatch } from '../ReduxStore/store';

const { confirm } = Modal;

const showConfirm = (id:string,cb:Dispatch) => {
   
  confirm({
    title: 'Do you want to delete this Todo?',
    icon: <ExclamationCircleFilled />,
    content: 'Think Once Again',
    onOk() {
        cb(DeleteTodo(id));
      
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};




interface Custom{
    id: string
}

const DeleteModal: React.FC<Custom> = ({id})=>{
    const dispatch = useDispatch()
   return (
        <Space wrap>
          <Button onClick={()=>{
              showConfirm(id,dispatch)
          }} icon={<DeleteOutlined />}>Delete</Button>
        </Space>
      );
    
} 

export default DeleteModal;