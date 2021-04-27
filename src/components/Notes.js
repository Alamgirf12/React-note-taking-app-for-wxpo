import React from "react";
import Note from "./Note";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles/Note.css";

export default function Notes(props) {
  return (
    <div className="notelist">
      <TransitionGroup className="d-flex flex-wrap flex-column flex-md-row">
        {props.notes.map(note => {
          return (
            <CSSTransition
              key={note.id}
              in={true}
              classNames="note"
              timeout={200}
            >
              <Note
                note={note}
                delNote={props.delNote}
                style={{ display: "inline" }}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      </div>
  );
}
