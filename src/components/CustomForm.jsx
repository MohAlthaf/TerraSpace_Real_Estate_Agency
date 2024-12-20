import React from "react";
import { Icon } from "@iconify/react";

const CustomForm = () => {
  return (
    <div className="container-fluid d-flex align-items-center vh-100">
      <div className="row w-100">
        {/* Left Section - Image/Carousel */}
        <div className="col-md-6 p-0">
          <div className="position-relative h-100">
            <img
              src="https://via.placeholder.com/800x600" // Replace with your image URL
              alt="Modern Home"
              className="img-fluid w-100 h-100 object-fit-cover"
              style={{ objectFit: "cover" }}
            />
            <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex mb-3">
              <button className="btn btn-dark rounded-circle me-2">
                <Icon
                  icon="bi:chevron-left"
                  className="text-white"
                  width="20"
                />
              </button>
              <button className="btn btn-dark rounded-circle">
                <Icon
                  icon="bi:chevron-right"
                  className="text-white"
                  width="20"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="col-md-6 d-flex align-items-center bg-dark text-white">
          <form className="w-75 mx-auto">
            <h2 className="mb-4">
              Still haven't found what you're looking for?
            </h2>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control bg-dark text-white"
                  placeholder="First Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control bg-dark text-white"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mt-3">
              <input
                type="text"
                className="form-control bg-dark text-white"
                placeholder="I Want to"
              />
            </div>
            <div className="mt-3">
              <textarea
                className="form-control bg-dark text-white"
                placeholder="Notes"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-light mt-4 w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
