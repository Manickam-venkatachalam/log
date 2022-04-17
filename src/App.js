import DateComponent from "./components/DateComponent";
import React ,{useState} from "react";
import {log} from "./api";
import { STRING_UNARY_OPERATORS } from "@babel/types";



    
function App() {
  const [values, setValues] = useState({
              starttime:"",
              endtime:"",
              description:"",
              error:"",
              success:false
  });
  const {starttime,endtime,description,error,success}= values

  const handleChange = name => event=>{
       setValues({...values,error:false,[name]:event.target.value})
  };
  
 const onSubmit = event =>{
    event.preventDefault()
    setValues({...values,error:false})
    log({starttime,endtime,description})
    .then(data=>{
      if(data){

        console.log(data)
        

      }
    })
    .catch(console.log("Error in signup"))
  }
  const logForm =()=>{
    
  
  return (
    <div class="antialiased bg-gray-100 ">
      <div class="flex  min-h-screen justify-center items-center">
        <div class="flex flex-col space-y-6  bg-cyan-700 max-w-4xl p-8 rounded-xl shadow-lg text-white ">
          <div class="flex flex-col  justify-between">
            <div>
              <h1 class="font-bold text-4xl tracking-wide">logging system</h1>
              <p class="pt-2 text-cyan-100 text-sm space-y-8">
                its a simple form with start time end time and with description
              </p>
            </div>
          </div>
          <div class="bg-white rounded-xl object-cover shadow-lg p-8 space-y-4 items-align-left ">
            <div class="flex  space-x-4">
              <DateComponent label="Start Time" onChange={handleChange("starttime")} type="datetime"value={starttime} />

              <DateComponent label="End Time" onChange={handleChange("endtime")} type="datetime" value={endtime}/>
            </div>
            <form action="" class="flex flex-col">
              <div className="flex-col space ">
                <label for="description" class="text-gray-700 text-sm" >
                  Description 
                </label>
                <textarea
                  placeholder="Message" 
                  rows="4" onChange={handleChange("description")} value={description} type="text" 
                  class="ring-1 rug-gray-300  rounded-md px-4 py-2 mt-2 text-black outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
                <button class="inline-block self-end bg-cyan-500 text-white font-bold rounded-lg px-6 py-2  space-x-5  item-align-right uppercase text-sm " onClick={onSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
    
  )};
  const successMessage = ()=>{
    return(
        <div>
            <p1>User created successfully  </p1>
        </div>
    );
}

const errorMessage = ()=>{
    return(
        <div className="alert alert-danger" style={{display:error?"":"none"}}>
            {error} 
             
        </div>
    );
}

return (<div>
    {logForm()}
</div>)

}



export default App;
