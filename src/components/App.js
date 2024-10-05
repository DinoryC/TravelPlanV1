import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
          duration={noteItem.location}
          lacation={noteItem.duration}
          img1={noteItem.img1}
          img2={noteItem.img2}
          referanceVideoLink={noteItem.referanceVideoLink}
          referanceVideoLinkName={noteItem.referanceVideoLinkName}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

{
  /* <div className="note">
  <div>
    <img src={props.img1} />
  </div>
  <div>
    <h1>{props.title}</h1>
    <p>{props.duration}</p>
    <h3>{props.location}</h3>
    <p>{props.content}</p>
  </div>
</div>; */
}
