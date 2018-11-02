'use strict';
const config = require('./config');
const Sequelize = require('sequelize');

const server = process.env.DB_NAME || config.server;
const username = process.env.DB_USERNAME || config.username;
const password = process.env.DB_PASSWORD || config.password

const sequelize = new Sequelize(server, username, password, {
    host: process.env.DB_HOST_DOCKER || 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true
    },
});
const op = Sequelize.Op;


const model = {};
model.Sequelize = Sequelize;
model.sequelize = sequelize;
model.op = op;

model.food =  require('../models/foods')(sequelize, Sequelize);
// model.cart =  require('../models/cart')(sequelize, Sequelize);
// model.product =  require('../models/product')(sequelize, Sequelize);
// model.project =  require('../models/project')(sequelize, Sequelize);
// model.users=  require('../models/user')(sequelize, Sequelize);

// model.cart.belongsTo(model.product);
// model.product.hasMany(model.cart); // take userId to reseration
module.exports = model;