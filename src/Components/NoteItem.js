import React, { useState } from "react";

const Noteitem = (props) => {
  const { note } = props;
  
  const d = new Date(note.date);
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>
          {note.tag}
        </span>
        <div className="card-body">
          <div className="d-flex">
            <div className="mr-auto p-2">
              <h5 className="card-title">{note.title}</h5>
            </div>
            <div className="p-2">
              {" "}
              <i className="far fa-trash-alt mx-2 "></i>
            </div>
            <div className="p-2">
              <i className="far fa-edit mx-2"></i>
            </div>
          </div>
          {/* <div className="d-flex justify-content-between"></div> */}
          <p className="card-text">{note.description}</p>
          <div className="card-footer text-muted" style={{ textAlign: "center", fontSize: 12 }}>
            Created on {d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()}
          </div>
          <p style={{ textAlign: "center", fontSize: 9 }}>{d.toLocaleTimeString()}</p>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.title} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.description} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
    </div>
  );
};

export default Noteitem;
