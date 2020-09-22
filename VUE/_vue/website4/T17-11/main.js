var app = new Vue({
    el: '#app',
    data: {
        navs: [ { id: 'shop', title: '商品列表', icon: 'fa-product-hunt' },
                { id: 'cart', title: '購物車', icon: 'fa-shopping-cart' },
                { id: 'checkout', title: '結帳', icon: 'fa-credit-card' }],
        currentComponentId: ''
    },
    components: {
        shop: { template: `<h1>Product list...</h1>` },
        cart: { template: `<h1>Shopping Cart...</h1>` },
        checkout: { template: `<h1>Checkout...</h1>` }
    }
});
