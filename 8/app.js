'use strict';
const fitlerPopup = document.querySelector('.filterPopup');
const fitlerLabel = document.querySelector('.filterLabel');
const filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', () => {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(header => {
    header.addEventListener('click', event => {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', () => {
    filterSizes.classList.toggle('hidden');
});
/*let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function () {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function () {
    filterSizes.classList.toggle('hidden');
});
const basket = {};
const basketCounterEl = document.querySelector('.cartIconWrap span');
const basketTotalEl = document.querySelector('.basketTotal');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
const basketEl = document.querySelector('.basketOpen');

let addBtn = document.querySelectorAll('.addToBacketBtn');
let countOfGoods = document.querySelector('.countGoods');
[...addBtn].forEach(element => {
    let addBtnMini = element;
    addBtnMini.addEventListener('click', event => {
        countOfGoods.textContent = parseInt(parseInt(countOfGoods.innerHTML) + 1);
        const featuredItemEl = event.target.closest('.featuredItem');
        const id = +featuredItemEl.dataset.id;
        const name = featuredItemEl.dataset.name;
        const price = +featuredItemEl.dataset.price;
        addToCart(id, name, price);
    });
}
);
const cart = document.querySelector('.cartIcon');
const backet = document.querySelector('.basketOpen');
cart.addEventListener('click', () => {
    backet.classList.toggle('open');
});
function getTotalBasketCount() {
    return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
}
function getTotalBasketPrice() {
    return Object
        .values(basket)
        .reduce((acc, product) => acc + product.price * product.count, 0);
}
function renderProductInBasket(productId) {
    const basketRowEl = basketEl
        .querySelector(`.basketRow[data-id="${productId}"]`);
    if (!basketRowEl) {
        renderNewProductInBasket(productId);
        return;

    }

    const product = basket[productId];

    basketRowEl.querySelector('.productCount').textContent = product.count;
    basketRowEl
        .querySelector('.productTotalRow')
        .textContent = (product.price * product.count).toFixed(2);
}
function addToCart(id, name, price) {

    if (!(id in basket)) {
        basket[id] = { id: id, name: name, price: price, count: 0 };
    }
    basket[id].count++;
    basketCounterEl.textContent = getTotalBasketCount().toString();
    basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);
    renderProductInBasket(id);
}
function renderNewProductInBasket(productId) {
    const productRow = `
      <div class="basketRow" data-id="${productId}">
        <div>${basket[productId].name}</div>
        <div>
          <span class="productCount">${basket[productId].count}</span> шт.
        </div>
        <div>$${basket[productId].price}</div>
        <div>
          $<span class="productTotalRow">${(basket[productId].price * basket[productId].count).toFixed(2)}</span>
        </div>
      </div>
      `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}
/*class Product {
    constructor(name, count, price) {
        this.name = name;
        this.count = count;
        this.price = price;
    }
    addToCart() {
        return `
        <ul class="basketNameofCrit">
                    <li class="basketNameofCritMini">
                        <span class="basketNameofCritText">
                            ${this.name}
                        </span>
                    </li>
                    <li class="basketNameofCritMini">
                        <span class="basketNameofCritText">
                            ${this.count}
                        </span>
                    </li>
                    <li class="basketNameofCritMini">
                        <span class="basketNameofCritText">
                            ${this.price}
                        </span>
                    </li>
                    <li class="basketNameofCritMini">
                        <span class="basketNameofCritText">
                            price
                        </span>
                    </li>
                </ul>
        `


    }
}*/
