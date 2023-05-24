import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Noteitem from "./Components/NoteItem";

function App() {
  const [cards, setcards] = useState([]);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault();
    const oldobj = cards;
    oldobj.push(note);
    setcards(oldobj);
    setNote({ title: "", description: "", tag: "" });
    console.log(cards);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="App">
      <div className="container">
        <form className="my-3 mx-2">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
          </div>

          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Add Note
          </button>
        </form>

        
        <div className="row">
          {cards.length > 0
            ? cards.map((note, index) => {
                return <Noteitem key={index} note={note} />;
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
