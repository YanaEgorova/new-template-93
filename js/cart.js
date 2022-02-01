import { products } from './data/products.js';
import { item, subItem } from './templates/product-item.js';

const productsList = document.querySelector('.js_products__list');
const productsSubList = document.querySelector('.js_products__sub-list');

products.forEach(product => {
    productsList.insertAdjacentHTML('beforeend',item(product));
    productsSubList.insertAdjacentHTML('beforeend',subItem(product));
})
