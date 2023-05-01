import React from "react";
import { useLoaderData } from "react-router-dom";
import Destination from "../Destination/Destination";

const Booking = () => {
  const booking = useLoaderData();
  const { id, title, details } = booking;
  return <div>{details}</div>;
};

export default Booking;
