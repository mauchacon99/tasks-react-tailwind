import React , { useState }    from 'react';
import Header       from './Header'
import { PlusIcon } from '@heroicons/react/solid'
import useTask      from './../hooks/useTask'
import Row          from './Row';
import FormCreate from './FormCreate';
import FormEdit from './FormEdit';


const Table = prop => {
    
    const {state:task, handleRemove, updateTask, AddTask, updateTaskItem } = useTask([]);
    const InitalFormState = {
       id:'', title:'', role:'', status: ''
    }
    const [ userCurrent, setUserCurrent ] = useState(InitalFormState);

    const showFormEditTask = (data) =>{
        setEditing(true)
        setUserCurrent({
            id:data.id, title:data.title,role:data.role, status:data.status
        })
    } 
 
    const [ Editing, setEditing] = useState(false)
 
    return (
        <>
     
            <div className="div-center">
            <div className="flex flex-col">
                <div className="flex items-center justify-between py-2 bg-gray-50 my-1 border-b border-gray-200 sm:rounded-lg">
                   {Editing  ? <FormEdit userCurrent={userCurrent} setEditing={setEditing} updateTaskItem={updateTaskItem}/> : <FormCreate AddTask={AddTask} updateTaskItem={updateTaskItem} /> } 
                </div>
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-1">
                    <div className="  align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <Header  ></Header>
                            <Row task={task} handleRemove={handleRemove}   updateTask={updateTask} showFormEditTask={showFormEditTask}></Row>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        
       
        </>
    );
};
 

export default Table;