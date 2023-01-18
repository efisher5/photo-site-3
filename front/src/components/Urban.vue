<template>
    <div class="page-container">
        <div class="image-container">
            <img src="../../assets/images/DSC_0581.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0615.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0713-3.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0733.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0775.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0784.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0817.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0986.jpg" class="grid-item">
        </div>
        <img src="../../assets/images/DSC_0918.jpg" class="">
    </div>

</template>

<script lang="ts">
export default {
    setup() {
        
    }
}
</script>

<style scoped lang="scss">
@import '../styles.scss';

img {
    height: 40vh;
    &:hover {
        border: 2px solid $highlight-color !important;
        cursor: pointer;
    }
}

.page-container {
    text-align: center;
}

.image-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    justify-items: center;
    width: 80%;
    position: relative;
    left: 10%;
}

.grid-item {
    
}


</style>