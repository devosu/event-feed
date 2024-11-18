import { React, useContext } from "react";
import "./User.css";


function EventCard() {
  // const { EventData } = useEventContext(); // Using the custom hook
  let date = new Date('2024-10-22T09:15:00');



  return (
    <>
      <div className="eventCard">
        <img className="eventMainImage"></img>
        <div className="eventDetails">
          <div className="eventTexts">
            <div className="eventHeaderWrap">
              <h1>Totally Real Event with OnSU - Chapter 4</h1>
            </div>
            <div className="eventDateLocationWrap">
              <h2>
                {date.toLocaleString('default', { month: 'long' })}{' '}
                {date.getDate()}, {date.getFullYear()}
              </h2>
              <h2>123 West Superlongstreet Street</h2>
            </div>
            <div className="eventFlaresWrap">
              <h1>Sports</h1>
              <h1>Casual</h1>
              <h1>Free Food</h1>
            </div>
            <div className="eventClubNameWrap">
              <div id="templogo"></div>
              <h2>Octo n' Squids United</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
