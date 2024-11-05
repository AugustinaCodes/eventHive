import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../../services/api";

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


export default function ListPlace() {

    const { data: events, isLoading, error } = useQuery<Event[]>(["events"], fetchEvents);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading events: {error.message}</div>;
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
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
  )
}
