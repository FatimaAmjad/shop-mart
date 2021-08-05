<template>
  <div class="home">

    <productddrawer
    :product="product"
    :active="active.product_drawer"
    v-on:close-product-drawer="closeproductdrawer()"/>

    
    <div  class="product-card-container">
      
    <productscard 
    v-for="products in items"
    :key="products.id"
    :product="products"
    v-on:view-product="viewProduct($event)"/>
   
    </div> 
  </div>
</template>

<script>

import item from '../data/item.js'
import productscard from '../components/products/productscard.vue'
import productddrawer from '../components/products/productddrawer.vue'
export default {
  name: 'Home',
  components:{
   productscard,
   productddrawer
  },

  data () {
    return{
      items : item,
      product:null,
      active:{
        product_drawer:false
      }
    }
  },
  methods:{
    viewProduct(product){
      this.product= product
      this.active.product_drawer=true
      console.log(this.product)
    },
    closeproductdrawer(){
      this.active.product_drawer=false
    }
  }
}
</script>
<style lang="scss">
.product-card-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
}
</style>
