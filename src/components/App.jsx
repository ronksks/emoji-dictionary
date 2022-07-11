import React from "react";
import emojiPedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(emojiItem) {
  return (
    <Entry
      key={emojiItem.id}
      emoji={emojiItem.emoji}
      name={emojiItem.name}
      meaning={emojiItem.meaning}
    />
  );
}



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojiPedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
