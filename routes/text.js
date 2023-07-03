const express = require('express');

const router = express.Router();
const Text = require('../models/text.js');

// ...

// Create a new text
router.post('/', async (req, res) => {
    try {
      const { content } = req.body;
      const text = new Text({ content });
      await text.save();
      res.status(201).json({ _id: text._id, content: text.content });
    } catch (error) {
      console.error('Error creating text:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const text = await Text.findById(id);
        if(!text) {
            res.status(404).json({message: 'text not found'});
        }
        else {
            res.json(text);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

module.exports = router;