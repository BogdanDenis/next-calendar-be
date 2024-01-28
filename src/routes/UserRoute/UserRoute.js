const express = require('express');

const { UserController } = require('../../controllers');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await UserController.find();
  res.json(users);
});

router.post('/', async (req, res) => {
  const { body } = req;

  const user = await UserController.create(body);

  res.status(201);
  res.json(user);
});

module.exports = { UserRoute: router };
