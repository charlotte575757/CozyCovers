const ITEMS = [
    {
        id: 1,
        name: 'SIMPLE PINK KNITTED CARDIGAN (WOMEN)',
        price: 28,
        image: 'jackets/knittedjacketw06.jpg',
        qty: 1,
    },
    {
        id: 2,
        name: 'SIMPLE DENIM JACKET (WOMEN)',
        price: 28,
        image: 'jackets/denimjacketw01.jpg',
        qty: 1,
    },
    {
        id: 3,
        name: 'SIMPLE BROWN CARDIGAN (WOMEN)',
        price: 28,
        image: 'jackets/knittedjacketw02.jpg',
        qty: 1,
    },
    {
        id: 4,
        name: 'LOOSE LANTERN SLEEVE GRAY CARDIGAN (WOMEN)',
        price: 30.60,
        image: 'jackets/knittedjacketw01.jpg',
        qty: 1,
    },
    {
        id: 5,
        name: 'PINK AND WHITE DESIGNED WINDBREAKER (WOMEN)',
        price: 30,
        image: 'jackets/windbreakerw02.jpg',
        qty: 1,
    },
    {
        id: 6,
        name: 'GREY AND WHITE DESIGNED WINDBREAKER (WOMEN)',
        price: 30,
        image: 'jackets/windbreakerw03.jpg',
        qty: 1,
    },
    {
        id: 7,
        name: 'CROPPED CREAM CARDIGAN (WOMEN)',
        price: 30,
        image: 'jackets/knittedjacketw03.jpg',
        qty: 1,
    },
    {
        id: 8,
        name: 'SIMPLE PURPLE DENIM JACKET (WOMEN)',
        price: 30,
        image: 'jackets/denimjacketw02.jpg',
        qty: 1,
    },
    {
        id: 9,
        name: 'SIMPLE BEIGE WINDBREAKER (WOMEN)',
        price: 28,
        image: 'jackets/windbreakerw06.jpg',
        qty: 1,
    },
    {
        id: 10,
        name: 'BLUE DESIGINED CARDIGAN (WOMEN)',
        price: 32,
        image: 'jackets/knittedjacketw04.jpg',
        qty: 1,
    },
    {
        id: 11,
        name: 'SIMPLE DARK GREEN DENIM JACKET (MEN)',
        price: 27,
        image: 'jackets/denimjacketm04.jpg',
        qty: 1,
    },
    {
        id: 12,
        name: 'SIMPLE LIGHT BROWN WINDBREAKER (MEN)',
        price: 28,
        image: 'jackets/windbreakerm03.jpg',
        qty: 1,
    },
    {
        id: 13,
        name: 'SIMPLE BLACK WINDBREAKER (MEN)',
        price: 28,
        image: 'jackets/windbreakerm06.jpg',
        qty: 1,
    },
    {
        id: 14,
        name: 'BLUE & WHITE CHECKERED CARDIGAN (MEN)',
        price: 36,
        image: 'jackets/knittedjacketm03.jpg',
        qty: 1,
    },
    {
        id: 15,
        name: 'SIMPLE RED DENIM JACKET (MEN)',
        price: 30,
        image: 'jackets/denimjacketm02.jpg',
        qty: 1,
    },
    {
        id: 16,
        name: 'CREAM CHECKERED CARDIGAN (MEN)',
        price: 32,
        image: 'jackets/knittedjacketm04.jpg',
        qty: 1,
    },
    {
        id: 17,
        name: 'BROWN CHECKERED CARDIGAN (MEN)',
        price: 30,
        image: 'jackets/knittedjacketm01.jpg',
        qty: 1,
    },
    {
        id: 18,
        name: 'SIMPLE GREEN WINDBREAKER (MEN)',
        price: 28,
        image: 'jackets/windbreakerm02.jpg',
        qty: 1,
    },
    {
        id: 19,
        name: 'SIMPLE LIGHT BROWN CARDIGAN (MEN)',
        price: 28,
        image: 'jackets/knittedjacketm06.jpg',
        qty: 1,
    },
    {
        id: 20,
        name: 'BLACK AND WHITE DESIGNED WINDBREAKER (MEN)',
        price: 30,
        image: 'jackets/windbreakerm05.jpg',
        qty: 1,
    }
]


const openBtn = document.getElementById('open_cart_btn')
const cart = document.getElementById('sidecart')
const closeBtn = document.getElementById('close_btn')
const backdrop = document.querySelector('.backdrop')
const itemsE1 = document.querySelector('.items')
const cartItems = document.querySelector('.cart_items')
const itemsNum = document.getElementById('items_num')
const subtotalPrice = document.getElementById('subtotal_price')



let cart_data = []



openBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)
backdrop.addEventListener('click', closeCart)

renderItems()
renderCartItems()


//open cart
function openCart() {
    cart.classList.add('open')
    backdrop.style.display = 'block'

    setTimeout(() => {
        backdrop.classList.add('show')
    }, 0)
}

//close cart
function closeCart() {
    cart.classList.remove('open')
    backdrop.classList.remove('show')

    setTimeout(() => {
        backdrop.style.display = 'none'
    }, 500)
}

//Add Items to Cart
function addItem(idx, itemId) {
    //find same items
    const foundedItem = cart_data.find((item) => item.id.toString() === itemId.toString())

    if (foundedItem) {
        //increase item qty
        increaseQty(itemId)
    }
    else {
        cart_data.push(ITEMS[idx])
    }
    updateCart()
    openCart()
}

//Remove Items from Cart
function removeCartItem(itemId) {
    cart_data = cart_data.filter((item) => item.id != itemId)

    updateCart()
}

//increase qty
function increaseQty(itemId) {
    cart_data = cart_data.map(item => item.id.toString() === itemId.toString() ? { ...item, qty: item.qty + 1 } : item)

    updateCart()
}

//decrease qty
function decreaseQty(itemId) {
    cart_data = cart_data.map(item => item.id.toString() === itemId.toString() ? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty} : item)

    updateCart()
}

//calculate item number
function calcItemNum() {
    let itemsCount = 0

    cart_data.forEach((item) => (itemsCount += item.qty))

    itemsNum.innerText = itemsCount
}

//calculate subtotal price
function calcSubtotalPrice(){
    let subtotal = 0

    cart_data.forEach((item) => (subtotal += item.price * item.qty))

    subtotalPrice.innerText = subtotal
}

//render items
function renderItems() {
    ITEMS.forEach((item, idx) => {
        const itemE1 = document.createElement('div')
        itemE1.classList.add('item')
        itemE1.onclick = () => addItem(idx, item.id)
        itemE1.innerHTML =
            `<img src="${item.image}" alt="">
        <button>Add to Cart</button>`
        itemsE1.appendChild(itemE1)
    })
}

//display / render cart items
function renderCartItems() {
    //remove everything from cart
    cartItems.innerHTML = ''
    cart_data.forEach(item => {
        const cartItem = document.createElement('div')
        cartItem.classList.add('cart_item')
        cartItem.innerHTML = `
        <div class="remove_item" onclick="removeCartItem(${item.id})">
        <span>&times;</span>
    </div>
    <div class="item_img">
        <img src="${item.image}" alt="">
    </div>
    <div class="item_details">
        <p>${item.name}</p>
        <strong>$${item.price}</strong>
        <div class="qty">
            <span onclick="decreaseQty(${item.id})">-</span>
            <strong>${item.qty}</strong>
            <span onclick="increaseQty(${item.id})">+</span>
        </div>
    </div>
        `
        cartItems.appendChild(cartItem)
    })
}

function updateCart() {
    //render cart items with updated data
    renderCartItems()
    //update items number in cart
    calcItemNum()
    //update subtotal price
    calcSubtotalPrice()

}