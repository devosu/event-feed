import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { React, useContext } from "react";
import "./User.css";
import useEventContext from "../../hooks/useEventContext"; // Importing the custom hook

function EventCard() {
  const { EventData } = useEventContext(); // Using the custom hook

  console.log(EventData);

  return (
    <>
      <div>
        <p>{EventData?.event_name || "Event name not available"}</p>
      </div>
    </>
  );
}

export default EventCard;
