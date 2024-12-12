import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJob = () => {

    const [jobs,setJobs]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/jobs")
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
    },[])
    return (
        <div>

            <h2 className='text-center font-bold text-5xl my-10'>Latest Job </h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
           
        </div>
    );
};

export default HotJob;