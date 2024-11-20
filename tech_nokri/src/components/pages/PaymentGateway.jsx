import React from "react";
import "../CSS/PaymentGateway.css";

const PaymentGateway = () => {
  return (
    <>
      <header className="PaymentGateway-header">
        <div>
          <h1>Subscription Page</h1>
          <p>Choose Your Plan</p>
        </div>
      </header>
      <main className="PaymentGateway-container">
        <section className="PaymentGateway-cta-section">
          <h2>Start Now</h2>
        </section>
        <section className="PaymentGateway-plan-section">
          <div className="PaymentGateway-plan">
            <h3>Half Yearly</h3>
            <p>Amount: 3000&nbsp; Rs</p>
            <p>No Of Leads: 200+ Job Leads</p>

            <button
              disabled
              className="PaymentGateway-btn PaymentGateway-head-btn1"
            >
              Pay Now
            </button>
          </div>
          <div className="PaymentGateway-plan">
            <h3>Annually</h3>
            <p>3000&nbsp; Rs</p>
            <p>Unlimited JOBS</p>

            <button
              disabled
              className="PaymentGateway-btn PaymentGateway-head-btn1"
            >
              Pay Now
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default PaymentGateway;
