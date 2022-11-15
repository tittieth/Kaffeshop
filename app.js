const products = [
  {
    img: ['img/produkt-1-kaffepasar.jpg', 'img/produkt-1-kaffepasar-mirror.jpg'],
    imgAlt: '',
    name: 'Sibaristica',
    desc: 'Bönor från Guatemala och Colombia',
    price: 129,
    amount: 0,
  },
  {
    img: ['img/produkt-2-andrakaffapasar.jpg', 'img/produkt-2-andrakaffapasar-mirror.jpg'],
    imgAlt: '',
    name: 'Blue Magic',
    desc: 'Espressobönor',
    price: 119,
    amount: 0,
  },
  {
    img: ['img/produkt-3-merkaffe.jpg', 'img/produkt-3-merkaffe-mirror.jpg'],
    imgAlt: '',
    name: 'Specialty Beans',
    desc: '"Speciella" bönor från Ethiopien',
    price: 129,
    amount: 0,
  },
  {
    img: ['img/produkt-4-kopp.jpg', 'img/produkt-4-kopp-mirror.jpg'],
    imgAlt: '',
    name: 'Rustik',
    desc: 'Svart kopp i keramik',
    price: 49,
    amount: 0,
  },
  {
    img: ['img/produkt-5-kopp2.jpg', 'img/produkt-5-kopp2-mirror.jpg'],
    imgAlt: '',
    name: 'Grön',
    desc: 'Kopp i poppande grön färg',
    price: 39,
    amount: 0,
  },
  {
    img: ['img/produkt-6-v60.jpg', 'img/produkt-6-v60-mirror.jpg'],
    imgAlt: '',
    name: 'V60',
    desc: 'V60 bryggaren som tilltalar din inre hipster',
    price: 599,
    amount: 0,
  },
  {
    img: ['img/produkt-7-aeropress.jpg', 'img/produkt-7-aeropress-mirror.jpg'],
    imgAlt: '',
    name: 'Aeropress',
    desc: 'För dig som vill kunna göra kaffe var som helst!',
    price: 499,
    amount: 0,
  },
  {
    img: ['img/produkt-8-kopp3.jpg', 'img/produkt-8-kopp3-mirror.jpg'],
    imgAlt: '',
    name: 'Fancy',
    desc: 'För ditt finbesök',
    price: 49,
    amount: 0,
  },
  {
    img: ['img/produkt-9-franskpress.jpg', 'img/produkt-9-franskpress-mirror.jpg'],
    imgAlt: '',
    name: 'Franskpress',
    desc: 'Den klassiska Franskpressen går alltid hem',
    price: 199,
    amount: 0,
  },
  {
    img: ['img/produkt-10-kopp4.jpg', 'img/produkt-10-kopp4-mirror.jpg'],
    imgAlt: '',
    name: 'Orange',
    desc: 'En större kopp för dig med ett större beroende',
    price: 39,
    amount: 0,
  },
];

const productGrid = document.querySelector('#product-grid');
const basketGrid = document.querySelector('#basket-grid');

function renderBasket() {
  basketGrid.innerHTML = 'Din varukorg är tom, fyll på!';
  for (let i = 0; i < products.length; i += 1) {
    if (products[i].amount > 0) {
      basketGrid.innerHTML += `
	    <div class="item">
	    <img src="${products[i].img[0]}" height="100" width="100" alt="${products[i].imgAlt}" />
	    <div class="item-content">
	      <div class="item-info">
	        <h3>${products[i].name}</h3>
	        <p>${products[i].desc}</p>
	        <p>${products[i].price * products[i].amount}kr</p>
	      </div>
	      <div class="item-selection">
	        <button>+</button>
	        <p>${products[i].amount}</p>
	        <button>-</button>
	      </div>
	    </div>
	    </div>
	  `;
    }
  }
}

function renderProducts() {
  productGrid.innerHTML = '';

  for (let i = 0; i < products.length; i += 1) {
    productGrid.innerHTML += `
        <div class="product-card" data-id="${i}">
            <div class="image">
                <img
                    src="${products[i].img[0]}"
                    height="100"
                    width="100"
                    alt="${products[i].imgAlt}"
                />
            </div>
            <div class="product-info">
                <h3>${products[i].name}</h3>
                <p>${products[i].desc}</p>
                    <div class="product-selection">
                        <p>${products[i].price}kr</p>
                        <button class="button-remove" data-id="${i}">-</button>
                        <p>${products[i].amount}</p>
                        <button class="button-add" data-id="${i}">+</button>
                    </div>
            </div>
        </div>
        `;
  }
  const addBtn = document.querySelectorAll('.button-add');
  addBtn.forEach(btn => {
    btn.addEventListener('click', add);
  });
  const removeBtn = document.querySelectorAll('.button-remove');
  removeBtn.forEach(btn => {
    btn.addEventListener('click', remove);
  });
  renderBasket();
}

function add() {
  products[this.dataset.id].amount += 1;
  renderProducts();
}

function remove() {
  if (products[this.dataset.id].amount > 0) {
    products[this.dataset.id].amount -= 1;
    renderProducts();
  }
}

renderProducts();
