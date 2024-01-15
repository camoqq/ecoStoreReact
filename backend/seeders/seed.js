const db = require('../config/connection.js');
const { User, Product, Order } = require('../models/index.js');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');
const orderSeeds = require ('./orderSeeds.json');
const cleanDB = require('./cleanDB.js');

db.once('open', async () => {
  try {
    // Clean the 'User' collection
    await cleanDB('User', 'user');

  await User.create(userSeeds);
  await Product.create(productSeeds);
  await orderSeeds.create(orderSeeds);

    console.log('All done!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit(0);
  }
});
