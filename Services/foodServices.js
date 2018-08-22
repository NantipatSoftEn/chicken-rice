// GET     /forums              ->  index    หน้า list
// GET     /forums/new          ->  new      show form html ให้กรอกข้อมูล
// POST    /forums              ->  create   รับจาก form แบบ post
// GET     /forums/:forum       ->  show     แสดงข้อมูลที่ ละ 1
// GET     /forums/:forum/edit  ->  edit     show form edit
// PUT     /forums/:forum       ->  update   update data
// DELETE  /forums/:forum       ->  destroy
const model = require('../configdb/sequelize')

exports.test = function (req, res) {
  model.food.findAll({ where: {
    type: 'เมนูไก่สับ'
  }}).then(result => {
    res.render('index', { data: result});
  })
};

