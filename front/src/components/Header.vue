<template>
    <div>
        <div>
            <h1>Evan Fisher</h1>
            <b><p>Photography</p></b>
        </div>
        <div class="justify-content-center navbar navbar-expand-lg navbar-light">
            
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/nature">Nature</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/urban">Urban</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
        </div>
        <hr class="divider mb-5">
    </div>
</template>

<script lang="ts">
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
@import '../styles.scss'; 

.nav-item {
    padding-left: 20px;
    padding-right: 20px;
}

.navbar {
    text-align: center !important;
    background-color: white !important;
    margin-bottom: 1rem;
}

h1 {
    text-align: center;
    margin: 2rem 0 0 0;
    color: $highlight-color;
    font-family: 'Andale Mono', monospace;
    font-weight: bold;
}

p {
    text-align: center;
    font-family: 'Andale Mono', monospace;
    font-weight: bold;
    margin: 0;
}

a {
    color: $grey !important;

    &:hover {
        color: $highlight-color !important;
    }
}
</style>