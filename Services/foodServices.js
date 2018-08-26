// GET     /forums              ->  index    หน้า list
// GET     /forums/new          ->  new      show form html ให้กรอกข้อมูล
// POST    /forums              ->  create   รับจาก form แบบ post
// GET     /forums/:forum       ->  show     แสดงข้อมูลที่ ละ 1
// GET     /forums/:forum/edit  ->  edit     show form edit
// PUT     /forums/:forum       ->  update   update data
// DELETE  /forums/:forum       ->  destroy
const model = require('../configDB/sequelize')

exports.getall =  async (req, res) => {
  const foods = await model.food.findAll({
    order: [
        ['price', 'DESC']
    ]
});
  const foodshot= foods.filter(food => food.type === "เมนูเด็ด");
  // const foodshot= foods.filter(food => food.type === "เมนู");
  res.render('index', { foods:foods , foodshot:foodshot});
};



