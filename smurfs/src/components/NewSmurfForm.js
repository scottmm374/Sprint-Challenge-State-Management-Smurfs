import React, { useState } from "react";

function NewSmurfForm(props) {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: null,
    height: ""
  });

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {};

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={props.name}
          placeholder="Enter Smurf Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          value={props.age}
          placeholder="Enter Smurf Age"
          onChange={handleChange}
        />
        <input
          type="text"
          name="height"
          value={props.height}
          placeholder="Enter Smurf Height"
          onChange={handleChange}
        />
        <button>Add Smurf</button>
      </form>
    </div>
  );
}

export default NewSmurfForm;
