export interface Todo {
    id: string;                
    title: string;              
    description?: string;       
    completed: boolean;         
    createdAt: Date;           
    dueDate?: Date;             
    priority?: 'low' | 'medium' | 'high';           
    deleted?: boolean;
    pending?:boolean;         
  }
 
  
