
const express = require("express");
const server = express();
server.use(express.json());

const projects = [];

// Middleware Check if project exists
function checkProjectExists(req, res, next) {

  const {id} = req.params
  const project = projects.find(p => p.id == id); 

  if (!project) {

    return res.status(400).json({error: 'Project not find'});

  }
  return next();
}

// Middlewares count requisitions
function countRequisitions(req, res, next) { 
  console.count("Número de requisições");

  return next();


}

server.use(countRequisitions);

// List all projects
server.get("/projects/", (req, res) => {

    return res.json(projects);

})

// Add Projects
server.post("/projects/", (req, res) => { 

  const { id, title } = req.body
  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);
  return res.json(projects);

})

// Edit project title
server.put("/projects/:id", checkProjectExists, (req, res) => {

  const { id } = req.params
  const {title} = req.body
  const project = projects.find(p => p.id == id )

  project.title = title;
  return res.json(projects);

})

// Delete project 
server.delete("/projects/:id", checkProjectExists, (req, res) => { 

  const { id } = req.params
  const projectIndex = projects.findIndex(p => p.id == id)
  projects.splice(projectIndex, 1)

  return res.json(projects)
})


// Add task to project
server.post("/projects/:id/tasks", checkProjectExists, (req, res) => { 
  const { title } = req.body;
  const { id } = req.params;

  const project = projects.find(p => p.id == id)
  project.tasks.push(title);
  return res.json(project);

})


server.listen(3000);
