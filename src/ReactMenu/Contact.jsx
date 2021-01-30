import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    mobile: "",
    email: "",
    msg: "",
  });
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My Name is ${data.fullname}.My Mobile Number is ${data.mobile}.My Email is ${data.email}.My Message is ${data.msg}`
    );
  };

  const inputHandle = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="my-4">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputHandle}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="mobile"
                  value={data.mobile}
                  onChange={inputHandle}
                  placeholder="Enter Your Mobile Number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputHandle}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={inputHandle}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
