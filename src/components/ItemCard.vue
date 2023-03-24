<template>
  <div class="item-card">
    <img :src="item.image" alt="Item image" class="img"/>
    <div class="item-details">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <p class="price">{{ item.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
props: {
  item: {
    type: Object,
    required: true
  }
}
}
</script>

<style scoped>
.item-card{
width: 220px;
background-color: rgba(128, 128, 128, 0.322);
border-radius: 10%;
margin-left: 40%;
/* display: flex; */
}
.img{
width: 200px;
margin-top: 10px;
background-color: white;
border-radius: 10px; 
}
.price{
  font-weight: bold;
  padding-bottom: 10px;
}
</style>


