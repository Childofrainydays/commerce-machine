const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get("/", async (req, res) =>{
  // find all categories
  try {
    // The findAll method lets us query all of the categories from the category table in the database, and is the equivalent of the SELECT * FROM categories SQL query.
    const categoryData = await Category.findAll({ 
      });
    res.status(200).json(categoryData);
  } catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, { // findByPk() is the equivalent of the SQL query SELECT * FROM category WHERE id = 1;
      // JOIN with travellers, using the Trip through table
      include: [{ model: Product, through: productTag, as: 'category_id' }]
    });
    if (!categoryData) {
      // If no category is found with the specified id, return a 404 status code
      res.status(404).json({ message: 'No category found with this id!' }); 
      return;
    }
    res.status(200).json(categoryData);
  } catch(err){
    res.status(500).json(err);
  }
});

// CREATE a new category
router.post('/', async (req, res) => {
  try { 
    // create method to create data in the database
    const categoryData = await Category.create(req.body); 
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  } 
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    // update method to update data in the database
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id, // The id of the category we want to update
      },
    });
    if(!categoryData){
      // If no category is found with the specified id, return a 404 status code
      res.status(404).json({ message: 'No category found with this id!' }); 
      return;
    }
    res.status(200).json(categoryData); // If the category is successfully updated, return a 200 status code
  } catch (err) {
    // If there's a server error, return a 500 status code
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value 
  try {
    // destroy method to delete data from the database
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id, // The id of the category we want to delete
      },
    });
    if(!categoryData){
      // If no category is found with the specified id, return a 404 status code
      res.status(404).json({ message: 'No category found with this id!' }); 
      return;
    }
    res.status(200).json(categoryData); // If the category is successfully deleted, return a 200 status code
  } catch(err){
    // If there's a server error, return a 500 status code
    res.status(500).json(err);
  } 
});

module.exports = router;