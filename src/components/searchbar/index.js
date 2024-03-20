import { Button } from 'antd'
import React, { useState } from 'react'
import { JobData } from '../../utilis/Items'

const SearchBar = () => {
    const [jobcriteria,setJobCriteria]=useState({
        title:"",
        location:"",
        experience:"",
        type:""
    })
    // const [filteredJobs, setFilteredJobs] = useState([]);
     const handleChange = (e)=>{
        setJobCriteria((preState)=>({
            ...preState,
            [e.target.name]: e.target.value
        }))
     }

    //  const handleSearch = () => {
    //     // Filter JobData based on the selected criteria
    //     const filteredJobs = JobData.filter(job =>
    //       job.title.toLowerCase().includes(jobcriteria.title.toLowerCase()) &&
    //       job.location.toLowerCase().includes(jobcriteria.location.toLowerCase()) &&
    //       job.experience.toLowerCase().includes(jobcriteria.experience.toLowerCase()) &&
    //       job.type.toLowerCase().includes(jobcriteria.type.toLowerCase())
    //     );
    
    //     // Log the filtered jobs (you can update state or perform other actions here)
    //     setFilteredJobs(filteredJobs);
    //     console.log("Filtered Jobs:", filteredJobs);
    //     console.log("Filtered Jobs State:", filteredJobs);
    //   };
    //  console.log(jobcriteria)

      return (
    <div className='flex gap-4 my-10 justify-center px-10 text-white'>
        <select onChange={handleChange} name='title' value={jobcriteria.title} className='w-64 py-3 pl-4 bg-slate-700 font-semibold rounded-md'>
            <option value="" disabled hidden selected>Job Role</option>
            <option value="iOS Deveoper" >iOS Deveoper</option>
            <option value="Fronted Deveoper" >Fronted Deveoper</option>
            <option value="Backend Developer" >Backend Developer</option>
        </select>

        
        <select onChange={handleChange} name='type' value={jobcriteria.type} className='w-64 py-3 pl-4 bg-slate-700 font-semibold rounded-md'>
            <option value="" disabled selected hidden>Job Type</option>
            <option value="Full Time" >FullTime</option>
            <option value="Part Time" >PartTime</option>
            <option value="Contract" >Contract</option>
            
        </select>

       
        <select onChange={handleChange} name='location' value={jobcriteria.location}className='w-64 py-3 pl-4 bg-slate-700 font-semibold rounded-md'>
            <option value="" disabled selected hidden>Location</option>
            <option value="Remote" >Remote</option>
            <option value="In-Office" >In-Office</option>
            <option value="Hybrid" >Hybrid</option>
           
        </select>

        <select onChange={handleChange} name='experience' value={jobcriteria.experience}className='w-64 py-3 pl-4 bg-slate-700 font-semibold rounded-md'>
            <option value="" disabled selected hidden>Experience</option>
            <option value="Fresher" >Fresher</option>
            <option value="Junior Level" >Junior Level</option>
            <option value="Mid Level" >Mid Level</option>
            <option value="Senior Level" >Senior Level</option>
        </select>
        
        
        <Button   className='w-70 bg-blue-500 text-green-300 font-bold  rounded-md'>Search</Button>

       
      
        
        

          
    </div>
  )
}

export default SearchBar 