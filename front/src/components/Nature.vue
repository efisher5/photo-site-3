<template>
    <div class="page-container">
        <div class="image-container">
            <img src="../../assets/images/DSC_0542.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0397.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0856.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0602.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0307.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0599.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0419.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0416.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0903.jpg" class="grid-item">
            <img src="../../assets/images/DSC_1019.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0654.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0679.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0678.jpg" class="grid-item">
            <img src="../../assets/images/DSC_0844.jpg" class="grid-item">
        </div>
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