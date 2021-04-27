import React from "react";

export default function Note(props) {
  const { id, data } = props.note;

  const deleteNote = e => {
    props.delNote(id);
  };

  return (
    <div className="card" style={cardStyle}>
      <button style={deleteBtnStyle} onClick={deleteNote}>
        <i
          class="fas fa-trash-alt"
          style={{ fontSize: "0.8rem", color: "#dc3545" }}
        ></i>
      </button>
      <div className="card-body">
        {/* <h4 className="card-title">Note Title</h4> */}
        <p className="card-text">{data}</p>
      </div>
    </div>
  );
}

const cardStyle = {
  margin: "4px",
  background:
    "repeating-linear-gradient(#FFFFF8, #FFFFF8 10px, #BCBAFF 10px, #BCBAFF 12px)",
  padding: "10px",
  position: "relative"
};

const deleteBtnStyle = {
  border: "none",
  background: "none",
  maxWidth: "30px",
  position: "absolute",
  right: "1px",
  top: "2px"
};
