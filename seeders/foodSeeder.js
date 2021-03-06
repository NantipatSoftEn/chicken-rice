'use strict';

var data = [];

var list = [
  // เมนูไก่สับ
  ['ไก่สับจานเล็ก', '90','images/foods/ไก่สับ.JPG','','เมนูไก่สับ'], 
  ['ไก่สับจานกลาง','120','images/foods/ไก่สับ.JPG','','เมนูไก่สับ'], 
  ['ไก่สับจานใหญ่','250','images/foods/ไก่สับ.JPG', '','เมนูไก่สับ'],
  // เมนูก๋วยเตี๋ยวไก่
  ['ก๋วยเตี๋ยวไก่ฉีก','40','images/foods/ก๋วยเตี๋ยวไก่ฉีก.JPG','','เมนูก๋วยเตี๋ยวไก่'],
  ['ก๋วยเตี๋ยวไก่ตุ่น','40','images/foods/ก๋วยเตี๋ยวไก่ตุ๋น.JPG','','เมนูก๋วยเตี๋ยวไก่'],
  ['เกาเหลา (ธรรมดาหรือต้มยำ)','40','','',''],
  ['พิเศษ เพิ่มนอง','60','images/foods/น่องไก่.JPG','','เมนูก๋วยเตี๋ยวไก่'],
  // เมนูข้าวมันไก่
  ['ข้าวมันไก่ สูตรเบตง','50','images/foods/ข้าวมันไก่เบตง.JPG','','เมนูข้าวมันไก่'],
  // ['ข้าวมันไก่ สูตรเบตง พิเศษ','60','','','เมนูข้าวมันไก่'],
// เมนูเครื่องดื่ม
  // ['โค้ก','20','images/foods/โค้ก.PNG','','เมนูเครื่องดื่ม'],
  // ['น้ำชาดำ','20','images/foods/โค้ก.PNG','','เมนูเครื่องดื่ม'],
  // ['น้ำอัญชัญ','20','images/foods/น้ำชาดำ.JPG','','เมนูเครื่องดื่ม'],
  // ['น้ำกระเจี๊ยบ','20','','','เมนูเครื่องดื่ม'],
  // ['น้ำเก็กฮวย','20','images/foods/น้ำเก็กฮวย.JPG','','เมนูเครื่องดื่ม'],

//เมนูโจ็กตงตง
  ['โจ็กหมูเด้ง, ไก่ฉีก ,ไก่บ้าน','45','images/foods/โจ็ก.JPG','','เมนูเด็ด'],
  ['โจ็กข้าวไรซ์เบอร์รี่','55','','',''],
  // ['เพิ่มไก่ตุ๋น','20','','','เมนูโจ็กตงตง'],
  // ['เพิ่มหมูเด้ง','20','images/foods/หมูเด้ง.JPG','','เมนูโจ็กตงตง'],
  // ['เพิ่มหมู่ตุ๋น','20','','','เมนูโจ็กตงตง'],
  // ['เพิ่มไก่สับ','20','images/foods/ไก่สับ.JPG','','เมนูโจ็กตงตง'],
  // ['เพิ่มไก่ฉีก','20','images/foods/ฉีก.JPG','','เมนูโจ็กตงตง'],


//เมนูอื่นๆ 
  ['ฮ่องเต้น้ำมันหอย','20','images/foods/ฮ่องเต้น้ำมันหอย.JPG','','เมนูเด็ด'],
  ['หมูกรอบฮ่องกง','20','images/foods/หมูกรอบฮ่องกง.JPG','','เมนูเด็ด'],
  ['ไก่ฮ่องเต้','20','images/foods/ไก่ฮ่องเต้.JPG','','เมนูเด็ด'],
  ['สี่สหาย','20','images/foods/สี่สหาย.JPG','','เมนูเด็ด'],
  


];
for (var i = 0; i < list.length; i++) {
  data[i] = {
    id: i,
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
   console.log(data);
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