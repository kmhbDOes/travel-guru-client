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
    <div className="text-white">
      {destinations.map((destination) => (
        <p key={destination.id}>
          {" "}
          <li>{destination.title}</li>
        </p>
      ))}
    </div>
  );
};

export default Destination;
