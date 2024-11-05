import React, { useState } from "react";

import './Dropdown.css';

import { Actions, Manager } from "@twilio/flex-ui";
 
function CustomDropdown() {

    const [value, setValue] = useState("");
    const activities = Manager.getInstance().store.getState().flex.worker.activities
    const obj =  Object.fromEntries(activities);   

    function handleChange(e) {
        Actions.invokeAction("SetActivity", { activitySid: e.target.value });
        setValue(e.target.value);

    }
    return (
        <>

        {value ? (
                <button class={value}></button>  
            ) : (
                <button class="default"></button>  
            )}
        
        <div class = "activity">
            <select onChange={handleChange}>

            {Object.entries(obj).map(([key, value]) => (

                    <option value={key}>{value.name}</option>

                ))}


            </select>
        </div>

        </>
    );
}
 
export default CustomDropdown;