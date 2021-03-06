import { createStore } from 'vuex'

function updatelocalstorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  state: {
    cart: []
  },
  getters: {
    productQuantity: state => product => {
      const item = state.cart.find(i => i.id === product.id)

      if (item) return item.quantity
      else return null
    }
  },
  mutations: {
    addToCart(state, product) {

      let item = state.cart.find(i => i.id === product.id)

      if (item) 
      {
         item.quantity++
      }
      else
       { 
        state.cart.push({ ...product, quantity: 1 })
       }
      updatelocalstorage(state.cart)
    },

    removeFromCart(state, product) {
      let item = state.cart.find(i => i.id === product.id)

      if (item)
      {
        if (item.quantity > 1) {
          item.quantity--
        }
        else {
          state.cart = state.cart.filter(i => i.id !== product.id)

        }

        
      }
      updatelocalstorage(state.cart)
    },
    updateCartFromLocalStorage(state){
      const cart = localStorage.getItem('cart')
      if(cart){
        state.cart = JSON.parse(cart)
      }
    }
    },
    actions: 
    {
    },
    modules:
     {
    }
  })
