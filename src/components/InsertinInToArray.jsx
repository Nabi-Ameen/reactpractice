import React, { useEffect, useState } from "react";

let nextId = 3;
const initialArtists = [
  { id: 0, name: "Majid" },
  { id: 0, name: "wajid" },
  { id: 0, name: "ali" },
];

const InsertinInToArray = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  const handleClick = (e) => {
    if (name === "") {
      return;
    }
    const nextinsert = 0

    const nextName = [
        ...artists, 
        { id: nextId++, name: name },
        // ...artists.slice(nextinsert)
    ];

    setArtists(nextName);
    setName("");
  };

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
};

export default InsertinInToArray;
