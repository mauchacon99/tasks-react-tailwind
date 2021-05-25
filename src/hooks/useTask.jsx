import { useState } from "react";
import { v4 as id } from 'uuid';
 
const useTask = () => {

    
    const Tasks = [
        {
            id:id(),
            title: 'Migrar base de datos',
            role: 'Design',
            status:false,
          },
         {
            id:id(),
            title: 'Reparar Login',
            role: 'Front-end',
            status:false,
         },
      ]
    
      const [ state, setState ] = useState(Tasks)

      const handleRemove = item => {
         setState(task  => task.filter(e => e.id !== item.id ))
      };

      const updateTask = item => {
         setState(task  => task.map(e => e.id === item.id ? {...e, status:!e.status }: e))
      };
      
      const updateTaskItem  = item => {
       
         setState(task  => task.map(e => e.id === item.id ? item : e))
      };

      const AddTask = data => {
         data.id = id()
         setState([...state, data])
      };

   

     return {
        handleRemove,
        state,
        updateTask,
        AddTask, 
        updateTaskItem
     }
};

export default useTask;