import React from "react";
import "../CSS/PaymentGateway.css";

const PaymentGateway = () => {
  return (
    <>
      {/* <h1>PAYMENT GATEWAY</h1> */}
      <header className="PaymentGateway-header">
        <div>
          <h1>Stripe Payment Gateway</h1>
          <p>Choose Your Plan</p>
        </div>
      </header>
      <main className="PaymentGateway-container">
        <section className="PaymentGateway-cta-section">
          <h2>Start Now</h2>
        </section>
        <section className="PaymentGateway-plan-section">
          <div className="PaymentGateway-plan">
            <h3>Monthly</h3>
            <p>10&nbsp; Rs</p>
            <p>50 to 100 jobs</p>

            {/* <!-- Form to submit the plan details --> */}
            <form
              // action="../razorpay/index"
              method="post"
            >
              <input type="hidden" name="planid" value="1" />
              <input type="hidden" name="payment" value="10" />
              <input type="hidden" name="plan_name" value="Monthly" />
              <input type="hidden" name="noofjobs" value="50 to 100 jobs" />
              <button
                type="submit"
                className="PaymentGateway-btn PaymentGateway-head-btn1"
              >
                Pay Now
              </button>
            </form>
          </div>
          <div className="PaymentGateway-plan">
            <h3>Half Yearly</h3>
            <p>2000&nbsp; Rs</p>
            <p>200 - 300 jobs</p>

            {/* <!-- Form to submit the plan details --> */}
            <form
              // action="../razorpay/index"
              method="post"
            >
              <input type="hidden" name="planid" value="2" />
              <input type="hidden" name="payment" value="2000" />
              <input type="hidden" name="plan_name" value="Half Yearly" />
              <input type="hidden" name="noofjobs" value="200 - 300 jobs" />
              <button
                type="submit"
                className="PaymentGateway-btn PaymentGateway-head-btn1"
              >
                Pay Now
              </button>
            </form>
          </div>
          <div className="PaymentGateway-plan">
            <h3>Annually</h3>
            <p>3000&nbsp; Rs</p>
            <p>Unlimited JOBS</p>

            {/* <!-- Form to submit the plan details --> */}
            <form
              // action="../razorpay/index"
              method="post"
            >
              <input type="hidden" name="planid" value="3" />
              <input type="hidden" name="payment" value="3000" />
              <input type="hidden" name="plan_name" value="Annually" />
              <input type="hidden" name="noofjobs" value="Unlimited JOBS" />
              <button
                type="submit"
                className="PaymentGateway-btn PaymentGateway-head-btn1"
              >
                Pay Now
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default PaymentGateway;
