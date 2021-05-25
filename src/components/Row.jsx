import React  from 'react';
import { PencilIcon, CheckIcon, TrashIcon, XIcon } from '@heroicons/react/solid'
const Row = ({task, handleRemove, showFormEditTask, updateTask}) => {
     
      return (
            <tbody className="bg-white divide-y divide-gray-200">
            {
                task.map((item) => (
                    <tr key={item.id} className="text-gray-200">
                         
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{ item.title }</div>
                            <div className="text-sm text-gray-500 font-bold ">{ item.department }</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className={"px-2 inline-flex text-xs leading-5 font-semibold rounded-full " + (item.status ? " text-green-600 bg-green-100 " : " text-blue-600 bg-blue-100")+ " "}>
                                { item.status ?  'Verified' : 'Pending ' }
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 "> { item.role } </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-sm font-thin	">

                            {!item.status &&
                                <>
                                    <button onClick={() => { showFormEditTask(item)}}    className={(item.status  ? " bg-gray-400" : " bg-blue-500 hover:bg-blue-700 ") +"  mx-1 text-white  rounded-full"}>
                                        <PencilIcon className="h-5.5 w-7 p-1 text-gray-50"/>
                                    </button>

                                    <button  onClick={() => { handleRemove(item)}}   className={(item.status? " bg-gray-400" : " bg-red-500 hover:bg-red-700 ") +"  mx-1 text-white rounded-full"}>
                                    <TrashIcon className="h-5.5 w-7 p-1 text-gray-50"/>
                                    </button> 
                                </>
                            }

                            <button  onClick={() => { updateTask(item)}}
                                        className={(item.status ? "bg-gray-400 hover:bg-gray-700": "bg-green-500 hover:bg-green-700 ")+"  mx-1 text-white rounded-full"}>
                                { item.status ?<XIcon className="h-5.5 w-7 p-0.5 text-gray-50"/> : <CheckIcon className="h-5.5 w-7 p-0.5 text-gray-50"/>  } 
                            </button>
                             
                            
                        </td>
                    </tr>
                ))
            }
        </tbody>
        
      )
       
};

 

export default Row;