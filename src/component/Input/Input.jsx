import React from 'react'

const Input = () => {
  
    const handleSubmission = (e)=>{
            e.preventDefault();
    }
    return (
    <div>
    <form onSubmit={()=>handleSubmission}>
        <input placeholder='enter name'/>
        <input placeholder='enter task'/>
        <button type='submit'>Add Task</button>
    </form>
    </div>
  )
}

export default Input
