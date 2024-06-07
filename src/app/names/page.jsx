"use client"

import TableContent from '@/components/TableContent';
import { useNameContext } from '@/contexts/NameContext';


const Names = () => {
  const { nameArray } = useNameContext();

  

  return (
    <div className="w-full md:w-[50%] mx-auto my-10">
      <div className="relative overflow-x-hidden overflow-auto md:h-[30vh] shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
          
            </tr>
          </thead>
          <tbody>
            {nameArray.length === 0 ? (
              <tr>
                <td colSpan="2" className="text-center py-4 text-gray-700 dark:text-gray-300">
                  No data found
                </td>
              </tr>
            ) : (
              nameArray.map((personName, index) => (
                <TableContent key={index} Name={personName} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Names;
