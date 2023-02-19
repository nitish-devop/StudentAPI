import React from "react";

const Student = (props) => {
  return (
    <div className="card border-primary m-3" style={{maxWidth : '18rem'}}>
      <div className="card-header text-left">
        <h3> {props.data.name}</h3>
        </div>
      <div className="card-body text-primary">
        <h5 className="card-title">Id : {props.data.id}</h5>
        <h5 className="card-title">Age : {props.data.age}</h5>
        <h5 className="card-title">Email : {props.data.email}</h5>
        <h5 className="card-title">Phone : {props.data.phone}</h5>
      </div>
    </div>
  );
};

export default Student;
