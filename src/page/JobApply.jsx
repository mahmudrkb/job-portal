import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  console.log(id);
  const { user } = useAuth();
  console.log(user);
const navigate=useNavigate()
  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    // console.log(linkedin,github,resume)

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };

    fetch("http://localhost:5000/jobs-applications", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myApplication")

        }
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-lg mx-auto shadow-2xl">
      <form onSubmit={handleApply} className="card-body">
        <h1 className="text-5xl text-center font-bold">Job Apply!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Linkedin URL</span>
          </label>
          <input
            type="url"
            name="linkedin"
            placeholder="Linkedin URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="Github url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Resume url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply </button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
