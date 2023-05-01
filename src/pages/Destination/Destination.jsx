import React, { useEffect, useState } from "react";

const Destination = () => {
  const [destinations, setDestination] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/destination")
      .then((res) => res.json())
      .then((data) => setDestination(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="text-black">
      {destinations.map((destination) => (
        <p key={destination.id}>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-64 h-72"
                  src={destination.photo}
                  alt="image"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{destination.title}</h2>
                <p>{destination.details}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </p>
      ))}
    </div>
  );
};

export default Destination;
