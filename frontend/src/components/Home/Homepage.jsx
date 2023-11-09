// const Homepage = () => {
//   const [flights, setFlights] = useState([
//     {date:''
// }
//   ]);

// //   useEffect(() => {
// //     const url = 'https://flight-info-api.p.rapidapi.com/schedules?version=v2';
// //     // Make an API request to fetch flight data and update the 'flights' state
// //     fetch('url')
// //       .then((response) => response.json())
// //       .then((data) => setFlights(data));
// //   }, []);


import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const dummyFlights = [
    {
      id: 1,
      flightNumber: 'ABC123',
      destination: 'New York',
      departureTime: '08:00 AM',
    },
    {
      id: 2,
      flightNumber: 'XYZ789',
      destination: 'Los Angeles',
      departureTime: '10:30 AM',
    },
    {
      id: 3,
      flightNumber: 'DEF456',
      destination: 'Chicago',
      departureTime: '12:45 PM',
    },
    {
      id: 4,
      flightNumber: 'GHI789',
      destination: 'Miami',
      departureTime: '02:15 PM',
    },
  ];

  return (
    <div>
      <nav>
        <Link to="/my-trips">My Trips</Link>
        <Link to="/help">Help</Link>
      </nav>
      <h2>Next Available Flights</h2>
      <div className="flight-schedules">
        {dummyFlights.slice(0, 2).map((flight) => (
          <div className="flight-schedule" key={flight.id}>
            <h2>Flight {flight.flightNumber}</h2>
            <p>Destination: {flight.destination}</p>
            <p>Departure Time: {flight.departureTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;

