import React from "react";
import { Icon } from "@iconify/react";

const ExpertiseSection = () => {
  return (
    <div className="container my-5" style={{ paddingTop: "60px" }}>
      <h1
        className="text-center"
        style={{ fontSize: "2.5rem", marginBottom: "50px" }}
      >
        Highlights of Our <br /> Real-Estate Expertise
      </h1>
      <div style={{ marginLeft: "80px", marginRight: "80px" }}>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div
              className="card p-4  border-0"
              style={{ borderRadius: "20px", backgroundColor: "#fafafa" }}
            >
              <Icon
                icon="bi:bar-chart-line"
                style={{ fontSize: "32px", color: "#000" }}
              />
              <h5 className="mt-3">Market Analysis</h5>
              <p>
                In-depth understanding of market trends to guide pricing and
                strategy.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card p-4   border-0"
              style={{ borderRadius: "20px", backgroundColor: "#fafafa" }}
            >
              <Icon
                icon="mynaui:home"
                style={{ fontSize: "32px", color: "#000" }}
              />
              <h5 className="mt-3">Property Valuation</h5>
              <p style={{ fontSize: "16px" }}>
                Accurate assessments to determine the true value of your
                favorite property.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card p-4   border-0"
              style={{ borderRadius: "20px", backgroundColor: "#fafafa" }}
            >
              <Icon
                icon="bi:shield-lock"
                style={{ fontSize: "32px", color: "#000" }}
              />
              <h5 className="mt-3">Legal Assistance</h5>
              <p>
                Helping clients navigate legal paperwork to ensure smooth
                transactions.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card p-4    border-0"
              style={{ borderRadius: "20px", backgroundColor: "#fafafa" }}
            >
              <Icon
                icon="fluent:person-support-24-regular"
                style={{ fontSize: "32px", color: "#000" }}
              />
              <h5 className="mt-3">Post-Sale Support</h5>
              <p>
                Providing assistance even after the sale, ensuring clients feel
                supported.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card p-4  border-0"
              style={{ borderRadius: "20px", backgroundColor: "#fafafa" }}
            >
              <Icon
                icon="fluent:comment-text-16-regular"
                style={{ fontSize: "32px", color: "#000" }}
              />
              <h5 className="mt-3">Negotiation Skills</h5>
              <p>
                In-depth understanding of market trends to guide pricing and
                strategy.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card p-4  border-0"
              style={{ borderRadius: "20px", backgroundColor: "#fafafa" }}
            >
              <Icon
                icon="circum:bullhorn"
                style={{ fontSize: "32px", color: "#000" }}
              />
              <h5 className="mt-3">Tailored Marketing Plans</h5>
              <p>
                Developing customized strategies to showcase properties and
                attract buyers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
