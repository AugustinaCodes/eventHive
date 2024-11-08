import Event from "../models/Event.js"

export async function createEvent(req, res) {
    const { location, name, description, totalSeats, remainingSeats, price, eventDate} = req.body;

    try {
        const newEvent = new Event({
            location,
            name,
            description,
            totalSeats,
            remainingSeats,
            price,
            eventDate
        })

        await newEvent.save()
        res.status(201).json(newEvent)
    } catch (error) {
        res.status(500).json({ message: "Error creating event", error });
    }
}


export async function getAllEvents(req, res) {
    try {
        const events = await Event.find(); 
        res.status(200).json(events);  
    } catch (error) {
        res.status(500).json({ message: "Error fetching events", error });
    }
}