<template>
    <div>
        <hr class="divider mt-5 mb-5">
        <div class="footer-container">
            
            <div class="icon-bar">
                <!-- Add font awesome icons -->
                <a href="https://www.instagram.com/evanfisher.photo/"><font-awesome-icon :icon="['fab', 'instagram']" size="lg" /></a>
                <a href="https://www.linkedin.com/in/evan-fisher-ba5e"><font-awesome-icon :icon="['fab', 'linkedin']" size="lg" /></a>
                <a href="https://www.facebook.com/evan.fisher.359/"><font-awesome-icon :icon="['fab', 'facebook']" size="lg" /></a>
            </div>

            <div class="copyright text">
                © Evan Fisher Photography 2022
            </div>
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

.footer-container {
    text-align: center;
    margin: 0 100px 0 100px;
}

.icon-bar {
    margin-bottom: 20px;
}

a {
    padding: 10px;
    margin: 10px;
    color: $highlight-color;
}
</style>