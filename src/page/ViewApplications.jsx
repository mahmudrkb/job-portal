import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const applications = useLoaderData();

  return (
    <div>
      <h1 className="text-3xl text-center">
        {" "}
        this is view applications {applications.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Favorite Color</th>
            
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((job ,index) => (
              <tr key={job._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                       {index+1}
                      </div>
                    </div>
                    <div>
                      
                    
                    </div>
                  </div>
                </td>
                <td>
                 
                  
                  <div className="font-bold">{job.applicant_email}</div>
           
                </td>
                <td>Purple</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
