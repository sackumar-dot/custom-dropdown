import { useState } from "react";
import { Actions, Manager } from "@twilio/flex-ui";
import "./Dropdown.css";

// Define environment variables at the top of the file
const ACTIVITY_SID_AVAILABLE = process.env.REACT_APP_ACTIVITY_SID_AVAILABLE;
const ACTIVITY_SID_UNAVAILABLE = process.env.REACT_APP_ACTIVITY_SID_UNAVAILABLE;
const ACTIVITY_SID_BREAK = process.env.REACT_APP_ACTIVITY_SID_BREAK;
const ACTIVITY_SID_OFFLINE = process.env.REACT_APP_ACTIVITY_SID_OFFLINE;

function CustomDropdown() {
  const [value, setValue] = useState("");
  const activities =
    Manager.getInstance().store.getState().flex.worker.activities;
  const obj = Object.fromEntries(activities);

  function handleChange(e) {
    Actions.invokeAction("SetActivity", { activitySid: e.target.value });
    setValue(e.target.value);
  }

  // Define a mapping for the activity classes dynamically
  const activityClassMap = {
    [ACTIVITY_SID_AVAILABLE]: "available",
    [ACTIVITY_SID_UNAVAILABLE]: "unavailable",
    [ACTIVITY_SID_BREAK]: "break",
    [ACTIVITY_SID_OFFLINE]: "offline",
  };

  return (
    <>
      {value ? (
        <button className={activityClassMap[value] || "default"}></button>
      ) : (
        <button className="default"></button>
      )}

      <div className="activity">
        <select onChange={handleChange}>
          {Object.entries(obj).map(([key, value]) => (
            <option key={key} value={key}>
              {value.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default CustomDropdown;
