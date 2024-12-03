import { React } from "react";
//import "./User.css";

const Filters = () => {
  return (
    <>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 columns per row
            gap: "20px", // Spacing between dropdowns
            maxWidth: "600px", // Adjust width as needed
          }}
        >
          {/* Dropdown 1 */}
          <div>
            <label htmlFor="filter1">Label 1:</label>
            <select id="filter1" name="filter1">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          {/* Dropdown 2 */}
          <div>
            <label htmlFor="filter2">Label 2:</label>
            <select id="filter2" name="filter2">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          {/* Dropdown 3 */}
          <div>
            <label htmlFor="filter3">Label 3:</label>
            <select id="filter3" name="filter3">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          {/* Dropdown 4 */}
          <div>
            <label htmlFor="filter4">Label 4:</label>
            <select id="filter4" name="filter4">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          {/* Dropdown 5 */}
          <div>
            <label htmlFor="filter5">Label 5:</label>
            <select id="filter5" name="filter5">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          {/* Dropdown 6 */}
          <div>
            <label htmlFor="filter6">Label 6:</label>
            <select id="filter6" name="filter6">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
