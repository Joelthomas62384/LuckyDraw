"use client"

import { useNameContext } from "@/contexts/NameContext";
import { useRef, useState } from "react";




export default function Home() {
  const {setNames,setUseToast ,setToastMessage,nameArray} = useNameContext()
  const [text, setText] = useState('')
  const textRef = useRef()
  const handleOnChange = ()=>{
    setText(textRef.current.value)
  }
  const submitHandle = ()=>{
    if(text!==''){
      setUseToast(true)
      setToastMessage("Names submitted successfully!!1")
      setNames(text.split(','))
      // console.log(nameArray)
      textRef.current.value= ''
      


    }
  }
  return (
   <div className="w-full md:w-[50%] mx-auto">
    

   <div className="w-full mx-auto mt-24 mb-4 border border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-900">
       <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-900">
           <label for="comment" className="sr-only">Your comment</label>
           <textarea id="comment" ref={textRef} onChange={handleOnChange} rows="10" cols={10}  className="w-full md:max-w-[100%] px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-900 focus:outline-none dark:text-white dark:placeholder-gray-400" placeholder="Write the names separated with a  ' , '" required ></textarea>

       </div>
       <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-900">
           <button type="submit" onClick={submitHandle} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Add Names
           </button>
         
       </div>
   </div>

   </div>
  );
}
