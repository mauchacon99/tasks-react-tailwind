import React from 'react';
// import PropTypes from 'prop-types';

const Header = props => {
    return (
        <thead className="bg-gray-50">
                <tr>
                <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                    Tarea
                </th>
                <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                    Status
                </th>
                <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                    Rol
                </th>
                <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only"> </span>
                </th>
                </tr>
            </thead>
    );
};

 

export default Header;