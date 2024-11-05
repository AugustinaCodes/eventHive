import axios from "axios";

const API_URL = "http://localhost:3000"

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

export async function fetchEvents() {
    const response = await axios.get<Event[]>(`${API_URL}/events`)
    return response.data
}
