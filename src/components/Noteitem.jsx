import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

import { RxCross2 } from "react-icons/rx";
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  // console.log(note._id);
  return (
    <div
      className="position-relative   mb-5"
      style={{
        width: "16rem",
        height: "18rem",
        marginLeft: "34px",
        marginRight: "34px",
        borderRadius: 45,
        backgroundColor: "rgba(39, 39, 42, 0.9)",
        padding: "2.5rem 1.25rem 2.5rem 1.25rem",
        color: "white",
        overflow: "hidden",
      }}
    >
      <span
        className=" position-absolute d-flex align-items-center justify-content-center bg-danger rounded-circle"
        style={{
          width: "1.75rem",
          height: "1.75rem",
          top: "10px",
          left: "215px",
        }}
      >
        <RxCross2
          size="1.4rem"
          color="#fff"
          onClick={() => {
            deleteNote(note._id);
          }}
        ></RxCross2>
      </span>
      <h4 className="card-title ">{note.title}</h4>
      <p className="text-sm fw-semibold mt-3">{note.description}</p>
      <p className="badge rounded-pill text-bg-light text-lg">#{note.tag}</p>
      <div className="footer position-absolute bottom-0 w-100 start-0">
        <div className="d-flex align-items-center justify-content-between py-3 px-3 mb-1"></div>
        <div
          className="tag w-100 py-1 bg-success d-flex align-items-center justify-content-center cursor-pointer"
          onClick={() => {
            updateNote(note);
          }}
        >
          <h4 className="text-sm fw-semibold">Edit</h4>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
