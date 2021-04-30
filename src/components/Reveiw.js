import React from "react";
import Stars from "./Stars";
const Reveiw = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <h4>Write a Movie Review for GODZILLA VS. KONG</h4>
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Post your Review!</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Give us your Movie Review!"
            rows={3}
            defaultValue={""}
          />
          <hr />
          <Stars />
        </div>
      </form>
    </div>
  );
};

export default Reveiw;
