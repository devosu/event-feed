import { useState } from "react";
export default function EmailInput() {
  const [inputValue, setInputValue] = useState("test");

  return (
    <div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <p>{inputValue}</p>
    </div>
  );
}
