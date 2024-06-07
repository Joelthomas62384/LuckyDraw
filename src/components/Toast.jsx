"use client";

import { useNameContext } from '@/contexts/NameContext';
import React, { useEffect, useState } from 'react';

const Toast = () => {
  const { useToast, setUseToast, toastMessage } = useNameContext();
  const [progress, setProgress] = useState(100); // Progress bar starts at 100%

  const handleClose = () => {
    setUseToast(false);
  };

  useEffect(() => {
    if (useToast) {
      setProgress(100); // Reset progress when toast is shown

      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev <= 0) {
            clearInterval(progressInterval);
            return 0;
          }
          return prev - 1; // Decrease the progress
        });
      }, 30); // Adjust interval duration as needed

      const timer = setTimeout(() => {
        handleClose();
      }, 3000); // 5000 ms = 5 seconds

      // Clean up the timer and interval
      return () => {
        clearTimeout(timer);
        clearInterval(progressInterval);
      };
    }
  }, [useToast]);

  return (
    <>
      {useToast && (
        <div
          id="toast-success"
          className=" absolute top-20 right-10 flex items-center justify-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">{toastMessage}</div>
          <button
            type="button"
            onClick={handleClose}
            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 h-1 bg-green-500" style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}></div>
        </div>
      )}
    </>
  );
};

export default Toast;
