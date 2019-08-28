const initialState = {
    product: [
        { id: 1, image: '../image/product/air-jordan1-blue.jpg', name: 'Shoes', price: 100, quantity: 1 },
        { id: 1, image: '../image/product/air-jordan1-pink.jpg', name: 'Shoes', price: 100, quantity: 1 },
        { id: 1, image: '../image/product/air-jordan1-green.jpg', name: 'Shoes', price: 100, quantity: 1 },
    ],
    cart:[],
    total:0,
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
        let productOfProducts   = state.product.find(product => product.id === action.id);
        let productOfCart       = state.cart.find(product => action.id === product.id);

        if (productOfCart) {
            productOfProducts.quantity++
            return {
                ...state,
                total: state.cart.reduce((total, productOfCart) => total + ( productOfCart.price * productOfProducts.quantity ), 0)
            }
        } else {
            productOfProducts.quantity = 1
            return {
                ...state,
                cart    : [...state.cart, productOfProducts],
                total   : action.product.price
            }
        }

        case 'REMOVE_ITEM' :
            return {
                ...state,
                cart    : this.state.cart.filter(product => action.id !== product.id),
                total   : state.cart.reduce((total, productOfCart) => total + ( productOfCart.price * productOfCart.quantity ), 0)
            }

        default:
            return state
    }
}

export default CartReducer;