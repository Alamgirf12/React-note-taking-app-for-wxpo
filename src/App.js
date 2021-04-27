import React, { useState, useEffect } from "react";
import "./bootstrap.min.css";

import AddNote from "./components/AddNote";
import Notes from "./components/Notes";

import { v4 as uuidv4 } from "uuid";

const sampleNotes = {
  notes: [
    {
      id: uuidv4(),
      data: "The Earth is not flat"
    },
    {
      id: uuidv4(),
      data: "It's not round either"
    },
    {
      id: uuidv4(),
      data: "It's more like a donut"
    }
  ]
};

function App() {
  const [state, setState] = useState(
    localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : sampleNotes
  );

  const addNote = data => {
    const newNote = {
      id: uuidv4(),
      data
    };
    if(data ==  ''){
      alert(" Please write something")
    }
    else{
    setState({ notes: [...state.notes, newNote] });
  }};

  const delNote = id => {
    setState({
      notes: [...state.notes.filter(note => note.id != id)]
    });
  };

  const delAll = () => {
    setState({
      notes: ['']
    });
  };


  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(state));
  });

  return (
    <div style={{position: "relative"}} >
    <div className="container" style={{ marginTop: "1vh" }}>
      <div className="headtop fixed-top text-center">
      <h1 style={titleStyle}>My Notes</h1>
      <button onClick={delAll} style={{marginTop: "-20px",background: "white",color:"red"}}>Clear All</button>
      </div>
     <div style={{ marginTop: "20%",marginBottom: "20%" }}> <Notes notes={state.notes} delNote={delNote} /></div>
      <div className="fixed-bottom" style={{background: "gray"}}><AddNote addNote={addNote} /></div>
    </div>
    </div>
  );
}

const titleStyle = {
  textAlign: "center",
  fontSize: "3.5rem",
  color: "white"
};

export default App;
