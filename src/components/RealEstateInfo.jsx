import React from "react";
import "./css/RealEstateInfo.css";
import Img1 from "../assets/18.jpg";
function RealEstateInfo() {
  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <div className="row  mx-auto">
        {/* Left Section with Image */}
        <div
          className="col-md-6  mx-auto mx-4"
          style={{
            backgroundColor: "#fafafa",
            borderRadius: "25px",
            padding: "20px",
          }}
        >
          <div className="row">
            <div
              className="col-md-6"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <img
                src={Img1}
                alt="Property"
                className="img-fluid"
                style={{
                  height: "260px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>
            <div
              className="col-md-6"
              id="paraText"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",

                // height: "350px",
              }}
            >
              <h4
                className="mb-3"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                Find Your Dream Property At The Best Price
              </h4>
              <p className="mb-4" style={{ fontSize: "14px" }}>
                We support our clients at every stage of the buying and selling
                process, ensuring a seamless and stress-free experience from
                start to finish.
              </p>
              <div className="">
                <button
                  //   className="btn btn-outline-primary mb-4"
                  className=" rounded-pill px-4 py-2 bg-black text-white"
                  style={{ fontSize: "18px", border: 0 }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section with Text and Stats */}
        <div className="col-md-6 " id="rightCont">
          <div className="row justify-content-between">
            <div className="col-6" style={{ paddingRight: "0" }}>
              <div
                className="card"
                style={{
                  backgroundColor: "#fafafa",
                  borderRadius: "20px",
                  padding: "20px",
                  border: "none",
                }}
              >
                <h3 className="mb-4" style={{ fontSize: "40px" }}>
                  100k+
                </h3>
                <p>Property Constructed</p>
              </div>
            </div>
            <div className="col-6 ">
              <div
                className="card"
                style={{
                  backgroundColor: "#fafafa",
                  borderRadius: "20px",
                  padding: "20px",
                  border: "none",
                }}
              >
                <h3 className="mb-4" style={{ fontSize: "40px" }}>
                  100+
                </h3>
                <p>Award Winning</p>
              </div>
            </div>
            <div className="col-6 mt-2" style={{ paddingRight: "0" }}>
              <div
                className="card"
                style={{
                  backgroundColor: "#fafafa",
                  borderRadius: "20px",
                  padding: "20px",
                  border: "none",
                }}
              >
                <h3 className="mb-4" style={{ fontSize: "40px" }}>
                  50k+
                </h3>
                <p>Satisfied Clients</p>
              </div>
            </div>
            <div className="col-6 mt-2">
              <div
                className="card"
                style={{
                  backgroundColor: "#fafafa",
                  borderRadius: "20px",
                  padding: "20px",
                  border: "none",
                }}
              >
                <h3 className="mb-4" style={{ fontSize: "40px" }}>
                  5+
                </h3>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealEstateInfo;
