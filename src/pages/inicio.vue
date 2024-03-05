<template>
<div id="contenedor">
    <div class="inicioCabecera">
        <div class="imgLogo">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="titulos">
            <h2>¡Bienvenido a tu viaje de ensueño! Descubre nuestra selección de autos para alquilar.</h2>
            <legend class="leyenda">Renta un auto y haz tu historia.</legend>       
        </div>
        
    </div>
    <div class="imgCarro">
        <img src="../assets/inicio1.jpg" class="img-fluid" alt="...">

    </div>
    <div class="publicidad">
        <img id="imgP" src="../assets/inicio2.1.jpg" alt="...">
        <img id="imgP" src="../assets/inicio2.3.jpg"  alt="...">


    </div>

</div>


</template>

<script>
export default {

}
</script>


<style>
#contenendor{
    display: flex;
    justify-content: center;
    align-items: center;
}
.inicioCabecera{
    display: flex;
    margin: 10px;
}
.titulos{
    margin: 10px;
}
.imgLogo{
    width: 30%;
    max-width: 200px;
    min-width: 100px;
}
.imgLogo img{
    width: 100%;
}

.imgCarro{
    margin-top: 50px;
}
.publicidad{
    display: flex;
    justify-content: center;
}
#imgP{
    margin: 50px;
    max-width: 300px;
}

@media screen and (max-width: 700px) {
    .inicioCabecera{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .imgLogo{
    width: 100%;
    }
    .leyenda{
        display: none;
    }
    h2{
        font-size: 1rem;
    }
    .imgCarro{
        display: none;
    }
    .publicidad{
        flex-direction: column;
        align-items: center;
    }
    #imgP{
    margin: 10px;

}


}


</style>