import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./../notes"

function cards(el){
  return  <Note
    key={el.key}
    title={el.title}
    content={el.content}
    />
    }

function App() {
  return (
    <>
      <Header />
      <Footer />
      {notes.map(cards)}
    </>
  );
}

export default App;
