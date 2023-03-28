<template>
  <router-link to="/TargetSavings">
        <div class="header">
            <div class="icon">
                <ion-icon name="arrow-round-back"></ion-icon>
            </div>
            <h1>Savings Product</h1>
        </div>
  </router-link>

  <div>
    <div v-for="(item, index) in items" :key="index">
      <item-card :item="item" />
    </div>
  </div>
</template>

<script>
import ItemCard from '../components/ItemCard.vue';

export default {
  components: {
    ItemCard
  },
  data() {
    return {
      items: [{ id: 1, name: "DIAMOND", description: "(Grocery)", price: "$100 /day", image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/S/167294_1637572422.jpg" },
        { id: 2, name: "CLASSIC", description: "(Grocery)", price: "$200 /day", image: "https://m.media-amazon.com/images/I/71gbaYqp2KL._AC_SL1500_.jpg" },
        { id: 3, name: "BANANA", description: "(Food stuff)", price: "$50 /day", image: "https://martking.ng/wp-content/uploads/2022/07/green-banana-martking.ng-online-groceries-superstore-lagos-e1658941722954.jpeg" },
        { id: 4, name: "EMERALD", description: "(Grocery)", price: "$300 / day", image: "https://uploads-ssl.webflow.com/62ad15964094cf2341ba1b5f/63e47f7d78a47a3a3654fbca_GroceryBag-with-Products_Jan%2020v2.png" },
        { id: 5, name: "TOPAZ", description: "(Grocery)", price: "$400 / day", image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/S/167294_1637572422.jpg" },
        { id: 6, name: "PEARL", description: "(Grocery)", price: "$500 /day", image: "https://uploads-ssl.webflow.com/62ad15964094cf2341ba1b5f/63e47f7d78a47a3a3654fbca_GroceryBag-with-Products_Jan%2020v2.png" }  
    ]
    }
  }
//   mounted() {
//     fetch('http://localhost:8080/items')
//     .then(res => res.json())
//     .then(data => this.items = data)
//     .catch(err => console.log(err.message))
//   }
}
</script>

<style scoped>
.header{
    width: 50%;
    padding: 2px;
    margin: 20px auto;
    color: white;
    background: rgba(29, 3, 29, 0.916);
    display: flex;
}
h1{
    margin: auto;
}
.icon{
    font-size: 50px;
    margin-top: 10px;
}
a{
    text-decoration: none;
    color: white;
}
</style>
