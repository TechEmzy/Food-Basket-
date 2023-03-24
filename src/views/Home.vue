<template>
  <div class="home">
    <div class="header">
      <h3>Hello Emmanuel,</h3>
      <h2>Welcome Back</h2>
    </div>

    <Balance />

    <div class="flex">
      <router-link to="/TargetSavings">
        <div class="target">
            <div class="circle">
                <ion-icon name="wallet" class="icon"></ion-icon>
            </div>          
          <p>Target Savings</p>
        </div>
      </router-link>

    <router-link to="/savingDeposit">
      <div class="saving">
            <div class="circle">
                <ion-icon name="cash" class="icon"></ion-icon>
            </div>
        <p>Saving Deposit</p>
      </div>
    </router-link>
    </div>
       
  </div>

  <h2 id="pbody">Next target savings</h2>
</template>

<script>
import Balance from '../components/Balance.vue'

export default {
  name: 'Home',
  components: { Balance }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Mulish:wght@700;900&family=Permanent+Marker&display=swap');

.target{
    display: flex;
    flex-direction: column;
    width: 24%;
    padding: 2px;
    margin: 20px auto;
    color: white;
    background: rgba(29, 3, 29, 0.916);
    border-radius: 10px;
    display: inline-flex;
    margin-right: 5px;
}
.saving{
    display: flex;
    flex-direction: column;
    width: 24%;
    padding: 2px;
    margin: 20px auto;
    color: white;
    background: rgba(29, 3, 29, 0.916);
    border-radius: 10px;
    display: inline-flex;
    margin-left: 5px;
}

.circle{
    background-color: yellowgreen;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    margin: 10px auto;
    position: relative;
}
.icon{
    width: 50px;
    margin: auto;
    color: rgba(29, 3, 29, 0.916);
    position: absolute;
    top: 28%;
    font-size: 40px;
    left: 20%;
}

a{
  text-decoration: none;
  text-align: center;
}
#pbody{
    font-family: Mulish, Arial, Helvetica, sans-serif;
    font-size: 30px bold;
    text-align: left;
    color: rgba(29, 3, 29, 0.916);
    margin-left: 25%;
}
</style>