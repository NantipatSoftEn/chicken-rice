// GET     /forums              ->  index    หน้า list
// GET     /forums/new          ->  new      show form html ให้กรอกข้อมูล
// POST    /forums              ->  create   รับจาก form แบบ post
// GET     /forums/:forum       ->  show     แสดงข้อมูลที่ ละ 1
// GET     /forums/:forum/edit  ->  edit     show form edit
// PUT     /forums/:forum       ->  update   update data
// DELETE  /forums/:forum       ->  destroy
const model = require('../configDB/sequelize')

exports.getall = function (req, res) {
  model.food.findAll().then(result => {
    res.render('index', { getall: result});
  })
};

exports.tophot = function (req, res) {
  model.food.findAll({
    where: {
      type: 'เมนูเด็ด'
    }
  }).then(result => {
    res.render('', { tophot: result});
  })
};


