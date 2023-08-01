// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Each product belongs to one category. 
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products. 
// Each category can have many products.
// Resource: https://sequelize.org/master/manual/assocs.html#one-to-many-relationships
Category.hasMany(Product, {
  foreignKey: 'category_id', // The foreign key is the column in the target model that establishes the connection
});

// Products belongToMany Tags (through ProductTag)
// Each product can have multiple tags and each tag can have many products.
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
// Each tag can have multiple products and each product can have many tags.
Tag.belongsToMany(Product, {
  through: ProductTag, 
  foreignKey: 'tag_id', 
});

// Export the models with their associations
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
