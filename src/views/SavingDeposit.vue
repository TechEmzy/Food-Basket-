<template>
    <router-link to="/">
        <div class="header">
          <div class="arrow">
              <ion-icon name="arrow-round-back"></ion-icon>
          </div>
          <h1>Saving Deposit</h1>
        </div>
    </router-link>

    <div class="paragraph-div">
        <div class="body-icon">
            <!-- <i class="fa-duotone fa-empty-set"></i> -->
            <ion-icon name="alert"></ion-icon>
        </div>
        
    
        <p class="paragraph1">You have no</p>
        <p class="paragraph2">saving deposit</p>
    </div>
  </template>
  
  <script>
  export default {
  
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
      /* justify-content: start; */
  }
  h1{
      margin: auto;
  }
  .arrow{
      font-size: 50px;
      margin-top: 10px;
  }
  a{
      display: contents;
      text-decoration: none;
      color: white;
      margin: auto;
  }

  .paragraph-div{
    font-size: 20px;
    color: rgba(29, 3, 29, 0.916);
    margin: auto;
}

.body-icon{
    font-size: 50px;
    margin-top: 60px;
}
.paragraph1{
    margin-top: auto;
}
  </style>