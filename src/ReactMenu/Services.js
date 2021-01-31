import React from "react";
import Card from "../Card";
import Cdata from "../Cdata";
// import web from "../Images/about.jpg";
const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row gy-5">
          <div className="col-lg-10 col-md-10 col-sm-10 mx-auto">
            <div className="row">
              {Cdata.map((val, index) => {
                return (
                  <Card
                    key={index}
                    cname={val.name}
                    cimgsrc={val.imgsrc}
                    cdetail={val.detail}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
