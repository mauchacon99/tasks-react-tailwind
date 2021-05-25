import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const SimpleForm = () => {
      const [ formState, setFormState] = useState({
          name:"Mauricio",
          surname: "mauchacon99"
      })
      const { name, surname } = formState

    useEffect(() => {
        console.log("hey");
    }, [])

    const handleInputChange =  ({target}) => {
         setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    return (
        <>
            <div className="w-full max-w-xs center">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2"  >
                            Username
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            name="surname"
                            value={ surname }
                            id="username" 
                            type="text" 
                            placeholder="Username"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2"  >
                            
                            Name
                        </label>
                    <input value={ name }
                           className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                           id="name" 
                           name="name"
                           type="text"
                           onChange={handleInputChange}
                     />
                    <p className="text-red-500 text-xs italic"> Nombre completo</p>
                    </div>
                    <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SimpleForm;