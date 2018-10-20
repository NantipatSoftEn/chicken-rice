


const types = {
    seafoord: 'อาหารทะเล',
    fastfood: 'อาหารจานเดียว',
    suggest: 'แนะนำ'
}

const baseURL = '/images/seafoods';

let imageAllLists = [
    { name: 'ปูผัดผงกะหรี่', type: types.seafoord, price: '400' , imagePath: `${baseURL}/ปูผัดผงกะหรี่.jpg` },
    { name: 'ต้มยำกุ้ง', type: types.seafoord, price: '400' , imagePath: `${baseURL}/ต้มยำกุ้ง.jpg` }
];


let imageSuggestLists = [
    { name: 'ปูผัดผงกะหรี่', type: types.suggest, price: '400' , imagePath: `${baseURL}/ปูผัดผงกะหรี่.jpg` },
    { name: 'ต้มยำกุ้ง', type: types.suggest, price: '400' , imagePath: `${baseURL}/ต้มยำกุ้ง.jpg` },
];

module.exports = {
    imageAllLists,
    imageSuggestLists
}