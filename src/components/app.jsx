import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./../notes";

function App() {
  return (
    <>
      <Header />
      {notes.map((cards) => (
        <Note key={cards.key} title={cards.title} content={cards.content} />
      ))}
      <Footer />
    </>
  );
}

export default App;
