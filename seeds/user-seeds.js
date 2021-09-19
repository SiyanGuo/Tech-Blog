const sequelize = require('../config/connection');
const { User} = require('../models');

const userdata = [
  {
    username: 'userA60',
    password: '000000'
  },
  {
    username: 'userB61',
    password: '111111'
  },
  {
    username: 'userC62',
    password: '222222'
  },
  {
    username: 'userD63',
    password: '333333'
  },
  {
    username: 'djiri4',
    password: 'password123'
  },
  {
    username: 'msprague5',
    password: 'password123'
  },
  {
    username: 'mpergens6',
    password: 'password123'
  },
  {
    username: 'tpenniell7',
    password: 'password123'
  },
  {
    username: 'msabbins8',
    password: 'password123'
  },
  {
    username: 'jmacarthur9',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
