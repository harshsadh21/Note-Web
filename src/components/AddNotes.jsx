import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNotes = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: " ", description: " ", tag: " " });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-warning mt-5"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create Note <span className="font-bold text-lg">+</span>
      </button>

      <div
        className="modal fad"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                color="white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="constainer my-3 text-white">
                  <h2>Add a notes</h2>

                  <div className="my-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      placeholder="Title your note"
                      onChange={onChange}
                      value={note.title}
                      minLength={5}
                      required
                    />

                    <label htmlFor="title" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="tag"
                      name="tag"
                      placeholder="#"
                      onChange={onChange}
                      value={note.tag}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      write your note here
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      onChange={onChange}
                      value={note.description}
                      rows={3}
                      minLength={5}
                      required
                    />
                  </div>
                  <button
                    disabled={
                      note.title.length < 5 || note.description.length < 5
                    }
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleClick}
                  >
                    Add note
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNotes;
