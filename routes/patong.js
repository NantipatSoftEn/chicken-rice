const express = require('express');
const router = express.Router();
const model = require('../configDB/sequelize')

/* GET users listing. */

class PatongRoutes {
  constructor() {
    this.router = router;
    this.router.get('/', this.homepage);
  }

  async homepage(req, res, next) {
    const foods = await model.food.findAll({
      order: [
          ['price', 'DESC']
      ]
    });

    const foods_cksub= foods.filter(food => food.type === "เมนูไก่สับ");
    const foods_noodle= foods.filter(food => food.type === "เมนูก๋วยเตี๋ยวไก่");
    const foods_ckrice= foods.filter(food => food.type === "เมนูข้าวมันไก่");
    const foodshot= foods.filter(food => food.type === "เมนูเด็ด");

    res.render('patong/index', 
  { foods:foods , 
    foods_cksub:foods_cksub,
    foods_noodle:foods_noodle,
    foods_ckrice:foods_ckrice,
    foodshot:foodshot
  });
  }

}



module.exports = new PatongRoutes().router;
