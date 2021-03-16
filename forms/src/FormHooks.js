import React, { useState } from "react";

function FormHooks() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  function submit(e) {
    e.preventDefault();
    console.log(firstName + " " + lastName);
  }
  return (
    <div>
      <input
        type="text"
        placeholder=" FIRST NAME"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder=" LAST NAME"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input type="submit" onClick={(e) => submit(e)} />
    </div>
  );
}

export default FormHooks;
