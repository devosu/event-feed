// src/pages/EventPage.jsx
import React, { useEffect } from "react";
import EventCard from "../components/User/EventCard";
import { EventContextProvider } from "../contexts/EventContext";
import useEventContext from "../hooks/useEventContext";

const EventPage = () => {
  return (
    <>
      <EventCard>
        <EventContextProvider />
      </EventCard>
    </>
  );
};

export default EventPage;
