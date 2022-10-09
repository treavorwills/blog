// paths linking to the specific seed files
const seedEntries = require('./entry-seeds.js');
const seedUsers = require('./user-seeds.js');
// const seedComments = require('./comment-seeds.js');

// require sequelize
const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedEntries();
    console.log('\n----- CATEGORIES SEEDED -----\n');
};

seedAll();