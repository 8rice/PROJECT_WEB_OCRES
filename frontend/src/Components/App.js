import React from 'react';


fetch("https://v3.football.api-sports.io/players?league=61&search=payet", {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "f362f7602bfd94a69f2ccee18732fbd2",
  }
})
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div className="App">
      <hr />
      {list.map(function (item) {
        return (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
