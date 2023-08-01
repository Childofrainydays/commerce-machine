const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags
router.get('/', async (req, res) => {
  try {
    // findAll to get all tags
    const tagData = await Tag.findAll(); // The findAll() method finds all of the tags from the tag table in the database
    
    // If the tags are successfully fetched, the response will be returned as JSON data  
    res.status(200).json(tagData); // 200: OK
  } catch (err) {
    // If there's an error
    res.status(500).json(err); // return 500: Internal Server Error as JSON data
  }
});

router.get('/:id',async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, { // findByPk() finds a single tag by its primary key (id)
      // JOIN with travellers, using the Trip through table
      include: [{ model: Product }]
    });
    if (!tagData) { //!tagData means no tag data was found
      // If no tag is found with the specified id, return a 404 status code
      res.status(404).json({ message: 'No tag found with this id!' }); 
      return;
    }
    res.status(200).json(tagData);
  } catch(err){
    // If there's an error, the error will be returned as JSON data
    res.status(500).json(err); // 500 Internal Server Error
  }
});

// CREATE a new tag
router.post('/', async (req, res) => {
  try { 
    // create method to create data in the database using the req.body 
    const tagData = await Tag.create(req.body);
    // If the tag is successfully created, the new response will be returned as JSON data
    res.status(200).json(tagData);
  } catch (err) {
    // If there's an error, the error will be returned as JSON data
    res.status(400).json(err); // 400 Bad Request
  }
});

// UPDATE a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: { // where: specifies which tag we want to update
        id: req.params.id, // req.params.id is the id of the tag we want to update
      }
    });
    
    // If no tag is found with the specified id, return a 404 status code
    if (tagData[0] === 0) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    // Fetch the updated tag after the update operation
    const updatedTag = await Tag.findByPk(req.params.id); //findByPk() finds a single tag by its primary key (id)

    // If the tag is successfully updated, the updated response will be returned as JSON data
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(400).json(err); // 400 Bad Request
  }
});

// DELETE tag by its `id` value
router.delete('/:id', async (req, res) => {
try {
  const tagData = await Tag.destroy({ // destroy() deletes data from the database
    where: {
      id: req.params.id, // req.params.id is the id of the tag we want to delete
    },
  });

  // If no tag is found with the specified id, return a 404 status code
  if (!tagData) { 
    res.status(404).json({ message: 'No tag found with this id!' });
    return;
  }

  res.status(200).json(tagData); // 200: OK
} catch(err){
  res.status(500).json(err); // 500: Internal Server Error
}
});

// Export the router
module.exports = router;
