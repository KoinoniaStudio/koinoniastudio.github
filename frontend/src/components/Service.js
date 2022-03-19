import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="serviceMain">
      <div className="serviceOne">
        <h4 className="boldTitle">Satisfaction Guaranteed</h4>
        <p className="servParaTwo">
          Free 14 day return policy so you can view it in your home.
        </p>
      </div>
      <hr className="serviceLine" />
      <div className="serviceTwo">
        <h4 className="boldTitle">Buy with confidence</h4>
        <p className="servParaTwo">
          Original artwork from an outstanding artist with certification.
        </p>
      </div>
      <hr className="serviceLine" />
      <div className="serviceThree">
        <h4 className="boldTitle">At your service</h4>
        <p className="servParaTwo">
          Enjoy incredible service and fast delivery.
        </p>
      </div>
    </div>
  );
};

export default Service;
