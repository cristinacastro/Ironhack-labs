const express = require('express');
const mongoose = require('mongoose');
const Task = require('../models/task');
const Project = require('../models/project');
const { findByIdAndUpdate } = require('../models/project');

const router  = express.Router();

// GET route => para obtener un task específico
router.get("/tasks/:taskId", async (req, res, next) => {
    try{
    const task = await Task.findById(req.params.id)
    res.json(task)
    } catch (error){
    res.json(error)
    }
  });

// POST route => to create a new task

router.post("/tasks", async (req, res, next) => {
    
    const task = {
        title: req.body.title,
        description: req.body.description,
        project: req.body.project //per el id què en majúscules?
      };
//com relacionem la tasca x amb el projecte x aquí? al key
      try {
        const oneTask = await Task.create(task); //creem el projecte, si fem servir create no cal fer new + save
        await Project.findByIdAndUpdate(req.body.project, {$push:{tasks: oneTask}})
        res.json(oneTask); //ja es objecte, no calen els {}
      } catch (error) {
        res.json(error);
      }

  });


// PUT route => to update a specific task
router.put("/tasks/:id", async (req, res, next) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: "Specified id is not valid" });
        return;
      }
//no cal crear nonva constant amb el cos del task perque ja lagafa del moment de crearla

      try {
        await Task.findByIdAndUpdate(req.params.id, req.body );
        res.json({message: `Task with ${req.params.id} is updated successfully.`}); //no cal el objecte oerque no volem que ens mmostri lobjecte actualitzat, llavors tamoc cal creear constant, nomes fiquem el missatge i prou
      } catch (error) {
        res.json(error);
      }
  });

// DELETE route => to delete a specific task
router.delete("/tasks/:id", async (req, res, next) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json(error, "Specified id is not valid");
      }
      try {
        await Task.findByIdAndRemove(req.params.id);
        res.json({message: `Task with ${req.params.id} is removed successfully.`});
      } catch (error) {
        res.json(error);
      }
  });

module.exports = router;