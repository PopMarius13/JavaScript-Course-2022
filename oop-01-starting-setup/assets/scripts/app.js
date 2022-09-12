class Component {
    constructor(renderHookId, shouldRender = true) {
        this.hookID = renderHookId
        if (shouldRender) {
            this.render()
        }
    }

    render() {
    }

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag)
        if (cssClasses) {
            rootElement.className = cssClasses
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value)
            }
        }
        document.getElementById(this.hookID).append(rootElement)
        return rootElement
    }
}

class Product {
    // title = 'DEFAULT'
    // imageUrl
    // description
    // price

    constructor(title, image, desc, price) {
        this.title = title
        this.imageUrl = image
        this.description = desc
        this.price = price
    }
}

class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId, false)
        this.product = product
        this.render()
    }

    addToCart() {
        App.addProductToCart(this.product)
    }

    render() {
        const prodEl = this.createRootElement('li', 'product-item')
        prodEl.innerHTML = `
                <div>
                    <img src="${this.product.imageUrl}" alt="${this.product.title}"/>
                    <div class="product-item__content"
                        <h2>${this.product.title}</h2>
                        <h3>\$${this.product.price}</h3>
                        <p>${this.product.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `
        const addCartButton = prodEl.querySelector('button')
        addCartButton.addEventListener('click', this.addToCart.bind(this))
    }
}

class ProductList extends Component {
    #products = []
    constructor(hookId) {
        super(hookId, false)
        this.render()
        this.fetchProducts()
    }

    fetchProducts() {
        this.#products = [
            new Product(
                'A Pillow',
                'https://eh-ro.akinoncdn.com/products/2022/04/11/217190/1e62d400-1a55-4c15-b7f6-24e81e34bc0a_size365x273_cropCenter.jpg',
                'A soft pillowdddddddddddd!',
                19.99
            ),
            new Product(
                'A Carpet',
                'https://d2mpxrrcad19ou.cloudfront.net/item_images/1289413/12235326_fullsize.jpg',
                'A carpet ddddddddddddddd!',
                89.99
            )
        ]
        this.renderProducts()
    }

    renderProducts() {
        for (const prod of this.#products) {
            new ProductItem(prod, 'prod-list')
        }
    }

    render() {
        this.createRootElement('ul', 'product-list',
            [new ElementAttribute('id', 'prod-list')]
        )
        if (this.#products && this.#products.length > 0) {
            this.renderProducts()
        }
    }
}

class ElementAttribute {
    constructor(name, value) {
        this.name = name
        this.value = value
    }
}

class ShoppingCart extends Component {
    items = []

    constructor(hookId) {
        super(hookId);
    }

    set cartItems(value) {
        this.items = value
        this.totalOutput.innerHTML = `<h2>Totoal: \$${this.totalAmount.toFixed(2)}</h2>`
    }

    get totalAmount() {
        return this.items.reduce((previousValue, currentItem) => previousValue + currentItem.price, 0)
    }

    addProduct(product) {
        this.cartItems = [...this.items, product]
    }

    orderProducts() {
        console.log('Order...')
        console.log(this.items)
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart')
        cartEl.innerHTML = `
                <h2>Totoal: \$${0}</h2>
                <button>Order Now!</button>
            `
        const orderButton = cartEl.querySelector('button')
        // orderButton.addEventListener('click', () => this.orderProducts())
        orderButton.addEventListener('click', this.orderProducts.bind(this))
        this.totalOutput = cartEl.querySelector('h2')
    }
}

class Shop {

    constructor() {
        this.render()
    }

    render() {
        this.cart = new ShoppingCart('app')
        new ProductList('app')
    }
}

class App {
    static cart

    static init() {
        const shop = new Shop()
        this.cart = shop.cart
    }

    static addProductToCart(product) {
        this.cart.addProduct(product)
    }
}

App.init()
