import React from 'react';
import { Empty, } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 300px;
  background-color: transparent; /* Set background to transparent */
  padding: 20px;
  border-radius: 8px;
`;

const Message = styled.div`
  text-align: center;
  color: #595959; /* Grey text color */
  font-size: 1.2em;
`;
interface msg{
    message:string

}


const EmptyState: React.FC<msg> = (message) => {
    
  return (
    <Container>
      <Message>
        <Empty
          description={`${message.message}`}
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
        <p>Please add some tasks to get started!</p>
      </Message>
    </Container>
  );
};

export default EmptyState;
