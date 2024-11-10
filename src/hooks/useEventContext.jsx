// import { useContext } from 'react';
// import EventContext from '../contexts/EventContext';

// // Custom hook to access event context
// const useEventContext = () => {
//   return useContext(EventContext)
// };

// export default useEventContext;

import { useContext } from "react";
import EventContext from "../contexts/EventContext";

// Custom hook to access event context
const useEventContext = () => {
  const context = useContext(EventContext);

  console.log("useEventContext: context", context);

  if (!context) {
    throw new Error(
      "useEventContext must be used within an EventContextProvider",
    );
  }

  return context;
};

export default useEventContext;
