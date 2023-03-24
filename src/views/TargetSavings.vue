<template>
    <router-link to="/">
        <div class="header">
            <div class="icon">
                <ion-icon name="arrow-round-back"></ion-icon>
            </div>
            <h1>Target Savings</h1>
        </div>
    </router-link>

    <router-link to="/SavingProduct">
        <div class="add">
            <div class="center">
                <div class="icon">
                    <ion-icon name="add-circle"></ion-icon>
                </div>
                <h2>Add New</h2>
            </div>
        </div>
    </router-link>

    <div class="paragraph-div">
        <div class="body-icon">
            <!-- <i class="fa-duotone fa-empty-set"></i> -->
            <ion-icon name="alert"></ion-icon>
        </div>
        
    
        <p class="paragraph1">You have no</p>
        <p class="paragraph2">target Savings</p>
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

.add{
    width: 40%;
    border-radius: 15px;
    padding: 2px;
    margin: 45px auto;
    color: white;
    background: rgba(29, 3, 29, 0.916);
    display: flex;
    text-align: center;
}
h2{
    margin: auto;
}
.center{
    display: flex;
    margin: auto;
}

.paragraph-div{
    font-size: 20px;
    color: rgba(29, 3, 29, 0.916);
    margin: auto;
}

.body-icon{
    font-size: 50px;
}
.paragraph1{
    margin-top: auto;
}
</style>