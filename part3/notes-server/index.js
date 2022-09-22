const { response } = require("express");
const express = require("express");
const cors = require("cors");
const { request } = require("http");
const App = express();
App.use(cors());
App.use(express.json());

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-1-17T17:30:31.098Z",
    important: false,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2022-1-17T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-1-17T19:20:14.298Z",
    important: true,
  },
];

App.get("/", (request, response) => {
  response.send("Hello woorld there");
});
App.get("/notes/:id", (request, response) => {
  const currentid = Number(request.params.id);
  console.log(currentid);
  const thisNote = notes.find((note) => note.id === currentid);
  if (thisNote) {
    response.json(thisNote);
  } else {
    response
      .status(404)
      .json({ error: 404, message: `there is no note with id ${currentid}` });
  }
});
App.delete("/notes/:id", (request, response) => {
  const currentid = Number(request.params.id);
  notes = notes.filter((note) => note.id !== currentid);
  // console.log(currentid);
  // const thisNote = notes.find((note) => note.id === currentid);

  response.status(204).end();
  // .json({ error: 404, message: `there is no note with id ${currentid}` });
});
App.post("/notes/", (request, response) => {
  let myIncomingData = request.body;
  console.log(myIncomingData);
  // response.status(204).end();
  response.end;
});

App.listen("3001", () => {
  console.log("server listening on 3001");
});
