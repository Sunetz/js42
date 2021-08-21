const goods = [
    {
        id: 0,
        title: 'pencil',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quia?',
        price: 2

    },
    {
        id: 1,
        title: 'pen',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quia?',
        price: 3

    },
    {
        id: 2,
        title: 'album',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quia?',
        price: 5

    },
    {
        id: 3,
        title: 'paper',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quia?',
        price: 4

    },
];

const cart = [];

renderShop();

function renderShop(){
    const container = document.createElement('div');
    container.classList.add('container');
    goods.forEach((good, index)=>{
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `<h3>${good.title}</h3>
    <p>${good.description}</p>
    <p>price: ${good.price} &euro;
    </p>
    <button data-id=${good.id}>add to cart</button>`;
    container.append(item);
})
const buttons = container.querySelectorAll('[data-id]');
    buttons.forEach(btn =>{
        btn.onclick = goodAddHandler;
    })
document.querySelector('.left').append(container);
}

function goodAddHandler(event){
    const id = event.target.dataset.id;
    
    const item = goods.find(good => good.id == id)
    const isGoodInCart = cart.find(good => good.id == id);
    if(isGoodInCart){
        isGoodInCart.quantity++
    }
    else{
        cart.push({
            id,
            title: item.title,
            price: item.price,
            quantity: 1
        })
    }
    renderCart()
}

function renderCart(){
    const table = document.createElement('table');
}

