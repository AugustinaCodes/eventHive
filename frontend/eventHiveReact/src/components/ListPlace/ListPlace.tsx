import axios from "axios";
import { useEffect, useState } from "react";

interface Event {
  _id: string;
  location: string;
  name: string;
  description: string;
  totalSeats: number;
  remainingSeats: number;
  price: number;
  eventDate: string;
}

const API_URL = "http://localhost:3000";

export default function ListPlace() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get<Event[]>(`${API_URL}/events`);
        setEvents(response.data);
      } catch (error) {
        setError("Error fetching events.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading events: {error}</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Number of total seats</th>
            <th>Number of remaining seats</th>
            <th>Price</th>
            <th>Date of an event</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{event.totalSeats}</td>
              <td>{event.remainingSeats}</td>
              <td>{event.price}</td>
              <td>{new Date(event.eventDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
