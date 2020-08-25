import React from 'react';

const food = [
  {
    name: "한현희",
    place: "카페"
  },
  {
    name: "오소현",
    place: "카페"
  },
  {
    name: "서혜진",
    place: "병원"
  },
  {
    name: "차유빈",
    place: "학교"
  },
  {
    name: "이성경",
    place: "??"
  }
];
function People({name, place}) {
  return (
    <div>
      <h3>{name}은 지금 {place}에 있어요.</h3>
    </div>
  );
}
function printEveryone(people) {
  return <People name={people.name} place={people.place} />;
}

function App() {
  return (
    <div>
     {food.map(printEveryone)}
    </div>
  );
}

export default App;
