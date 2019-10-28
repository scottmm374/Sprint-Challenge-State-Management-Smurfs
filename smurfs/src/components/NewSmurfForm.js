import React, { useState } from "react";

function NewSmurfForm(props) {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: null,
    height: ""
  });

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={props.name}
          placeholder="Enter Smurf Name"
        />
        <input
          type="text"
          name="age"
          value={props.age}
          placeholder="Enter Smurf Age"
        />
        <input
          type="text"
          name="height"
          value={props.height}
          placeholder="Enter Smurf Height"
        />
        <button>Add Smurf</button>
      </form>
    </div>
  );
}

export default NewSmurfForm;
