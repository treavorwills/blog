const { User } = require('../models');

const userData = [
    {
        name: 'Nicolas Cage',
        email: 'ghostRider@gmail.com',
        password: 'declarationOfIndependence',
    },
    {
        name: 'Randy Newman',
        email: 'friend.in.me@gmail.com',
        password: 'friendinme',
    },
    {
        name: 'Miles Teller',
        email: 'rooster@gmail.com',
        password: 'rooster',
    },
    {
        name: 'Jeff Bridges',
        email: 'dude@gmail.com',
        password: 'thedude1',
    },
    {
        name: 'Matt Damon',
        email: 'martian@yahoo.com',
        password: 'theMartian',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;