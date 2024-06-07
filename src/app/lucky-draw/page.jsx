"use client"
import { useNameContext } from '@/contexts/NameContext';
import React, { useEffect, useRef, useState } from 'react';


const LuckyDraw = () => {
    const [text, setText] = useState("Name will come here...");
    const [loading, setLoading] = useState(false);
    const [winner, setWinner] = useState('')
    const {nameArray,setNameArray, winners,addWinner} = useNameContext()
    const pRef = useRef()

    useEffect( () => {
        const winnerIndex =Math.floor(Math.random() * nameArray.length)
        const win = nameArray[winnerIndex]
         setWinner(win)
        
        
    }, [])
    
    

    
    const handleClick = () => {
        const winnerIndex = Math.floor(Math.random() * nameArray.length); // Get a random index
        const selectedWinner = nameArray[winnerIndex]; // Get the winner from the nameArray
       
        addWinner(selectedWinner)
    
        // Set the winner and loading state
        setWinner(selectedWinner);
        setLoading(true);
    
        let index = 0;
        const interval = setInterval(() => {
            // Cycle through names in the array
            if (index < nameArray.length) {
                setText(nameArray[index]);
                index++;
            } else {
                index = 0;
            }
        }, 100);
    
        // Timeout to clear interval and update the state after 6 seconds
        setTimeout(() => {
            clearInterval(interval);
            setText(`${selectedWinner} is the winner`);
    
            // Remove the winner from the nameArray
            const updatedNameArray = nameArray.filter((_, i) => i !== winnerIndex);
          
    
            // Update nameArray without the winner
            setNameArray(updatedNameArray);
    
            // Reset loading and winner state
            setLoading(false);
            setWinner('');
        }, 6000); // Declare winner after 6 seconds
    };
    
    return (
        <div className="w-full md:w-[80%] mx-auto my-10">
            <div className="flex flex-col items-center justify-center">
                <div className="w-[40%] h-[50%] border border-white p-4">
                    <div className="text-white text-center">
                        <p ref={pRef}>{text}</p>
                    </div>
                </div>
                <button
                    disabled={loading}
                    onClick={handleClick}
                    type="button"
                    className="mt-6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    {loading ? (
                        <>
                            <svg
                                aria-hidden="true"
                                role="status"
                                className="inline w-4 h-4 me-3 text-white animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor"
                                />
                            </svg>
                            Loading...
                        </>
                    ) : (
                        "Lucky Draw"
                    )}
                </button>
            </div>
        </div>
    );
};

export default LuckyDraw;
