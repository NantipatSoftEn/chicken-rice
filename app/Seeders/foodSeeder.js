'use strict';

var data = [];

var list = [
  // เมนูไก่สับ
  ['ไก่สับจานเล็ก', '90','../public/images/foods/ไก่สับ.JPG','','เมนูไก่สับ'], 
  ['ไก่สับจานกลาง','120','../public/images/foods/ไก่สับ.JPG','','เมนูไก่สับ'], 
  ['ไก่สับจานใหญ่','250','../public/images/foods/ไก่สับ.JPG', '','เมนูไก่สับ'],
  // เมนูก๋วยเตี๋ยวไก่
  ['ก๋วยเตี๋ยวไก่ฉีก','40','../public/images/foods/ไก่ฉีก.JPG','','เมนูก๋วยเตี๋ยวไก่'],
  ['ก๋วยเตี๋ยวไก่ตุ่น','40','../public/images/foods/ไก่ตุ่น.JPG','','เมนูก๋วยเตี๋ยวไก่'],
  ['เกาเหลา (ธรรมดาหรือต้มยำ)','40','','','เมนูก๋วยเตี๋ยวไก่'],
  ['พิเศษ เพิ่มนอง','60','../public/images/foods/น่องไก่.JPG','','เมนูก๋วยเตี๋ยวไก่'],
  // เมนูข้าวมันไก่
  ['ข้าวมันไก่ สูตรเบตง','50','../public/images/foods/ข้าวมันไก่เบตง.JPG','','เมนูข้าวมันไก่'],
  ['ข้าวมันไก่ สูตรเบตง พิเศษ','60','','','เมนูข้าวมันไก่'],
// เมนูเครื่องดื่ม
  ['โค้ก','20','../public/images/foods/โค้ก.PNG','','เมนูเครื่องดื่ม'],
  ['น้ำชาดำ','20','../public/images/foods/โค้ก.PNG','','เมนูเครื่องดื่ม'],
  ['น้ำอัญชัญ','20','../public/images/foods/น้ำชาดำ.JPG','','เมนูเครื่องดื่ม'],
  ['น้ำกระเจี๊ยบ','20','','','เมนูเครื่องดื่ม'],
  ['น้ำเก็กฮวย','20','../public/images/foods/น้ำเก็กฮวย.JPG','','เมนูเครื่องดื่ม'],

//เมนูโจ็กตงตง
  ['โจ็กหมูเด้ง, ไก่ฉีก ,ไก่บ้าน','45','../public/images/foods/โจ็ก.JPG','','เมนูโจ็กตงตง'],
  ['โจ็กข้าวไรซ์เบอร์รี่','55','','','เมนูโจ็กตงตง'],
  ['เพิ่มไก่ตุ๋น','20','','','เมนูโจ็กตงตง'],
  ['เพิ่มหมูเด้ง','20','../public/images/foods/หมูเด้ง.JPG','','เมนูโจ็กตงตง'],
  ['เพิ่มหมู่ตุ๋น','20','','','เมนูโจ็กตงตง'],
  ['เพิ่มไก่สับ','20','../public/images/foods/ไก่สับ.JPG','','เมนูโจ็กตงตง'],
  ['เพิ่มไก่ฉีก','20','../public/images/foods/ฉีก.JPG','','เมนูโจ็กตงตง'],


//เมนูอื่นๆ 
  ['ฮ่องเต้น้ำมันหอย','../public/images/foods/ฮ่องเต้น้ำมันหอย.JPG','','','เมนูอื่นๆ '],
  ['หมูกรอบฮ่องกง','../public/images/foods/หมูกรอบฮ่องกง.JPG','','','เมนูอื่นๆ '],
  ['ไก่ฮ่องเต้','../public/images/foods/ไก่ฮ่องเต้.JPG','','','เมนูอื่นๆ '],
  ['สี่สหาย','../public/images/foods/สี่สหาย.JPG','','','เมนูอื่นๆ '],
  


];
for (var i = 0; i < list.length; i++) {
  data[i] = {
    id: '',
    name:list[i][0],
    price:list[i][1],
    image:list[i][2],
    des:list[i][3],
    type:list[i][4],
    created_at: new Date(),
    updated_at: new Date()
  };
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('foods', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};