const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Project = require("../models/project");
const Task = require("../models/task");

// GET route => to get all the projects

router.get("/projects", async (req, res, next) => {
  try {
    const allProjects = await Project.find().populate("tasks");
    res.json({ allProjects: allProjects });
  } catch (error) {
    res.json(error);
  }
});

// POST route => to create a new project
router.post("/projects", async (req, res, next) => {
  // utilizamos el método create de mongoose y pasamos los parámetros del body para crear nuestro nuevo 'project' y guardarlo en BDD.
  const project = {
    title: req.body.title,
    description: req.body.description,
    tasks: [],
  };
  try {
    const newProject = await Project.create(project); //creem el projecte, si fem servir create no cal fer new + save
    res.json(newProject); //ja es objecte, no calen els {}
  } catch (error) {
    res.json(error);
  }
});

// GET route => to get a specific project/detailed view

router.get("/projects/:id", async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json(error, "Specified id is not valid");
  }
  try {
    const theNewProject = await Project.findById(req.params.id);
    res.json(theNewProject);
  } catch (error) {
    res.json(error);
  }
});

// PUT route => to update a specific project

router.put("/projects/:id", async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  const updatedProject = {
    title: req.body.title,
    description: req.body.description,
    tasks: [],
  };
  try {
    const theUpdatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      updatedProject
    );
    res.json(theUpdatedProject);
  } catch (error) {
    res.json(error);
  }
});


// DELETE route => para eliminar un project específico
router.delete('/projects/:id', async (req, res, next)=>{

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json(error, "Specified id is not valid");
      }
      try {
        const removedProject = await Project.findByIdAndRemove(req.params.id);
        res.json(removedProject);
      } catch (error) {
        res.json(error);
      }
  
  })

module.exports = router;
