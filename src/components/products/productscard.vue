<template>
    <div class="card">
        <h3>{{product.name}} </h3>
        <h5 class="price">Price: ${{product.price}}</h5>
        <p class="description">Description: {{ description}}</p>
        <p class="text-muted">{{product.category}}</p>
        <button class="viewpbutton" @click="$emit('view-product',product)">View</button>
    </div>
</template>
<script>
export default {
    props:[
        'product'
        ],
    computed:{
        description(){
           
            return this.product.description
            
        }
    }
}
</script>
.<style lang="scss">

.card{
    width: 80%;
    margin: 50px;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 5px grey;

    h5.price{
        color: grey;
    }
    p.text-muted{
        color: grey;
    }
    p.description{
        font-size: .85rem;
    }
    button.viewpbutton{
        padding: 10px;
        background-color: rgb(79,160,187);
        border: none;
        color: white;
        font-weight: bold;
        font-size: 1.15rem;
        border-radius: 5px;
        cursor: pointer;
    }
}

</style>
