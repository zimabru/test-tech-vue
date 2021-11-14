<template>
    <div class="unitCard">

        <img src="https://images.caradisiac.com/images/8/9/2/3/38923/S1-Les-cles-de-l-entretien-mecanique-les-astuces-et-conseils-de-Caradisiac-624217.jpg" alt="">
        <p class="title">Heyo!!</p>
        <button><i class="fas fa-pencil-alt bdr"></i>Voir detail</button>

    </div>
</template>

<script>

    export default {
        name: "UnitCard"
    }
</script>

<style  scoped>

.unitCard{
    position: relative;
    width: 31%;
    min-width: 200px;
    overflow: hidden;
    background:#fff;
    margin: 1.1%;
    border-radius: 10px 10px 0 0 ;
    box-shadow: 0px 0px 10px rgb(119, 113, 113);
}
img{
    height: 70%;
    width: 100%;
    object-fit: cover;
}
.title{
    position:absolute;
    font-weight: bold;
    color:#000;
    font-size: 1.5rem;
    left:20px;
    top:72%;
}
button{
    position:absolute;
    bottom: 15px;
    right: 10px;
    font-weight: bold;
    min-width: 40%;
    border-radius: 15px;
    font-size: 1.3rem;
    color:#fff;
    background: rgb(255,165,2);
    border:  1px solid rgb(224, 151, 15);
}
.bdr{
    margin-right: 10px;
}
</style>