// src/pages/EventPage.jsx
import React, { useEffect } from "react";
import EventCard from "../components/User/EventCard";

const EventPage = () => {
  return (
    <>
    <div>NAV</div>
      <div id="eventCardDeckContainer">
        <div className="eventCardDeck">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </>
  );
};

export default EventPage;
