import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, serService] = useState({});
  useEffect( () => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => serService(data));
  }, []);
  return (
    <div>
      <h1>Welcome to service detail:{service.name}</h1>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
