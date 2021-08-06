import React from "react";

export default function Message({ mensaje }) {
  return (
    <div className="alert alert-danger text-center font-weight-bold">
      <label>{mensaje}</label>
    </div>
  );
}
