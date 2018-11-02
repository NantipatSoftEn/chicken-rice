


const types = {
    seafoord: 'อาหารทะเล',
    fastfood: 'อาหารจานเดียว',
    suggest: 'แนะนำ'
}

const baseURL = '/images/seafoods';

let imageAllLists = [
    { name: 'ปูผัดผงกะหรี่', type: types.seafoord, price: '400' , imagePath: `${baseURL}/ปูผัดผงกะหรี่.jpg` },
    { name: 'ต้มยำกุ้ง', type: types.seafoord, price: '400' , imagePath: `${baseURL}/ต้มยำกุ้ง.jpg` },
];


let imageSuggestLists = [
    { name: 'ปูผัดผงกะหรี่', type: types.suggest, price: '400' , imagePath: `${baseURL}/tongtongmenu1.jpg` },
    { name: 'ต้มยำกุ้ง', type: types.suggest, price: '400' , imagePath: `${baseURL}/tongtongmenu2.jpg` },
    { name: 'ต้มยำกุ้ง', type: types.suggest, price: '400' , imagePath: `${baseURL}/tongtongmenu3.jpg` },
    { name: 'ต้มยำกุ้ง', type: types.suggest, price: '400' , imagePath: `${baseURL}/tongtongmenu4.jpg` },
    { name: 'ต้มยำกุ้ง', type: types.suggest, price: '400' , imagePath: `${baseURL}/tongtongmenu5.jpg` },
    { name: 'ต้มยำกุ้ง', type: types.suggest, price: '400' , imagePath: `${baseURL}/tongtongmenu6.jpg` },
    { name: 'ต้มยำกุ้ง', type: types.suggest, price: '400' , imagePath: `${baseURL}/tongtongmenu8.jpg` },
    { name: 'ต้มยำกุ้ง', type: types.suggest, price: '400' , imagePath: `${baseURL}/tongtongmenu9.jpg` },
    { name: 'ต้มยำกุ้ง', type: types.suggest, price: '400' , imagePath: `${baseURL}/tongtongmenu10.jpg` },
    { name: 'ต้มยำกุ้ง', type: types.suggest, price: '400' , imagePath: `${baseURL}/tongtongmenu11.jpg` },
    { name: 'ต้มยำกุ้ง', type: types.suggest, price: '400' , imagePath: `${baseURL}/tongtongmenu12.jpg` },
    { name: 'ต้มยำกุ้ง', type: types.suggest, price: '400' , imagePath: `${baseURL}/tongtongmenu13.jpg` },
    { name: 'ต้มยำกุ้ง', type: types.suggest, price: '400' , imagePath: `${baseURL}/tongtongmenu14.jpg` },
    { name: 'ต้มยำกุ้ง', type: types.suggest, price: '400' , imagePath: `${baseURL}/tongtongmenu15.jpg` },
];

module.exports = {
    imageAllLists,
    imageSuggestLists
}