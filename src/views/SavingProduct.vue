<template>
  <router-link to="/">
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
      items: []
    };
  },
  mounted() {
    fetch('http://localhost:8080/items')
    .then(res => res.json())
    .then(data => this.items = data)
    .catch(err => console.log(err.message))
  }
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
