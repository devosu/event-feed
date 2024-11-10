import React, { createContext, useState } from "react";

// Create the context
const EventContext = createContext({});

// Provider component
export const EventContextProvider = ({ children }) => {
  // Initialize event data
  const [EventData, setEventData] = useState({
    event_name: "Totally Real Event with OnSU - Chapter 4",
    event_date: "2024-10-22T09:15:00",
    event_description: "A fun event with free food and games!",
    event_tags: "Sports, Casual, Free Food",
    event_location: "123 West Superlongstreet Street",
  });

  console.log("EventContextProvider: eventData", eventData);

  return (
    <EventContext.Provider value={{ EventData, setEventData }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;
