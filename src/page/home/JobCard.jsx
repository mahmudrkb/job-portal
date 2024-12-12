import { p } from "motion/react-client";
import React from "react";

const JobCard = ({ job }) => {

    const {company_logo,company,title,location,jobType,category,description,requirement,salaryRange,applicationDeadline,hr_email}=job
  return (
    <div>
       <div className="card bg-slate-200 shadow-xl border border-gray-200   flex flex-col h-full">
      <figure className="px-4 pt-4">
        <img
          src={job.company_logo}
          alt={`${job.company} Logo`}
          className="rounded-xl w-20 h-20 object-contain"
        />
        <div>
        <h2 className="card-title text-lg font-bold">{job.title}</h2>
        <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
        </div>
      </figure>
      <div className="card-body">
       
        <div className="mt-2">
          <span className="badge badge-outline mr-2">{job.jobType}</span>
          <span className="badge badge-outline">{job.category}</span>
        </div>
        <p className="mt-3 text-gray-700 text-sm">{job.description}</p>
        <div className="mt-3 text-sm text-gray-500">
          <p><strong>Salary:</strong> {job.salaryRange.min}-{job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}</p>
          <p><strong>Deadline:</strong> {job.applicationDeadline}</p>
        </div>
        <div className="mt-3">
          <h3 className="text-md font-semibold">Requirements:</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {job.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
        <div className="card-actions mt-4 flex justify-between items-center">
          <button className="btn btn-sm btn-primary">Apply Now</button>
          <a href={`mailto:${job.hr_email}`} className="link text-sm">Contact HR</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default JobCard;
