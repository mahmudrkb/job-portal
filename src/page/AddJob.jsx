import React from "react";
import Swal from "sweetalert2";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { user } = useAuth();
  const navigate=useNavigate()
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries())
    // const values=Object.formEntries(formData.entries())
    const values = Object.fromEntries(formData.entries());
    console.log(values);

    const { min, max, currency, ...newJob } = values;
    console.log(newJob);
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Job has been added",
            showConfirmButton: false,
            timer: 1300,
          });
          navigate("/myPostedJobs")
        }
      });
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">Add A New Job</h1>

      <form onSubmit={handleAddJob} className="card-body max-w-3xl mx-auto">
        {/* title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered"
            required
          />
        </div>

        {/* Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="JobLocation"
            className="input input-bordered"
            required
          />
        </div>
        {/* job type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select
          name="jobType"
            defaultValue={" pick a job Type?"}
            className="select select-bordered w-full "
          >
            <option disabled selected>
              pick a job Type?
            </option>
            <option>Full-Time</option>
            <option>Intern</option>
            <option>Part-Time</option>
          </select>
        </div>
        {/* job field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job field</span>
          </label>
          <select name="category" defaultValue={" "} className="select select-bordered w-full ">
            <option disabled selected>
              pick a job field?
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Banker</option>
            <option>Teacher</option>
          </select>
        </div>

        {/* salary range */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <input
              type="number"
              name="min"
              placeholder="min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="number"
              name="max"
              placeholder="max"
              className="input input-bordered"
              required
            />
          </div>
          <select
            defaultValue={" pick a Currency?"}
            name="currency"
            className="select select-bordered w-full "
          >
            <option disabled selected>
              pick a Currency?
            </option>
            <option>BDT</option>
            <option>USD</option>
            <option>INR</option>
          </select>
        </div>
        {/* title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>

          <textarea
            type="text"
            name="description"
            required
            className="textarea textarea-bordered"
            placeholder="Job Description"
          ></textarea>
        </div>

        {/* COMPONY name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="company name "
            className="input input-bordered"
            required
          />
        </div>
        {/* required */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>

          <textarea
            type="text"
            name="requirements"
            required
            className="textarea textarea-bordered"
            placeholder="Put each  Requirements in new line "
          ></textarea>
        </div>
        {/* responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>

          <textarea
            type="text"
            name="responsibilities"
            required
            className="textarea textarea-bordered"
            placeholder="write each responsibility in new line "
          ></textarea>
        </div>
        {/* HR name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="HR name "
            className="input input-bordered"
            required
          />
        </div>

        {/* HR email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            type="text"
            name="hr_email"
            defaultValue={user?.email}
            placeholder="HR Email "
            className="input input-bordered"
            required
          />
        </div>
        {/* deadline*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            placeholder="deadline"
            className="input input-bordered"
            required
          />
        </div>
        {/* COMPONY logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo</span>
          </label>
          <input
            type="url"
            name="company_logo"
            placeholder="company logo "
            className="input input-bordered"
            required
          />
        </div>

        {/* submit button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Job</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
