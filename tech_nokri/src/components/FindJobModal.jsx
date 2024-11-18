import React from "react";
import "./CSS/FindJobModal.css";

const FindJobModal = ({ setShowModal, selectedJob }) => {
  return (
    <div>
      <div
        className="modal fade show"
        role="dialog"
        aria-labelledby="jobModalLabel"
        style={{ display: "block", paddingRight: "17px" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="jobModalLabel">
                Job Details
              </h5>
              <button
                onClick={() => setShowModal(false)}
                // onClick={() => console.log(selectedJob.id)}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body" id="modalContent">
              <p>
                <strong>Job ID:</strong> {selectedJob.id}
              </p>
              <p>
                <strong>Job Title:</strong> {selectedJob.technology}
              </p>
              <p>
                <strong>Category Name:</strong> {selectedJob.profile}
              </p>
              <p>
                <strong>Job Posted Date:</strong> N/A
              </p>
              <p>
                <strong>Description:</strong> ********
              </p>
              <p>
                <strong>Company Name:</strong> ******
              </p>
              <p>
                <strong>HR Name:</strong> *****
              </p>
              <p>
                <strong>HR Email:</strong> ****@gmail.com
              </p>
              <p>
                <strong>Contact Number:</strong> ********
              </p>
              <p>
                <strong>Expiry Date:</strong> ******
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobModal;
