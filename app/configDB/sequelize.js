'use strict';
const config = require('./config');
const Sequelize = require('sequelize');
const host = (process.env.DOCKER === 'yes') ? process.env.DB_HOST_DOCKER : process.env.DB_HOST;
console.log(process.env.DOCKER);
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host,
    dialect: 'mysql',
    define: {
        timestamps: true
    },
});
sequelize.sync()
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