import { useState } from "react";

export default function HelloMyNamePage() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const greet = () => {
    setGreeting(`Hello ${name}`);
  };

  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn btn-primary" onClick={greet}>
        Greet Me
      </button>
      {/* Result Text */}
      <p className="mt-3">{greeting}</p>
    </div>
  );
}
