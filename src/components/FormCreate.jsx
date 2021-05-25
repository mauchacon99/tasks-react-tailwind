import React from 'react';
  
const FormCreate = ({AddTask}) => {

  const handleSubmit = (e) => {
    
    if(e.target.task.value.length > 0 && e.target.role.value !== 'null'){
        let data = {title: e.target.task.value, role:e.target.role.value, status: false  }
        AddTask(data)
        e.target.reset()
    }
    e.preventDefault()
    
  }

    return (
            <form onSubmit={handleSubmit} className="flex flex-wrap w-full" > 
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"  >
                    Descritpion
                </label>
                <input   className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded p-2 leading-tight " name="task" type="text" placeholder=" Add Task"/>
                </div>
                <div className="w-full md:w-1/4 px-2 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"  >
                        Rol
                    </label>
                    <div className="relative">
                        <select  className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 p-2 pr-8 rounded leading-tight  " name="role" id="role">
                            <option  value="null" > Select  </option>
                            <option  value="Design">Design  </option>
                            <option  value="Back-end">Back-end</option>
                            <option  value="Front-end">Front-end</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/5 px-2 mb-9 md:mb-0 ">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-6">
                            
                        </label>
                        <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">
                        Add  
                    </button>
                </div>
            </form>
    );
};


export default FormCreate;