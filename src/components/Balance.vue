<template>
    <div class="balance">
        <p>saving deposit balance</p>
        <span>&#8358; {{ balance }}</span>
        <p>{{ currentDate }}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
        balance: "",
        currentDate: "",
    };
  },
  mounted() {
    this.fetchBalance();
    this.getCurrentDate();
  },
  methods: {
    async fetchBalance() {
      try {
        const response = await fetch('/api/saving-deposit/balance'); //where i will put my balance api
        const data = await response.json();
        this.balance = data.balance;
      } catch (error) {
        console.error(error);
      }
    },
    getCurrentDate() {
      const today = new Date();
      const options = { weekday: 'long', day: 'numeric', month: 'long' };
      this.currentDate = today.toLocaleDateString('en-US', options);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Permanent+Marker&family=Roboto:wght@400;700&display=swap');

.balance{
      width: 50%;
      padding: 2px;
      margin: 20px auto;
      color: white;
      background: rgba(29, 3, 29, 0.916);
      border-radius: 10px;
  }

  span{
    font-family: Anton, Verdana, Geneva, Tahoma, sans-serif;
    font-size: 80px;
  }

  p{
    font-family: Roboto;
    font-size: 20px;
  }
</style>